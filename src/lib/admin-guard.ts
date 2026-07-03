import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, getAdminEmailFromToken, isAllowedAdminEmail } from "@/lib/admin-auth";

export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const email = await getAdminEmailFromToken(token);

  if (!isAllowedAdminEmail(email)) {
    redirect("/admin/login");
  }

  return email;
}
