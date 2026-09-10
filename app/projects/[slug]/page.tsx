import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project | LKM Architecture",
    };
  }

  return {
    title: `${project.title} | LKM Architecture`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const previousProject =
    projects[
      (projectIndex - 1 + projects.length) % projects.length
    ];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const images = [
    `/projects/${project.slug}/01.jpg`,
    `/projects/${project.slug}/02.jpg`,
    `/projects/${project.slug}/03.jpg`,
  ];

  return (
    <main className="bg-white text-[#171717]">

      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#111]">
        <Image
          src={images[0]}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1500px] px-6 pb-10 md:px-10 md:pb-14 lg:px-16">
            <div className="max-w-5xl text-white">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/70">
                Project {project.number}
              </p>

              <h1 className="max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl lg:text-8xl">
                {project.title}
              </h1>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.18em] text-white/80">
                <span>{project.location}</span>
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:px-16">
          
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">
              Overview
            </p>
          </div>

          <div>
            <p className="max-w-4xl text-2xl leading-[1.35] tracking-[-0.025em] md:text-4xl">
              {project.description}
            </p>
          </div>

        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section>
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:px-16">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">
              Project Information
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-10 border-t border-black/10 pt-8 sm:grid-cols-3">

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                Location
              </p>
              <p className="mt-3 text-sm">
                {project.location}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                Category
              </p>
              <p className="mt-3 text-sm">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                Status
              </p>
              <p className="mt-3 text-sm">
                {project.status}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* IMAGE 02 */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#f2f1ed]">
          <Image
            src={images[1]}
            alt={`${project.title} — view two`}
            fill
            sizes="(max-width: 768px) 100vw, 95vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* NARRATIVE */}
      <section>
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:px-16">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">
              Design Approach
            </p>
          </div>

          <div>
            <p className="max-w-4xl whitespace-pre-line text-lg leading-[1.8] text-black/70 md:text-xl">
              {project.narrative}
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE 03 */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#f2f1ed]">
          <Image
            src={images[2]}
            alt={`${project.title} — view three`}
            fill
            sizes="(max-width: 768px) 100vw, 95vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:px-16">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">
              Services
            </p>
          </div>

          <div className="grid gap-0 border-t border-black/10">
            {project.services.map((service, index) => (
              <div
                key={service}
                className="flex items-center justify-between border-b border-black/10 py-5"
              >
                <span className="text-sm md:text-base">
                  {service}
                </span>

                <span className="text-xs text-black/35">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT NAVIGATION */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2">

          <Link
            href={`/projects/${previousProject.slug}`}
            className="group border-b border-black/10 px-6 py-12 transition-colors hover:bg-[#f7f5f0] md:border-b-0 md:border-r md:px-10 md:py-20 lg:px-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Previous Project
            </p>

            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="max-w-md text-2xl tracking-[-0.03em] md:text-4xl">
                {previousProject.title}
              </h2>

              <span className="text-2xl transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group px-6 py-12 transition-colors hover:bg-[#f7f5f0] md:px-10 md:py-20 lg:px-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Next Project
            </p>

            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="max-w-md text-2xl tracking-[-0.03em] md:text-4xl">
                {nextProject.title}
              </h2>

              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#182638] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Start a Project
            </p>

            <h2 className="mt-7 text-4xl font-medium tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Have a project in mind?
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              Tell us about your project, development opportunity or
              design challenge. We would be pleased to explore it with you.
            </p>

            <Link
              href="/start-a-project"
              className="mt-10 inline-flex items-center gap-5 border border-white/30 px-7 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-[#182638]"
            >
              Start a Project
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}