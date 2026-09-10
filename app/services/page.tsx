import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "From the first idea to construction documentation, we develop architecture that responds to place, purpose, climate, budget and long-term value.",
    list: [
      "Concept Design",
      "Architectural Planning",
      "Design Development",
      "Construction Documentation",
      "County & Statutory Submissions",
      "Site Supervision",
    ],
  },
  {
    number: "02",
    title: "Interior Architecture",
    description:
      "We shape interior environments as an extension of the architecture — balancing materiality, functionality, atmosphere and identity.",
    list: [
      "Interior Concepts",
      "Space Planning",
      "Material & Finish Selection",
      "Furniture & Joinery Concepts",
      "Lighting Coordination",
      "Interior Fit-Out Design",
    ],
  },
  {
    number: "03",
    title: "Masterplanning",
    description:
      "We develop spatial frameworks for larger sites and developments, connecting buildings, movement, landscape, infrastructure and future growth.",
    list: [
      "Site Planning",
      "Development Frameworks",
      "Land Use Planning",
      "Circulation & Access",
      "Phasing Strategies",
      "Landscape Integration",
    ],
  },
  {
    number: "04",
    title: "Development Advisory",
    description:
      "We help landowners and developers understand the opportunity within a site before significant capital is committed.",
    list: [
      "Development Potential",
      "Concept Feasibility",
      "Highest & Best Use Studies",
      "Development Strategy",
      "Preliminary Cost Thinking",
      "Design & Development Advice",
    ],
  },
  {
    number: "05",
    title: "Design & Build",
    description:
      "An integrated approach bringing design and construction closer together for better coordination, quality control and delivery.",
    list: [
      "Design Development",
      "Construction Planning",
      "Procurement Coordination",
      "Site Management",
      "Quality Control",
      "Project Delivery",
    ],
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "We coordinate the design and delivery process to help projects move from drawings to reality with greater clarity and control.",
    list: [
      "Consultant Coordination",
      "Programme Coordination",
      "Site Meetings",
      "Progress Monitoring",
      "Quality Reviews",
      "Client Reporting",
    ],
  },
  {
    number: "07",
    title: "Feasibility & Strategy",
    description:
      "Before designing a building, we help establish whether the idea makes sense — spatially, commercially and strategically.",
    list: [
      "Site & Development Review",
      "Concept Studies",
      "Development Scenarios",
      "Spatial Analysis",
      "Design Audits",
      "Second Opinions",
    ],
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

export default function ServicesPage() {
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
              className="opacity-100"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="opacity-50 transition hover:opacity-100"
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
      <section className="mx-auto max-w-[1500px] px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28 lg:px-14">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">

          <div>
            <p className="mb-7 text-[11px] uppercase tracking-[0.2em] text-black/45">
              What we do
            </p>

            <h1 className="max-w-5xl text-[50px] font-medium leading-[0.95] tracking-[-0.05em] md:text-[76px] lg:text-[96px]">
              Design.
              <br />
              Development.
              <br />
              Value.
            </h1>
          </div>

          <div className="max-w-lg lg:pb-2">

            <p className="text-[18px] leading-8 text-black/65">
              We work across architecture, interiors and development
              to create places that are considered, buildable and
              meaningful.
            </p>

            <p className="mt-6 text-[14px] leading-7 text-black/50">
              From individual homes to complex developments, our
              approach connects design thinking with the realities of
              land, construction, investment and everyday life.
            </p>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">

          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-10 border-b border-black/10 py-16 last:border-b-0 md:py-20 lg:grid-cols-[100px_1fr_1fr]"
            >

              <div className="text-[11px] tracking-[0.16em] text-black/35">
                {service.number}
              </div>

              <div>
                <h2 className="text-[36px] font-medium tracking-[-0.04em] md:text-[48px]">
                  {service.title}
                </h2>
              </div>

              <div>

                <p className="max-w-xl text-[16px] leading-7 text-black/65">
                  {service.description}
                </p>

                <div className="mt-8 grid grid-cols-1 border-t border-black/10 pt-5 sm:grid-cols-2">

                  {service.list.map((item) => (
                    <div
                      key={item}
                      className="border-b border-black/10 py-3 text-[11px] uppercase tracking-[0.11em] text-black/55"
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* HOW WE THINK */}
      <section className="bg-[#111111] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                Our approach
              </p>

              <h2 className="mt-5 max-w-xl text-[42px] font-medium leading-[1] tracking-[-0.045em] md:text-[60px]">
                We think beyond the drawing.
              </h2>
            </div>

            <div className="max-w-2xl">

              <p className="text-[18px] leading-8 text-white/65">
                Good architecture is not only about how a building
                looks. It is about how it works, how it feels, how it
                responds to its environment, how it is built and what
                value it creates.
              </p>

              <p className="mt-7 text-[15px] leading-7 text-white/45">
                Our multidisciplinary approach allows us to consider
                design, construction, cost, development potential and
                long-term use as connected parts of the same process.
              </p>

              <div className="mt-12 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">

                {[
                  "Place",
                  "Purpose",
                  "Buildability",
                  "Value",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-white/15 py-6 sm:border-r sm:px-5"
                  >
                    <span className="block text-[10px] text-white/30">
                      0{index + 1}
                    </span>

                    <span className="mt-3 block text-[13px] uppercase tracking-[0.12em]">
                      {item}
                    </span>
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
              Sectors
            </p>

            <h2 className="mt-4 text-[40px] font-medium leading-[1] tracking-[-0.04em] md:text-[54px]">
              Across disciplines.
            </h2>

          </div>

          <div className="grid grid-cols-2 border-t border-black/10 md:grid-cols-3">

            {sectors.map((sector, index) => (
              <div
                key={sector}
                className="border-b border-black/10 py-7 pr-5"
              >
                <span className="mr-4 text-[10px] text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[12px] uppercase tracking-[0.12em]">
                  {sector}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-[#e9e6df]">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36 lg:px-14">

          <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
            Start a conversation
          </p>

          <h2 className="mt-6 max-w-5xl text-[48px] font-medium leading-[0.95] tracking-[-0.045em] md:text-[76px]">
            Have a site,
            <br />
            an idea or
            <br />
            a development?
          </h2>

          <p className="mt-8 max-w-xl text-[16px] leading-7 text-black/60">
            Tell us what you are building and where you are in the
            process. We can help you determine the next step.
          </p>

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