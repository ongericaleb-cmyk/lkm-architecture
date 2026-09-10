import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";

const featuredProjects = projects.slice(0, 3);

const services = [
  "Architecture",
  "Interior Architecture",
  "Masterplanning",
  "Development Advisory",
  "Design & Build",
  "Project Management",
  "Feasibility & Strategy",
];

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-950">

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-neutral-950 text-white">

        <div className="absolute inset-0">
          <Image
            src="/projects/new-life-towers/01.jpg"
            alt="LKM Architecture — New Life Twin Towers"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1500px] items-end px-6 pb-12 pt-32 md:px-10 md:pb-20 lg:px-16">

          <div className="max-w-6xl">

            <p className="text-xs uppercase tracking-[0.35em] text-white/65">
              LKM Architecture
            </p>

            <h1 className="mt-7 max-w-5xl text-5xl font-serif leading-[0.92] tracking-[-0.045em] md:text-8xl lg:text-[9rem]">
              Architecture.
              <br />
              Development.
              <br />
              Design.
            </h1>

            <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

              <p className="max-w-xl text-lg leading-8 text-white/70 md:text-xl">
                Creating places with purpose, character and lasting value.
              </p>

              <div className="flex flex-wrap gap-3">

                <Link
                  href="/work"
                  className="bg-white px-6 py-4 text-xs uppercase tracking-[0.22em] text-neutral-950 transition-opacity hover:opacity-80"
                >
                  Explore Our Work
                </Link>

                <Link
                  href="/start-a-project"
                  className="border border-white/60 px-6 py-4 text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-neutral-950"
                >
                  Start a Project
                </Link>

              </div>

            </div>

          </div>

        </div>

        <div className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/40 md:block md:right-10 lg:right-16">
          Scroll to explore
        </div>

      </section>

      {/* POSITIONING */}
      <section className="border-b border-black/10">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                The Practice
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-3xl font-serif leading-[1.12] tracking-[-0.035em] md:text-5xl lg:text-6xl">
                We don&apos;t simply draw buildings.
                We think about how they work,
                how they feel, how they are built
                and how they create value.
              </h2>

              <p className="mt-9 max-w-3xl text-lg leading-8 text-neutral-600">
                LKM Architecture is a Kenya-based practice working across
                architecture, interiors, development advisory and design &
                build. Our approach connects creative thinking with technical
                understanding and commercial awareness.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] underline underline-offset-8 transition-opacity hover:opacity-50"
              >
                About LKM Architecture
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Selected Work
            </p>

            <h2 className="mt-5 text-4xl font-serif tracking-[-0.035em] md:text-6xl">
              Projects with purpose.
            </h2>

          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] underline underline-offset-8 transition-opacity hover:opacity-50"
          >
            View All Work
            <span>→</span>
          </Link>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {featuredProjects.map((project, index) => (

            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={
                index === 0
                  ? "group md:col-span-2"
                  : "group"
              }
            >

              <div className="relative overflow-hidden bg-neutral-100">

                <Image
                  src={`/projects/${project.slug}/01.jpg`}
                  alt={project.title}
                  width={1600}
                  height={1000}
                  sizes={
                    index === 0
                      ? "100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                  className={
                    index === 0
                      ? "aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      : "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  }
                />

                <div className="absolute left-5 top-5 bg-white px-3 py-2 text-xs">
                  {project.number}
                </div>

                <div className="absolute bottom-5 right-5 hidden translate-y-2 bg-white px-4 py-3 text-xs uppercase tracking-[0.18em] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                  View Project →
                </div>

              </div>

              <div className="mt-5 flex items-start justify-between gap-6">

                <div>

                  <h3 className="text-2xl font-serif tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {project.location}
                  </p>

                </div>

                <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                  {project.category}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-neutral-100 px-6 py-24 md:py-32">

        <div className="mx-auto max-w-[1500px] md:px-4">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.6fr]">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                What We Do
              </p>

              <h2 className="mt-6 text-4xl font-serif leading-[1.05] tracking-[-0.035em] md:text-6xl">
                One practice.
                <br />
                Multiple scales.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-neutral-500">
                From individual spaces to complex developments, we bring
                design, technical thinking and delivery together.
              </p>

            </div>

            <div>

              <div className="grid border-t border-neutral-300 sm:grid-cols-2">

                {services.map((service, index) => (

                  <Link
                    key={service}
                    href="/services"
                    className="group border-b border-neutral-300 py-6"
                  >

                    <div className="flex items-center justify-between gap-6 pr-4">

                      <div className="flex items-center gap-5">

                        <span className="text-xs text-neutral-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg">
                          {service}
                        </span>

                      </div>

                      <span className="opacity-30 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>

                    </div>

                  </Link>

                ))}

              </div>

              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] underline underline-offset-8 transition-opacity hover:opacity-50"
              >
                Explore Services
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* DEVELOPMENT */}
      <section className="bg-[#182638] px-6 py-24 text-white md:py-32">

        <div className="mx-auto max-w-[1500px] md:px-4">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Beyond Architecture
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-serif leading-[1.05] tracking-[-0.04em] md:text-6xl">
                We understand
                <br />
                the opportunity
                <br />
                behind the site.
              </h2>

            </div>

            <div className="lg:pt-10">

              <p className="max-w-xl text-lg leading-8 text-white/65">
                Good architecture begins before the drawing. We consider
                land, programme, market, feasibility, construction and
                long-term value as part of the design conversation.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                This allows us to work with homeowners, businesses,
                institutions and developers from the earliest idea through
                to delivery.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/services"
                  className="border border-white/40 px-6 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white hover:text-[#182638]"
                >
                  Explore Our Approach
                </Link>

                <Link
                  href="/start-a-project"
                  className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
                >
                  Discuss a Project →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* JOURNAL */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Journal
            </p>

            <h2 className="mt-5 text-4xl font-serif tracking-[-0.035em] md:text-6xl">
              Ideas behind the work.
            </h2>

          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] underline underline-offset-8 transition-opacity hover:opacity-50"
          >
            Visit Journal
            <span>→</span>
          </Link>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          <Link
            href="/journal/designing-for-place"
            className="group border-t border-neutral-300 pt-6"
          >

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Architecture
            </p>

            <h3 className="mt-5 text-2xl font-serif">
              Designing for Place
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Why context should shape architecture from the beginning.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.15em] transition-opacity group-hover:opacity-50">
              Read Article →
            </p>

          </Link>

          <Link
            href="/journal/architecture-and-value"
            className="group border-t border-neutral-300 pt-6"
          >

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Development
            </p>

            <h3 className="mt-5 text-2xl font-serif">
              Architecture and Value
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              How design decisions influence the value of a development.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.15em] transition-opacity group-hover:opacity-50">
              Read Article →
            </p>

          </Link>

          <Link
            href="/journal/building-in-the-tropics"
            className="group border-t border-neutral-300 pt-6"
          >

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Climate
            </p>

            <h3 className="mt-5 text-2xl font-serif">
              Building in the Tropics
            </h3>

            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Designing architecture that responds intelligently to climate.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.15em] transition-opacity group-hover:opacity-50">
              Read Article →
            </p>

          </Link>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="border-t bg-neutral-50 px-6 py-24 md:py-32">

        <div className="mx-auto max-w-[1500px] md:px-4">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Start a Conversation
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-serif leading-[1.05] tracking-[-0.045em] md:text-7xl">
            Have a site, an idea
            <br className="hidden md:block" />
            or a development opportunity?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Tell us what you are considering. We will help you understand
            what it could become.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <Link
              href="/start-a-project"
              className="bg-[#182638] px-7 py-5 text-xs uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-85"
            >
              Start a Project
            </Link>

            <a
              href="https://wa.me/254720140647"
              target="_blank"
              rel="noreferrer"
              className="border border-[#182638] px-7 py-5 text-xs uppercase tracking-[0.22em] text-[#182638] transition-colors hover:bg-[#182638] hover:text-white"
            >
              WhatsApp Us
            </a>

          </div>

          <div className="mt-16 border-t border-black/10 pt-6">

            <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-neutral-400 md:flex-row">

              <span>
                Architecture. Development. Design.
              </span>

              <span>
                Kenya · East Africa
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}