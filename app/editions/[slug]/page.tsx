import Link from "next/link";

const editions = [
  {
    slug: "the-courtyard-house",
    number: "01",
    title: "The Courtyard House",
    type: "Residential",
    location: "Kenya",
    size: "Approx. 280 sqm",
    rooms: "4 Bedrooms",
    price: "$150",
    tier: "Concept Edition",
    description:
      "A contemporary family home organised around a private courtyard, bringing natural light, privacy and outdoor living into the heart of the house.",
    features: [
      "Private internal courtyard",
      "Open-plan living and dining",
      "Four bedroom arrangement",
      "Indoor-outdoor living",
      "Contemporary architectural language",
      "Adaptable site planning",
    ],
    included: [
      "Architectural concept drawings",
      "Floor plans",
      "Elevations",
      "Basic sections",
      "Design presentation material",
    ],
  },
  {
    slug: "the-modern-villa",
    number: "02",
    title: "The Modern Villa",
    type: "Residential",
    location: "Kenya",
    size: "Approx. 360 sqm",
    rooms: "4 Bedrooms",
    price: "$400",
    tier: "Complete Design Edition",
    description:
      "A refined contemporary villa designed around generous living spaces, strong indoor-outdoor connections and a carefully composed private wing.",
    features: [
      "Four bedroom configuration",
      "Large living spaces",
      "Contemporary facade",
      "Covered outdoor areas",
      "Private bedroom wing",
      "Flexible site orientation",
    ],
    included: [
      "Architectural plans",
      "Elevations",
      "Sections",
      "Roof plan",
      "Door and window information",
      "Design presentation material",
    ],
  },
  {
    slug: "the-ridge-house",
    number: "03",
    title: "The Ridge House",
    type: "Residential",
    location: "East Africa",
    size: "Approx. 420 sqm",
    rooms: "5 Bedrooms",
    price: "$400",
    tier: "Complete Design Edition",
    description:
      "A generous contemporary residence conceived for elevated sites, with expansive living spaces and a strong relationship with the surrounding landscape.",
    features: [
      "Five bedroom configuration",
      "Large entertainment spaces",
      "Landscape-facing terraces",
      "Strong indoor-outdoor connection",
      "Contemporary material palette",
      "Adaptable orientation",
    ],
    included: [
      "Architectural plans",
      "Elevations",
      "Sections",
      "Roof plan",
      "Door and window information",
      "Design presentation material",
    ],
  },
  {
    slug: "the-coastal-house",
    number: "04",
    title: "The Coastal House",
    type: "Residential",
    location: "Coastal Kenya",
    size: "Approx. 310 sqm",
    rooms: "4 Bedrooms",
    price: "$800",
    tier: "Premium Edition",
    description:
      "A climate-responsive coastal residence shaped around shade, ventilation, privacy and relaxed outdoor living.",
    features: [
      "Four bedroom configuration",
      "Deep shaded terraces",
      "Indoor-outdoor living",
      "Climate-responsive planning",
      "Private outdoor spaces",
      "Contemporary coastal character",
    ],
    included: [
      "Complete architectural package",
      "Plans and elevations",
      "Sections",
      "Roof plan",
      "Detailed schedules",
      "Design presentation material",
    ],
  },
  {
    slug: "the-urban-house",
    number: "05",
    title: "The Urban House",
    type: "Residential",
    location: "Urban Kenya",
    size: "Approx. 220 sqm",
    rooms: "3 Bedrooms",
    price: "$150",
    tier: "Concept Edition",
    description:
      "A compact contemporary home designed to make efficient use of an urban residential plot without compromising character or comfort.",
    features: [
      "Three bedroom configuration",
      "Efficient planning",
      "Compact footprint",
      "Private outdoor space",
      "Contemporary facade",
      "Urban plot suitability",
    ],
    included: [
      "Architectural concept drawings",
      "Floor plans",
      "Elevations",
      "Basic sections",
      "Design presentation material",
    ],
  },
  {
    slug: "the-garden-villa",
    number: "06",
    title: "The Garden Villa",
    type: "Residential",
    location: "East Africa",
    size: "Approx. 390 sqm",
    rooms: "4 Bedrooms",
    price: "$800",
    tier: "Premium Edition",
    description:
      "A spacious garden-oriented villa that places landscape, daylight and outdoor living at the centre of the residential experience.",
    features: [
      "Four bedroom configuration",
      "Garden-facing living spaces",
      "Generous terraces",
      "Indoor-outdoor connection",
      "Private family spaces",
      "Premium contemporary character",
    ],
    included: [
      "Complete architectural package",
      "Plans and elevations",
      "Sections",
      "Roof plan",
      "Detailed schedules",
      "Design presentation material",
    ],
  },
];

