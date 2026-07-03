"use client";

import { useMemo, useState, useTransition } from "react";
import { updateServicePackage } from "@/app/admin/paketler/actions";
import type { ServicePackageRow } from "@/lib/supabase/types";

type PackageForm = {
  id: string;
  label: string;
  title: string;
  description: string;
  price: string;
  includedItems: string;
  status: "Aktif" | "Taslak";
};

function toForm(pkg: ServicePackageRow, index: number): PackageForm {
  return {
    id: pkg.id,
    label: `Paket ${index + 1}`,
    title: pkg.title,
    description: pkg.description ?? "",
    price: pkg.price ?? "",
    includedItems: pkg.included_items.join("\n"),
    status: pkg.status === "Aktif" ? "Aktif" : "Taslak",
  };
}

export function PackageEditor({ initialPackages }: { initialPackages: ServicePackageRow[] }) {
  const initialForms = useMemo(
    () => initialPackages.map((pkg, index) => toForm(pkg, index)),
    [initialPackages]
  );
  const [packages, setPackages] = useState<PackageForm[]>(initialForms);
  const [selectedId, setSelectedId] = useState(initialForms[0]?.id ?? "");
  const [form, setForm] = useState<PackageForm | null>(initialForms[0] ?? null);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  if (!form && initialForms[0]) {
    setForm(initialForms[0]);
  }

  const selected = packages.find((pkg) => pkg.id === selectedId) ?? packages[0];

  function selectPackage(pkg: PackageForm) {
    setSelectedId(pkg.id);
    setForm(pkg);
    setMessage("");
  }

  function update(field: keyof PackageForm, value: string) {
    setForm((current) => current ? { ...current, [field]: value } : current);
    setMessage("");
  }

  function savePackage() {
    if (!form) {
      return;
    }

    startTransition(async () => {
      const result = await updateServicePackage(form);
      setMessage(result.message);

      if (result.ok) {
        setPackages((current) =>
          current.map((pkg) => (pkg.id === form.id ? form : pkg))
        );
      }
    });
  }

  if (!selected || !form) {
    return (
      <section className="admin-panel admin-empty-state">
        <h2>Kayitli paket bulunamadi.</h2>
        <p>Supabase service_packages tablosuna paket eklenince burada gorunecek.</p>
      </section>
    );
  }

  return (
    <section className="admin-grid-two packages-editor">
      <div className="admin-panel admin-package-grid">
        {packages.map((pkg) => (
          <article
            className={selectedId === pkg.id ? "is-selected" : ""}
            key={pkg.id}
          >
            <span>{pkg.status}</span>
            <small>{pkg.label}</small>
            <h2>{pkg.title}</h2>
            <p>{pkg.description}</p>
            <strong>{pkg.price || "Teklif ile"}</strong>
            <button type="button" onClick={() => selectPackage(pkg)}>
              Paketi Duzenle
            </button>
          </article>
        ))}
      </div>

      <div className="admin-panel admin-form-card">
        <div className="admin-form-head">
          <span>Paket Duzenle</span>
          <h2>{form.label}</h2>
          <p>Degisiklikler Supabase service_packages tablosuna kalici olarak kaydedilir.</p>
        </div>

        <label>
          Baslik
          <input
            value={form.title}
            onChange={(event) => update("title", event.target.value)}
          />
        </label>

        <label>
          Aciklama
          <textarea
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
          />
        </label>

        <label>
          Fiyat
          <input
            placeholder="Orn. 25.000 TL veya Teklif ile"
            value={form.price}
            onChange={(event) => update("price", event.target.value)}
          />
        </label>

        <label>
          Durum
          <select
            value={form.status}
            onChange={(event) => update("status", event.target.value as PackageForm["status"])}
          >
            <option value="Aktif">Aktif</option>
            <option value="Taslak">Taslak</option>
          </select>
        </label>

        <label>
          Neler Dahil?
          <textarea
            rows={6}
            value={form.includedItems}
            onChange={(event) => update("includedItems", event.target.value)}
          />
        </label>

        {message ? <p className="admin-save-message">{message}</p> : null}

        <button
          className="admin-gold-button"
          type="button"
          onClick={savePackage}
          disabled={isPending}
        >
          {isPending ? "Kaydediliyor..." : "Paketi Kaydet"}
        </button>
      </div>
    </section>
  );
}
