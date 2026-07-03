export const ADMIN_SESSION_COOKIE = "nb_admin_session_v5";
export const LEGACY_ADMIN_SESSION_COOKIES = [
  "nb_admin_access_token",
  "nb_admin_session_v2",
  "nb_admin_session_v3",
  "nb_admin_session_v4",
];

const DEFAULT_ADMIN_EMAIL = "nameisbrandcom@gmail.com";

export function getAllowedAdminEmails() {
  const envEmails = process.env.ADMIN_EMAILS?.split(",") ?? [];

  return Array.from(
    new Set(
      [DEFAULT_ADMIN_EMAIL, ...envEmails]
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean)
    )
  );
}

export function isAllowedAdminEmail(email?: string | null) {
  if (!email) {
    return false;
  }

  return getAllowedAdminEmails().includes(email.trim().toLowerCase());
}

export async function getAdminEmailFromToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
      cache: "no-store",
      headers: {
        apikey: supabaseAnonKey,
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const user = (await response.json()) as { email?: string };
    return user.email ?? null;
  } catch {
    return null;
  }
}
