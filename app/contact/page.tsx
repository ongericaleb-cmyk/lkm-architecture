import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
            LKM ARCHITECTURE
          </Link>

          <nav className="hidden gap-8 text-sm md:flex">
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/editions">Editions</Link>
          </nav>

          <Link
            href="/start-a-project"
            className="border border-neutral-950 px-4 py-2 text-xs"
          >
            START A PROJECT
          </Link>
        </div>
      </header>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Contact
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
            Let&apos;s talk
            <br />
            about what&apos;s next.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you are planning a home, developing property, starting a
            commercial project or exploring an idea, we would like to hear
            about it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Start here
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
              Tell us about your project.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              The more we understand about your project, the better we can
              advise you on the right next step.
            </p>

            <Link
              href="/start-a-project"
              className="mt-8 inline-block bg-neutral-950 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white"
            >
              Start a Project
            </Link>
          </div>

          <div className="border-t border-neutral-200">
            <div className="border-b border-neutral-200 py-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                WhatsApp
              </p>

              <a
                href="https://wa.me/254720140647"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-xl"
              >
                +254 720 140 647
              </a>
            </div>

            <div className="border-b border-neutral-200 py-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Email
              </p>

              <a
                href="mailto:info@lkmarchitecture.com"
                className="mt-2 block text-xl"
              >
                info@lkmarchitecture.com
              </a>
            </div>

            <div className="border-b border-neutral-200 py-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Practice
              </p>

              <p className="mt-2 text-xl">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Direct conversation
              </p>

              <h2 className="mt-6 text-4xl font-medium leading-tight md:text-6xl">
                Sometimes the
                <br />
                fastest way is a conversation.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-lg leading-8 text-neutral-400">
                Have a quick question, an early idea or something you would
                rather discuss directly? Reach the LKM Architecture team on
                WhatsApp.
              </p>

              <a
                href="https://wa.me/254720140647"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block w-fit border border-white px-6 py-4 text-xs uppercase tracking-[0.2em]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            Connect
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              Instagram
            </a>

            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              Facebook
            </a>

            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              YouTube
            </a>

            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              X
            </a>

            <a
              href="#"
              className="border border-neutral-200 px-6 py-6 text-sm"
            >
              Snapchat
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Location
            </p>

            <h2 className="mt-5 text-4xl font-medium">
              Nairobi
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-neutral-600">
              Based in Kenya, working across residential, commercial,
              hospitality, institutional and development projects.
            </p>
          </div>

          <div className="flex min-h-[280px] items-center justify-center bg-neutral-100">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Nairobi / Kenya
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 LKM Architecture</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/editions">Editions</Link>
            <Link href="/start-a-project">Start a Project</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}