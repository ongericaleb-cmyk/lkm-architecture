import Link from "next/link";

const explore = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Editions", href: "/editions" },
];

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lkmarchitecture_254/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/lkmarchitecture_254/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lkmarchitecture_254",
  },
  {
    label: "X",
    href: "https://x.com/lkmarchitecture",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Lkmarchitecture_254",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-24 lg:px-16">

        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.6fr_0.8fr]">

          {/* BRAND */}
          <div>

            <img
              src="/brand/lkm-primary-white.png"
              alt="LKM Architecture"
              className="h-14 w-auto object-contain object-left md:h-16"
            />

            <p className="mt-8 max-w-lg text-2xl font-serif leading-[1.25] tracking-[-0.02em] text-white/85 md:text-3xl">
              Creating places with purpose,
              character and lasting value.
            </p>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Architecture, development and design across Kenya
              and East Africa.
            </p>

          </div>

          {/* EXPLORE */}
          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Explore
            </p>

            <div className="mt-7 flex flex-col gap-4">

              {explore.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/start-a-project"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Start a Project
              </Link>

            </div>

          </div>

          {/* CONNECT */}
          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
              Connect
            </p>

            <div className="mt-7 flex flex-col gap-4">

              <a
                href="https://wa.me/254720140647"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/65 transition hover:text-white"
              >
                WhatsApp ↗
              </a>

              <a
                href="mailto:Lkmarchitecture.ke@gmail.com"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Lkmarchitecture.ke@gmail.com
              </a>

              <div className="my-2 h-px w-full bg-white/10" />

              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label} ↗
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* CONVERSION STRIP */}
        <div className="mt-20 border-t border-white/10 pt-10 md:mt-28">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                Have a project in mind?
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-serif leading-tight tracking-[-0.03em] md:text-5xl">
                Let&apos;s talk about what you are planning.
              </h2>

            </div>

            <Link
              href="/start-a-project"
              className="inline-flex shrink-0 items-center justify-between gap-10 border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.22em] transition-colors hover:bg-white hover:text-neutral-950"
            >
              Start a Project
              <span>→</span>
            </Link>

          </div>

        </div>

        {/* LEGAL / COPYRIGHT */}
        <div className="mt-16 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-white/25 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 LKM Architecture
            </p>

            <p>
              Architecture · Development · Design
            </p>

            <p>
              Kenya · East Africa
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}