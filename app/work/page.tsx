"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";

const filters = [
  "All",
  "Residential",
  "Commercial",
  "Mixed-Use",
  "Hospitality",
  "Healthcare",
  "Institutional",
  "Interiors",
  "Urban Development",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="bg-white text-neutral-950">

      {/* INTRO */}
      <section className="border-b">

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">

          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                LKM Architecture
              </p>
            </div>

            <div className="md:col-span-2">

              <h1 className="max-w-5xl text-5xl font-serif leading-[1] md:text-8xl">
                Projects shaped by
                place, purpose and
                possibility.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                A selection of architectural, interior,
                development and planning projects by
                LKM Architecture.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FILTERS */}
      <section className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex gap-2 overflow-x-auto pb-1">

            {filters.map((filter) => (

              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "shrink-0 bg-neutral-950 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white"
                    : "shrink-0 border border-neutral-300 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-neutral-700"
                }
              >
                {filter}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">

        <div className="mb-12 flex items-end justify-between">

          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {String(filteredProjects.length).padStart(2, "0")} Projects
          </p>

          <p className="hidden text-xs uppercase tracking-[0.15em] text-neutral-400 md:block">
            Selected Portfolio
          </p>

        </div>

        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">

          {filteredProjects.map((project, index) => {

            const featured =
              activeFilter === "All" &&
              index === 0;

            return (

              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={
                  featured
                    ? "group md:col-span-2"
                    : "group"
                }
              >

                <div className="relative overflow-hidden bg-neutral-100">

                  <Image
                    src={`/projects/${project.slug}/01.jpg`}
                    alt={project.title}
                    width={2000}
                    height={1250}
                    sizes={
                      featured
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className={
                      featured
                        ? "aspect-[16/8] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        : "aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    }
                  />

                  <div className="absolute left-5 top-5 bg-white px-3 py-2 text-[10px] uppercase tracking-[0.12em]">
                    {project.number}
                  </div>

                  <div className="absolute bottom-5 right-5 hidden bg-neutral-950 px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
                    View Project →
                  </div>

                </div>

                <div className="mt-5">

                  <div className="flex items-start justify-between gap-6">

                    <div>

                      <h2
                        className={
                          featured
                            ? "text-3xl font-serif md:text-4xl"
                            : "text-2xl font-serif"
                        }
                      >
                        {project.title}
                      </h2>

                      <p className="mt-2 text-sm text-neutral-500">
                        {project.location}
                      </p>

                    </div>

                    <span className="pt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                      {project.category}
                    </span>

                  </div>

                  <p className="mt-5 text-xs uppercase tracking-[0.15em] text-neutral-500 md:hidden">
                    View Project →
                  </p>

                </div>

              </Link>

            );
          })}

        </div>

      </section>

      {/* PRACTICE STATEMENT */}
      <section className="bg-neutral-100 px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-3">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Our Expertise
              </p>

            </div>

            <div className="md:col-span-2">

              <h2 className="max-w-4xl text-4xl font-serif leading-tight md:text-6xl">
                From individual buildings
                to larger places.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                Our work spans residential, commercial,
                hospitality, healthcare, interiors,
                mixed-use and urban development.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Across every scale, we combine design
                thinking, technical understanding and
                development awareness to create
                architecture that performs.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-block text-xs uppercase tracking-[0.2em] underline underline-offset-8"
              >
                Explore Our Services →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-6 py-24 text-white md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Start a Conversation
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-serif leading-tight md:text-7xl">
            Have a site, an idea
            or a development opportunity?
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Tell us what you are considering and
            let&apos;s explore what it could become.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/start-a-project"
              className="bg-white px-6 py-4 text-xs uppercase tracking-[0.2em] text-neutral-950"
            >
              Start a Project
            </Link>

            <a
              href="https://wa.me/254720140647"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-6 py-4 text-xs uppercase tracking-[0.2em]"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}