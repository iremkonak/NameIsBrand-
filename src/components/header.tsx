"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "./icons";
import { BrandLogo } from "./brand-logo";

const links = [
  { label: "Ana Sayfa", href: "/#top" },
  { label: "NAB System", href: "/#system" },
  { label: "Hizmetlerimiz", href: "/#services" },
  { label: "Hakkımızda", href: "/#manifesto" },
  { label: "İçgörüler", href: "/#insights" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Name is Brand ana sayfa">
        <BrandLogo />
      </a>

      <nav className="desktop-nav" aria-label="Ana menü">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/on-gorusme">
        Ön Görüşme
        <ArrowUpRight />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobil menü">
          {links.map((link, index) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary" href="/on-gorusme" onClick={() => setOpen(false)}>
          Ön Görüşme Talep Et
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
