import Link from "next/link";

const articles = [
  {
    category: "Architecture",
    title: "Designing for Place",
    description:
      "Why context should shape architecture from the beginning.",
    href: "/journal/designing-for-place",
  },
  {
    category: "Development",
    title: "Architecture and Value",
    description:
      "How design decisions influence the value of a development.",
    href: "/journal/architecture-and-value",
  },
  {
    category: "Climate",
    title: "Building in the Tropics",
    description:
      "Designing architecture that responds intelligently to climate.",
    href: "/journal/building-in-the-tropics",
  },
];

export default function JournalPage() {
  return (
    <main className="bg-white text-neutral-950">

      {/* HERO */}
      <section className="bg-[#182638] text-white">

        <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-16">

          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            LKM Journal
          </p>

          <h1 className="mt-7 max-w-5xl text-5xl font-serif leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-8xl">
            Ideas behind
            <br />
            the work.
          </h1>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
            Perspectives on architecture, development, place,
            climate and the decisions that shape the built environment.
          </p>

        </div>

      </section>

      {/* FEATURED ARTICLE */}
      <section className="border-b border-black/10">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Featured
              </p>
            </div>

            <Link
              href={articles[0].href}
              className="group"
            >

              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {articles[0].category}
              </p>

              <h2 className="mt-6 max-w-4xl text-4xl font-serif leading-tight tracking-[-0.035em] md:text-6xl">
                {articles[0].title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                {articles[0].description}
              </p>

              <div className="mt-9 inline-flex items-center gap-4 text-xs uppercase tracking-[0.22em]">
                Read Article
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* ARTICLE INDEX */}
      <section>

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="flex items-end justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                All Articles
              </p>

              <h2 className="mt-5 text-4xl font-serif tracking-[-0.035em] md:text-5xl">
                Perspectives
              </h2>
            </div>

          </div>

          <div className="mt-14 border-t border-black/10">

            {articles.map((article, index) => (

              <Link
                key={article.href}
                href={article.href}
                className="group grid gap-6 border-b border-black/10 py-8 transition-colors hover:bg-neutral-50 md:grid-cols-[100px_0.5fr_1.5fr_80px] md:items-center md:px-5"
              >

                <span className="text-xs text-neutral-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  {article.category}
                </span>

                <div>

                  <h3 className="text-2xl font-serif tracking-[-0.02em] md:text-3xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
                    {article.description}
                  </p>

                </div>

                <span className="text-right text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* TOPIC AREAS */}
      <section className="bg-neutral-100">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Areas of Interest
              </p>
            </div>

            <div className="grid gap-0 border-t border-neutral-300 sm:grid-cols-2">

              {[
                "Architecture",
                "Development",
                "Place & Climate",
                "Construction & Delivery",
              ].map((topic, index) => (

                <div
                  key={topic}
                  className="border-b border-neutral-300 py-7"
                >

                  <div className="flex items-center gap-5">

                    <span className="text-xs text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg">
                      {topic}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-black/10">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Continue the Conversation
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-serif leading-tight tracking-[-0.04em] md:text-6xl">
            Have an idea worth exploring?
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you are planning a building, considering a site
            or exploring a development opportunity, we would like
            to hear about it.
          </p>

          <Link
            href="/start-a-project"
            className="mt-10 inline-flex items-center gap-6 bg-[#182638] px-7 py-5 text-xs uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80"
          >
            Start a Project
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}