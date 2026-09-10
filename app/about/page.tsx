import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Purpose",
    text: "Every project begins with understanding what it needs to achieve — for its users, its site and its client.",
  },
  {
    number: "02",
    title: "Place",
    text: "We respond to climate, landscape, culture, context and the character of each location.",
  },
  {
    number: "03",
    title: "Buildability",
    text: "Ideas must ultimately become real buildings. We consider materials, construction, coordination and cost from the beginning.",
  },
  {
    number: "04",
    title: "Value",
    text: "Good design should create lasting value — spatially, socially, commercially and architecturally.",
  },
];

const sectors = [
  "Residential",
  "Commercial",
  "Mixed-Use",
  "Hospitality",
  "Healthcare",
  "Institutional",
  "Interiors",
  "Urban Development",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-[#111111]">

      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">

          <Link
            href="/"
            className="text-[13px] font-medium tracking-[0.18em]"
          >
            LKM ARCHITECTURE
          </Link>

          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.16em] md:flex">
            <Link
              href="/work"
              className="opacity-50 transition hover:opacity-100"
            >
              Work
            </Link>

            <Link
              href="/services"
              className="opacity-50 transition hover:opacity-100"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="opacity-100"
            >
              About
            </Link>

            <Link
              href="/editions"
              className="opacity-50 transition hover:opacity-100"
            >
              Editions
            </Link>

            <Link
              href="/contact"
              className="opacity-50 transition hover:opacity-100"
            >
              Contact
            </Link>
          </nav>

          <a
            href="https://wa.me/254720140647"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.14em]"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28 lg:px-14">

        <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
          About LKM Architecture
        </p>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-end">

          <h1 className="max-w-6xl text-[50px] font-medium leading-[0.94] tracking-[-0.05em] md:text-[76px] lg:text-[96px]">
            We create places
            <br />
            with purpose,
            <br />
            character and value.
          </h1>

          <div className="max-w-lg">

            <p className="text-[18px] leading-8 text-black/65">
              LKM Architecture is a Kenyan architectural practice
              working across architecture, interiors, development and
              the built environment.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-black/50">
              Our work ranges from private homes and interiors to
              hospitality, healthcare, commercial, institutional and
              mixed-use developments.
            </p>

          </div>

        </div>

      </section>

      {/* STATEMENT */}
      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                Our thinking
              </p>
            </div>

            <div>

              <p className="max-w-4xl text-[27px] font-medium leading-[1.25] tracking-[-0.025em] md:text-[38px]">
                We don't simply draw buildings. We think about how they
                work, how they feel, how they are built and how they
                create value.
              </p>

              <p className="mt-9 max-w-2xl text-[16px] leading-7 text-black/55">
                Architecture sits at the intersection of ideas,
                people, land, investment, technology and construction.
                Our role is to bring these elements together into
                coherent places that can endure.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

        <div className="mb-14">

          <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
            Principles
          </p>

          <h2 className="mt-4 text-[40px] font-medium tracking-[-0.04em] md:text-[56px]">
            How we approach a project.
          </h2>

        </div>

        <div className="grid border-t border-black/10 md:grid-cols-2">

          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-b border-black/10 py-10 md:min-h-[250px] md:px-7 md:py-12"
            >

              <div className="flex items-start gap-7">

                <span className="text-[11px] tracking-[0.15em] text-black/30">
                  {principle.number}
                </span>

                <div>

                  <h3 className="text-[25px] font-medium tracking-[-0.025em]">
                    {principle.title}
                  </h3>

                  <p className="mt-5 max-w-md text-[15px] leading-7 text-black/55">
                    {principle.text}
                  </p>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* PRACTICE */}
      <section className="bg-[#111111] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">

            <div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                The practice
              </p>

              <h2 className="mt-5 max-w-xl text-[42px] font-medium leading-[1] tracking-[-0.045em] md:text-[60px]">
                Architecture is the beginning.
              </h2>

            </div>

            <div>

              <p className="max-w-2xl text-[17px] leading-8 text-white/65">
                Our work extends beyond architectural drawings. We
                understand the wider development process and work
                closely with clients, consultants, contractors and
                specialists to move ideas toward reality.
              </p>

              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/45">
                This integrated perspective allows us to look at a
                project from multiple angles — design, planning,
                construction, cost, use and long-term performance.
              </p>

              <div className="mt-12 border-t border-white/15">

                {[
                  "Architecture",
                  "Interior Architecture",
                  "Development",
                  "Design & Build",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/15 py-6"
                  >
                    <span className="text-[11px] text-white/30">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] uppercase tracking-[0.13em]">
                      {item}
                    </span>

                    <span className="text-white/30">↗</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SECTORS */}
      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">

          <div>

            <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
              Experience
            </p>

            <h2 className="mt-4 text-[40px] font-medium leading-[1] tracking-[-0.04em] md:text-[55px]">
              Across the built environment.
            </h2>

          </div>

          <div className="grid grid-cols-2 border-t border-black/10 md:grid-cols-3">

            {sectors.map((sector, index) => (
              <div
                key={sector}
                className="border-b border-black/10 py-7 pr-4"
              >

                <span className="mr-4 text-[10px] text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[12px] uppercase tracking-[0.11em]">
                  {sector}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* LOCATION / IDENTITY */}
      <section className="border-t border-black/10 bg-[#e9e6df]">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
                Based in Kenya
              </p>

              <h2 className="mt-5 text-[42px] font-medium leading-[1] tracking-[-0.04em] md:text-[60px]">
                Designed here.
                <br />
                Thinking beyond.
              </h2>

            </div>

            <div className="max-w-xl">

              <p className="text-[17px] leading-8 text-black/65">
                We are rooted in Kenya and interested in the wider
                possibilities of African cities, communities,
                developments and landscapes.
              </p>

              <p className="mt-7 text-[15px] leading-7 text-black/50">
                From Nairobi to the coast and beyond, our projects
                respond to the specific opportunities of their
                locations while maintaining a contemporary,
                forward-looking architectural language.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#f7f6f3]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36 lg:px-14">

          <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
            Work with us
          </p>

          <h2 className="mt-6 max-w-5xl text-[50px] font-medium leading-[0.94] tracking-[-0.05em] md:text-[78px]">
            Let's create
            <br />
            something
            <br />
            meaningful.
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/start-a-project"
              className="bg-black px-7 py-4 text-[11px] uppercase tracking-[0.15em] text-white transition hover:bg-black/80"
            >
              Start a project
            </Link>

            <a
              href="https://wa.me/254720140647"
              target="_blank"
              rel="noreferrer"
              className="border border-black/20 px-7 py-4 text-[11px] uppercase tracking-[0.15em] transition hover:border-black"
            >
              WhatsApp us
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">

        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-8 text-[10px] uppercase tracking-[0.14em] text-black/45 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">

          <span>
            © {new Date().getFullYear()} LKM Architecture
          </span>

          <div className="flex gap-6">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              YouTube
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}