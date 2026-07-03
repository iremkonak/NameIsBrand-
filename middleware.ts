import { NextRequest, NextResponse } from "next/server";

// ─── Constants (inlined so middleware has zero external imports) ──────────────
const ADMIN_SESSION_COOKIE = "nb_admin_session_v5";
const LEGACY_ADMIN_SESSION_COOKIES = [
  "nb_admin_access_token",
  "nb_admin_session_v2",
  "nb_admin_session_v3",
  "nb_admin_session_v4",
];

// ─── Admin email whitelist ────────────────────────────────────────────────────
function getAllowedAdminEmails(): string[] {
  const envEmails = process.env.ADMIN_EMAILS?.split(",") ?? [];
  return Array.from(
    new Set(
      ["nameisbrandcom@gmail.com", ...envEmails]
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean)
    )
  );
}

function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return getAllowedAdminEmails().includes(email.trim().toLowerCase());
}

// ─── Token → email ───────────────────────────────────────────────────────────
async function getAdminEmailFromToken(
  token?: string | null
): Promise<string | null> {
  if (!token) return null;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return null;

  try {
    // 5-second timeout — fails fast if Supabase is paused or having issues
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
      cache: "no-store",
      signal: controller.signal,
      headers: {
        apikey: supabaseAnonKey,
        authorization: `Bearer ${token}`,
      },
    });

    clearTimeout(timeout);

    if (!response.ok) return null;

    const user = (await response.json()) as { email?: string };
    return user.email ?? null;
  } catch {
    return null;
  }
}

// ─── Simple In-Memory Rate Limiter ───────────────────────────────────────────
const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = loginAttempts.get(ip);

  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_ATTEMPTS) return true;

  record.count += 1;
  return false;
}

// ─── Security Headers ─────────────────────────────────────────────────────────
function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  return response;
}

function redirectToLogin(request: NextRequest, pathname: string): NextResponse {
  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);

  const response = NextResponse.redirect(loginUrl);
  for (const cookieName of LEGACY_ADMIN_SESSION_COOKIES) {
    response.cookies.delete(cookieName);
  }
  return addSecurityHeaders(response);
}

// ─── Middleware ───────────────────────────────────────────────────────────────
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only guard /admin routes
  if (!pathname.startsWith("/admin")) {
    return addSecurityHeaders(NextResponse.next());
  }

  // Rate-limit login POST
  if (pathname === "/admin/login" && request.method === "POST") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return new NextResponse(
        "Çok fazla deneme. Lütfen 15 dakika bekleyin.",
        {
          status: 429,
          headers: {
            "Retry-After": "900",
            "Content-Type": "text/plain; charset=utf-8",
          },
        }
      );
    }
  }

  // Validate session
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const email = await getAdminEmailFromToken(token);
  const isAuthenticated = isAllowedAdminEmail(email);

  // Login page: redirect to /admin if already authenticated
  if (pathname === "/admin/login") {
    if (isAuthenticated) {
      const response = NextResponse.redirect(new URL("/admin", request.url));
      for (const cookieName of LEGACY_ADMIN_SESSION_COOKIES) {
        response.cookies.delete(cookieName);
      }
      return addSecurityHeaders(response);
    }
    return addSecurityHeaders(NextResponse.next());
  }

  // All other /admin/* routes: require authentication
  if (!isAuthenticated) {
    return redirectToLogin(request, pathname);
  }

  const response = NextResponse.next();
  for (const cookieName of LEGACY_ADMIN_SESSION_COOKIES) {
    response.cookies.delete(cookieName);
  }
  return addSecurityHeaders(response);
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
