import { AdminShell } from "@/components/admin-shell";
import { getServicePackages } from "@/lib/admin-data";
import { requireAdminSession } from "@/lib/admin-guard";
import { PackageEditor } from "@/app/admin/paketler/package-editor";

export const dynamic = "force-dynamic";

export default async function AdminPackagesPage() {
  await requireAdminSession();

  const { data: packages, error } = await getServicePackages();

  return (
    <AdminShell
      active="paketler"
      title="Paketler / Hizmetler"
      kicker="Satilacak hizmet katmanlari ve paket yapilandirmasi."
    >
      {error ? (
        <div className="admin-warning">
          Paketler okunamadi: {error}
        </div>
      ) : null}

      <PackageEditor initialPackages={packages} />
    </AdminShell>
  );
}
