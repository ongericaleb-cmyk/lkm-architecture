import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Villa Barasa",
    category: "Residential · Design & Build",
    image: "/projects/villa-barasa/villa-barasa-render-01.png",
    href: "/work/villa-barasa",
  },
  {
    title: "Cottage Resort",
    category: "Hospitality · Leisure",
    image: "/cottage-resort.png",
    href: "/work/cottage-resort",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ee] text-[#151515]">
      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.35em]"
          >
            LKM ARCHITECTURE
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="hidden text-[10px] font-medium tracking-[0.18em] text-black/60 md:block"
            >
              SERVICES
            </Link>

            <Link
              href="/editions"
              className="hidden text-[10px] font-medium tracking-[0.18em] text-black/60 md:block"
            >
              EDITIONS
            </Link>

            <Link
              href="/start"
              className="border border-black px-5 py-3 text-[9px] font-medium tracking-[0.18em] transition hover:bg-black hover:text-white"
            >
              START A PROJECT →
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-[10px] font-medium tracking-[0.3em] text-black/45">
            SELECTED WORK
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-[9rem]">
                Architecture
                <br />
                with purpose.
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-8 text-black/60">
                A selection of architectural and design work by LKM
                Architecture across residential, commercial, hospitality,
                institutional and mixed-use developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT — NEW LIFE TOWERS */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/projects/new-life-towers"
            className="group block"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <Image
                src="/projects/new-life-towers/hero.jpg"
                alt="New Life Towers"
                fill
                priority
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 py-8 md:flex-row md:items-start">
              <div>
                <p className="text-[10px] font-medium tracking-[0.25em] text-black/40">
                  FLAGSHIP PROJECT · MIXED-USE DEVELOPMENT
                </p>

                <h2 className="mt-4 text-4xl font-light tracking-[-0.035em] md:text-6xl">
                  New Life Towers
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-sm leading-7 text-black/55">
                  A landmark mixed-use and institutional development envisioned
                  as a contemporary architectural destination for the New Life
                  community in Mavueni, Kilifi County.
                </p>

                <span className="mt-5 inline-block text-[10px] font-medium tracking-[0.2em]">
                  EXPLORE PROJECT →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-medium tracking-[0.3em] text-black/45">
                MORE SELECTED WORK
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-6xl">
                Across sectors and scales.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/55">
              Our work spans private residences, hospitality destinations,
              commercial developments and institutional projects.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-y border-black/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-[10px] font-medium tracking-[0.3em] text-black/45">
            EXPERTISE
          </p>

          <div className="mt-12 grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
            <Sector
              number="01"
              title="Residential"
              description="Private homes, villas and contemporary living environments."
            />

            <Sector
              number="02"
              title="Commercial"
              description="Workplaces, retail environments and mixed-use developments."
            />

            <Sector
              number="03"
              title="Hospitality"
              description="Hotels, resorts and destination-based architectural experiences."
            />

            <Sector
              number="04"
              title="Institutional"
              description="Complex civic, cultural, education and organisational projects."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#151515] px-6 py-28 text-white lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-white/40">
              YOUR PROJECT
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Let&apos;s create
              <br />
              what&apos;s next.
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/60">
              Whether you are planning a private residence, commercial
              development or a larger destination project, we would like to
              hear about it.
            </p>

            <Link
              href="/start"
              className="mt-12 inline-block border border-white bg-white px-8 py-5 text-[10px] font-medium tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
            >
              START A PROJECT →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  category,
  image,
  href,
}: {
  title: string;
  category: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="text-[9px] font-medium tracking-[0.2em] text-black/40">
            {category.toUpperCase()}
          </p>

          <h3 className="mt-3 text-3xl font-light">
            {title}
          </h3>
        </div>

        <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

function Sector({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-r border-black/10 p-8">
      <p className="text-[10px] tracking-[0.2em] text-black/40">
        {number}
      </p>

      <h3 className="mt-12 text-3xl font-light">
        {title}
      </h3>

      <p className="mt-5 text-sm leading-7 text-black/55">
        {description}
      </p>
    </div>
  );
}