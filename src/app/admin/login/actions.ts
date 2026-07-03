"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import {
  ADMIN_SESSION_COOKIE,
  LEGACY_ADMIN_SESSION_COOKIES,
  isAllowedAdminEmail,
} from "@/lib/admin-auth";

function getSupabaseAuthClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase public environment variables are missing.");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/admin/login?error=missing");
  }

  let sessionToken: string | null = null;
  let userEmail: string | null = null;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const supabase = getSupabaseAuthClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    clearTimeout(timeout);

    if (!error && data.session?.access_token && data.user?.email) {
      sessionToken = data.session.access_token;
      userEmail = data.user.email;
    }
  } catch {
    // Supabase timeout or network error — fall through to error redirect
  }

  if (!sessionToken || !userEmail) {
    redirect("/admin/login?error=invalid");
  }

  if (!isAllowedAdminEmail(userEmail)) {
    redirect("/admin/login?error=unauthorized");
  }

  const cookieStore = await cookies();
  for (const cookieName of LEGACY_ADMIN_SESSION_COOKIES) {
    cookieStore.delete(cookieName);
  }
  cookieStore.set(ADMIN_SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  for (const cookieName of LEGACY_ADMIN_SESSION_COOKIES) {
    cookieStore.delete(cookieName);
  }
  redirect("/admin/login");
}
