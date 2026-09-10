import Image from "next/image";
import Link from "next/link";

export default function VillaBarasaPage() {
  return (
    <main className="bg-[#f4f1ec] text-[#171717]">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#f4f1ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-12">

          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.35em]"
          >
            LKM ARCHITECTURE
          </Link>

          <div className="hidden gap-10 text-[10px] tracking-[0.25em] md:flex">
            <Link href="/work">WORK</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/journal">JOURNAL</Link>
          </div>

          <Link
            href="/start"
            className="border border-black px-5 py-3 text-[9px] tracking-[0.2em] transition hover:bg-black hover:text-white"
          >
            START A PROJECT
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-20">

        <div className="relative h-[85vh] min-h-[650px]">

          <Image
            src="/projects/villa-barasa/villa-barasa-render-01.png"
            alt="Villa Barasa architectural visualisation"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end">

            <div className="mx-auto w-full max-w-[1500px] px-6 pb-16 text-white md:px-12 md:pb-24">

              <p className="mb-6 text-[10px] tracking-[0.35em] text-white/70">
                RESIDENTIAL · DESIGN & BUILD
              </p>

              <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem]">
                VILLA
                <br />
                BARASA.
              </h1>

              <div className="mt-10 flex flex-col gap-4 text-[10px] tracking-[0.2em] md:flex-row md:gap-12">

                <span>KIMILILI · BUNGOMA</span>

                <span>ONGOING PROJECT</span>

                <span>LKM ARCHITECTURE</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-36">

        <div className="grid gap-12 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="text-[10px] tracking-[0.3em] text-black/50">
              THE PROJECT
            </p>

          </div>


          <div className="md:col-span-8">

            <h2 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">

              A contemporary family residence designed around
              space, light and a strong connection between
              architecture and landscape.

            </h2>

            <div className="mt-10 max-w-2xl text-base leading-relaxed text-black/60">

              <p>
                Villa Barasa is a contemporary residential project
                currently under construction in Kimilili, Bungoma.
                The design combines modern geometric forms with
                warm natural finishes to create a distinctive and
                timeless family home.
              </p>

              <p className="mt-6">
                The architectural language is defined by strong
                horizontal planes, generous openings, carefully
                framed outdoor spaces and a layered composition of
                stone, plaster and glazing.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RENDER 02 */}
      <section className="px-4 md:px-8">

        <div className="relative h-[70vh] min-h-[500px]">

          <Image
            src="/projects/villa-barasa/villa-barasa-render-02.png"
            alt="Villa Barasa exterior visualisation"
            fill
            className="object-cover"
          />

        </div>

      </section>


      {/* DESIGN APPROACH */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-36">

        <div className="grid gap-16 md:grid-cols-2">

          <div>

            <p className="mb-8 text-[10px] tracking-[0.3em] text-black/50">
              DESIGN APPROACH
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Architecture that balances presence with everyday living.
            </h2>

          </div>


          <div className="space-y-10">

            <div className="border-t border-black/20 pt-6">

              <p className="text-[10px] tracking-[0.25em] text-black/50">
                01 — FORM
              </p>

              <p className="mt-4 text-lg leading-relaxed text-black/70">
                A composition of intersecting volumes creates depth,
                hierarchy and a distinctive contemporary identity.
              </p>

            </div>


            <div className="border-t border-black/20 pt-6">

              <p className="text-[10px] tracking-[0.25em] text-black/50">
                02 — MATERIALITY
              </p>

              <p className="mt-4 text-lg leading-relaxed text-black/70">
                Natural stone is combined with clean white surfaces,
                dark metal details and generous glazing.
              </p>

            </div>


            <div className="border-t border-black/20 pt-6">

              <p className="text-[10px] tracking-[0.25em] text-black/50">
                03 — LANDSCAPE
              </p>

              <p className="mt-4 text-lg leading-relaxed text-black/70">
                The landscape is conceived as an extension of the
                architecture, softening the built form while framing
                arrival and outdoor living spaces.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RENDER 03 */}
      <section className="px-4 md:px-8">

        <div className="relative h-[75vh] min-h-[550px]">

          <Image
            src="/projects/villa-barasa/villa-barasa-render-03.png"
            alt="Villa Barasa front elevation visualisation"
            fill
            className="object-cover"
          />

        </div>

      </section>


      {/* CONSTRUCTION */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-36">

        <div className="grid gap-12 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="text-[10px] tracking-[0.3em] text-black/50">
              FROM DRAWING TO REALITY
            </p>

          </div>


          <div className="md:col-span-8">

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Design does not end at the drawing board.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60">
              Through our design and build approach, the project
              continues from architectural vision into construction,
              coordination and on-site execution.
            </p>

          </div>

        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/projects/villa-barasa/villa-barasa-site-01.jpeg"
              alt="Villa Barasa construction progress"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>


          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/projects/villa-barasa/villa-barasa-site-02.jpeg"
              alt="Villa Barasa construction progress"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>


          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/projects/villa-barasa/villa-barasa-site-03.jpeg"
              alt="Villa Barasa construction progress"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </section>


      {/* PROJECT DETAILS */}
      <section className="border-y border-black/10 bg-white">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28">

          <div className="grid gap-10 md:grid-cols-4">

            <div>

              <p className="text-[9px] tracking-[0.25em] text-black/40">
                PROJECT TYPE
              </p>

              <p className="mt-3 text-lg">
                Private Residence
              </p>

            </div>


            <div>

              <p className="text-[9px] tracking-[0.25em] text-black/40">
                LOCATION
              </p>

              <p className="mt-3 text-lg">
                Kimilili, Bungoma
              </p>

            </div>


            <div>

              <p className="text-[9px] tracking-[0.25em] text-black/40">
                STATUS
              </p>

              <p className="mt-3 text-lg">
                Under Construction
              </p>

            </div>


            <div>

              <p className="text-[9px] tracking-[0.25em] text-black/40">
                SERVICES
              </p>

              <p className="mt-3 text-lg">
                Architecture · Design & Build
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#171717] px-6 py-28 text-white md:px-12 md:py-40">

        <div className="mx-auto max-w-[1500px]">

          <p className="text-[10px] tracking-[0.3em] text-white/50">
            START YOUR PROJECT
          </p>

          <div className="mt-10 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">

            <h2 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
              Have a project in mind?
              <br />
              Let's talk.
            </h2>

            <Link
              href="/start"
              className="border border-white px-8 py-5 text-[10px] tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              START A PROJECT →
            </Link>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 pb-10 text-white md:px-12">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 border-t border-white/10 pt-8 text-[9px] tracking-[0.2em] text-white/40 md:flex-row">

          <span>
            © {new Date().getFullYear()} LKM ARCHITECTURE
          </span>

          <span>
            ARCHITECTURE · INTERIORS · PLANNING · DEVELOPMENT
          </span>

        </div>

      </footer>

    </main>
  );
}