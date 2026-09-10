import Link from "next/link";

const editions = [
  {
    number: "01",
    slug: "the-courtyard-house",
    title: "The Courtyard House",
    type: "Residential",
    location: "Kenya",
    size: "Approx. 280 sqm",
    rooms: "4 Bedrooms",
    price: "$150",
    tier: "Concept Edition",
  },
  {
    number: "02",
    slug: "the-modern-villa",
    title: "The Modern Villa",
    type: "Residential",
    location: "Kenya",
    size: "Approx. 360 sqm",
    rooms: "4 Bedrooms",
    price: "$400",
    tier: "Complete Design Edition",
  },
  {
    number: "03",
    slug: "the-ridge-house",
    title: "The Ridge House",
    type: "Residential",
    location: "East Africa",
    size: "Approx. 420 sqm",
    rooms: "5 Bedrooms",
    price: "$400",
    tier: "Complete Design Edition",
  },
  {
    number: "04",
    slug: "the-coastal-house",
    title: "The Coastal House",
    type: "Residential",
    location: "Coastal Kenya",
    size: "Approx. 310 sqm",
    rooms: "4 Bedrooms",
    price: "$800",
    tier: "Premium Edition",
  },
  {
    number: "05",
    slug: "the-urban-house",
    title: "The Urban House",
    type: "Residential",
    location: "Urban Kenya",
    size: "Approx. 220 sqm",
    rooms: "3 Bedrooms",
    price: "$150",
    tier: "Concept Edition",
  },
  {
    number: "06",
    slug: "the-garden-villa",
    title: "The Garden Villa",
    type: "Residential",
    location: "East Africa",
    size: "Approx. 390 sqm",
    rooms: "4 Bedrooms",
    price: "$800",
    tier: "Premium Edition",
  },
];

const topics = [
  "All Editions",
  "Houses",
  "Villas",
  "Apartments",
  "Hospitality",
  "Development",
];

export default function EditionsPage() {
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
            className="border border-neutral-950 px-4 py-2 text-xs font-medium"
          >
            START A PROJECT
          </Link>
        </div>
      </header>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
            LKM Editions™
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
            Architecture,
            <br />
            ready to begin.
          </h1>

          <div className="mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <p className="text-lg leading-8 text-neutral-600">
              A curated collection of architectural concepts and ready-made
              design editions created by LKM Architecture.
            </p>

            <p className="text-lg leading-8 text-neutral-600">
              Start with an idea. Adapt it to your land, your brief and your
              ambitions. Then take it further with our architectural team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-3">
          {topics.map((topic, index) => (
            <button
              key={topic}
              className={
                index === 0
                  ? "border border-neutral-950 bg-neutral-950 px-5 py-3 text-xs text-white"
                  : "border border-neutral-300 px-5 py-3 text-xs text-neutral-600"
              }
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {editions.map((edition) => (
            <article key={edition.slug} className="group">
              <Link href={`/editions/${edition.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                      Edition {edition.number}
                    </span>
                  </div>

                  <div className="absolute left-5 top-5 border border-white/60 bg-white/90 px-3 py-2 text-[10px] uppercase tracking-[0.2em]">
                    {edition.tier}
                  </div>

                  <div className="absolute bottom-5 right-5 bg-white px-4 py-3 text-sm">
                    {edition.price}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {edition.type}
                      </p>

                      <h2 className="text-2xl font-medium">
                        {edition.title}
                      </h2>
                    </div>

                    <span className="text-xs text-neutral-400">
                      {edition.number}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
                    <div>
                      <p className="mb-1 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-neutral-800">{edition.location}</p>
                    </div>

                    <div>
                      <p className="mb-1 uppercase tracking-wider">Size</p>
                      <p className="text-neutral-800">{edition.size}</p>
                    </div>

                    <div>
                      <p className="mb-1 uppercase tracking-wider">Rooms</p>
                      <p className="text-neutral-800">{edition.rooms}</p>
                    </div>

                    <div>
                      <p className="mb-1 uppercase tracking-wider">From</p>
                      <p className="text-neutral-800">{edition.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Beyond the Edition
            </p>

            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              Have a site?
              <br />
              Take the idea further.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-400">
              Every Edition can become the starting point for a fully
              commissioned project. Our team can adapt the concept to your
              site, climate, regulations, budget and personal requirements.
            </p>

            <Link
              href="/start-a-project"
              className="mt-8 inline-block w-fit border border-white px-6 py-4 text-xs uppercase tracking-[0.2em]"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                01
              </p>
              <h3 className="text-xl font-medium">Choose an Edition</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Explore concepts created around different ways of living,
                building and developing.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                02
              </p>
              <h3 className="text-xl font-medium">Make it yours</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Adapt the selected concept to your land, requirements and
                preferred architectural direction.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
                03
              </p>
              <h3 className="text-xl font-medium">Build the vision</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-500">
                Move from an Edition into a complete architectural,
                development or design-build commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 LKM Architecture</p>

        <div className="flex gap-6">
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>YouTube</span>
          <span>WhatsApp</span>
        </div>
      </footer>
    </main>
  );
}