export async function generateStaticParams() {
  return editions.map((edition) => ({
    slug: edition.slug,
  }));
}

export default async function EditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const edition = editions.find((item) => item.slug === slug);

  if (!edition) {
    return (
      <main className="min-h-screen bg-white px-6 py-24 text-neutral-950">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Edition not found
          </p>

          <h1 className="mt-6 text-5xl font-medium tracking-tight">
            This Edition does not exist.
          </h1>

          <Link
            href="/editions"
            className="mt-10 inline-block border border-neutral-950 px-6 py-4 text-xs uppercase tracking-[0.2em]"
          >
            Back to Editions
          </Link>
        </div>
      </main>
    );
  }

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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
          <div className="relative aspect-[4/3] bg-neutral-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Edition {edition.number}
              </span>
            </div>

            <div className="absolute left-5 top-5 bg-white px-4 py-3 text-[10px] uppercase tracking-[0.2em]">
              {edition.tier}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              LKM Editions™ / {edition.number}
            </p>

            <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              {edition.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              {edition.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-y border-neutral-200 py-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Type
                </p>
                <p className="mt-2 text-sm">{edition.type}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Location
                </p>
                <p className="mt-2 text-sm">{edition.location}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Size
                </p>
                <p className="mt-2 text-sm">{edition.size}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Rooms
                </p>
                <p className="mt-2 text-sm">{edition.rooms}</p>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Edition price
                </p>
                <p className="mt-2 text-4xl font-medium">{edition.price}</p>
              </div>

              <Link
                href="/start-a-project"
                className="bg-neutral-950 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              The idea
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">
              Designed as a starting point.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600">
              LKM Editions are considered architectural starting points.
              They provide a clear design direction while allowing the final
              project to respond to its site, regulations, climate, budget and
              the people who will occupy it.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Key features
            </p>

            <div className="mt-6 border-t border-neutral-200">
              {edition.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex gap-6 border-b border-neutral-200 py-5"
                >
                  <span className="text-xs text-neutral-400">
                    0{index + 1}
                  </span>

                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            What's included
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div>
              {edition.included.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-6 border-b border-neutral-200 py-5"
                >
                  <span className="text-xs text-neutral-400">
                    0{index + 1}
                  </span>

                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="md:pl-16">
              <h2 className="text-3xl font-medium">
                Your site is different.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-600">
                An Edition is not a substitute for site-specific professional
                design. Local planning requirements, site conditions,
                structure, services and statutory approvals may require
                adaptation.
              </p>

              <Link
                href="/start-a-project"
                className="mt-8 inline-block border border-neutral-950 px-6 py-4 text-xs uppercase tracking-[0.2em]"
              >
                Request customization
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Take it further
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-2">
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              From Edition
              <br />
              to reality.
            </h2>

            <div>
              <p className="text-lg leading-8 text-neutral-400">
                Need something more specific? LKM Architecture can take the
                selected Edition and develop it into a site-specific
                architectural project.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/start-a-project"
                  className="bg-white px-6 py-4 text-xs uppercase tracking-[0.2em] text-neutral-950"
                >
                  Start a project
                </Link>

                <a
                  href="https://wa.me/254720140647"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white px-6 py-4 text-xs uppercase tracking-[0.2em]"
                >
                  WhatsApp LKM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 LKM Architecture</p>

        <div className="flex gap-6">
          <Link href="/journal">Journal</Link>
          <Link href="/editions">Editions</Link>
          <Link href="/start-a-project">Start a Project</Link>
        </div>
      </footer>
    </main>
  );
}