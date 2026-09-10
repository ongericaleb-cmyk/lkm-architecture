"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Editions", href: "/editions" },
];

type HeaderProps = {
  transparent?: boolean;
};

export default function Header({
  transparent = false,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const textColor = transparent
    ? "text-white"
    : "text-neutral-950";

  return (
    <header
      className={
        transparent
          ? "absolute left-0 right-0 top-0 z-50"
          : "relative z-50 border-b border-neutral-200 bg-white"
      }
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10 md:py-5 lg:px-16">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="block"
          aria-label="LKM Architecture — Home"
        >
          <img
            src={
              transparent
                ? "/brand/lkm-primary-white.png"
                : "/brand/lkm-primary-transparent.png"
            }
            alt="LKM Architecture"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden items-center gap-8 md:flex ${textColor}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/start-a-project"
            className={
              transparent
                ? "ml-2 border border-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-neutral-950"
                : "ml-2 border border-neutral-950 px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-neutral-950 hover:text-white"
            }
          >
            Start a Project
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] md:hidden ${textColor}`}
        >
          <span
            className={`relative flex h-4 w-5 items-center ${
              transparent
                ? "text-white"
                : "text-neutral-950"
            }`}
          >
            <span
              className={`absolute left-0 h-px w-5 transition-transform ${
                transparent
                  ? "bg-white"
                  : "bg-neutral-950"
              } ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />

            <span
              className={`absolute left-0 h-px w-5 transition-transform ${
                transparent
                  ? "bg-white"
                  : "bg-neutral-950"
              } ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </span>

          {open ? "Close" : "Menu"}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-neutral-200 bg-white text-neutral-950 md:hidden">

          <nav
            className="mx-auto max-w-[1500px] px-5 py-6"
            aria-label="Mobile navigation"
          >

            <div className="flex flex-col">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-neutral-200 py-5 text-2xl font-serif tracking-[-0.02em]"
                >
                  <span>{link.label}</span>
                  <span className="text-lg text-neutral-400">
                    →
                  </span>
                </Link>
              ))}

            </div>

            <div className="mt-8 grid gap-3">

              <Link
                href="/start-a-project"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between bg-neutral-950 px-6 py-5 text-[10px] uppercase tracking-[0.22em] text-white"
              >
                <span>Start a Project</span>
                <span>→</span>
              </Link>

              <a
                href="https://wa.me/254720140647"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-neutral-950 px-6 py-5 text-[10px] uppercase tracking-[0.22em]"
              >
                <span>WhatsApp LKM</span>
                <span>↗</span>
              </a>

            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6">

              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                Architecture · Development · Design
              </p>

            </div>

          </nav>

        </div>
      )}
    </header>
  );
}