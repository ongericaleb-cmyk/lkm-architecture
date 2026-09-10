import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "designing-for-place",
    number: "01",
    category: "Architecture",
    title: "Designing for Place",
    date: "September 2026",
    intro:
      "Architecture begins with understanding place. Climate, culture, landscape and the way people live all shape how a meaningful building comes together.",
    sections: [
      {
        heading: "Architecture begins with context",
        paragraphs: [
          "Good architecture does not begin with a façade. It begins with a question: what does this place need?",
          "Every site has a particular character. Its topography, climate, views, vegetation, neighbouring buildings, movement patterns and relationship to the wider environment all influence what can be created there.",
          "At LKM Architecture, understanding these conditions is one of the first steps in the design process. The objective is not simply to place a building on a site, but to understand how the building can belong to it.",
        ],
      },
      {
        heading: "Climate is part of the design",
        paragraphs: [
          "Sun, wind, rainfall and temperature should influence architectural decisions from the beginning rather than being treated as technical considerations at the end.",
          "Orientation can influence daylight and heat gain. Openings can establish relationships between interior and exterior spaces. Shading can improve comfort while also becoming an important architectural element.",
          "In this way, environmental response becomes part of the character of the building rather than something added after the design has already been determined.",
        ],
      },
      {
        heading: "Understanding how people live",
        paragraphs: [
          "A building ultimately exists for people. The way occupants arrive, move, gather, work, rest and interact with their surroundings should therefore influence the organisation of space.",
          "For residential projects, this may mean carefully balancing privacy, family interaction, views, landscape and outdoor living. For commercial and institutional projects, circulation, accessibility, efficiency and user experience can become equally important.",
          "The strongest plans are often those where these relationships feel natural rather than forced.",
        ],
      },
      {
        heading: "Materials and character",
        paragraphs: [
          "Material selection is another way architecture establishes a relationship with place.",
          "Local conditions, availability, maintenance, durability, workmanship and cost all influence material decisions. At the same time, materials contribute to the atmosphere and identity of a building.",
          "The intention is not to make every building look traditional or deliberately regional. Rather, it is to create architecture that responds intelligently to where it is and how it will be experienced.",
        ],
      },
      {
        heading: "From site to architecture",
        paragraphs: [
          "Designing for place ultimately means allowing the site to participate in the design process.",
          "The result can be architecture that feels inevitable — as though the building could only have been conceived in that particular setting.",
          "For us, this is where architecture becomes more than an object. It becomes part of a larger relationship between people, environment and place.",
        ],
      },
    ],
  },

  {
    slug: "architecture-and-value",
    number: "02",
    category: "Development",
    title: "Architecture and Value",
    date: "September 2026",
    intro:
      "A successful building must work beyond its appearance. It must create functional, commercial and long-term value.",
    sections: [
      {
        heading: "Design is part of the development equation",
        paragraphs: [
          "Architecture and development are closely connected. Every decision about space, circulation, materials and construction ultimately affects how a development performs.",
          "A visually compelling building can still underperform if its spaces are inefficient, its programme is poorly organised or its construction requirements are disconnected from the available budget.",
          "Good design therefore considers both experience and performance.",
        ],
      },
      {
        heading: "Understanding the opportunity",
        paragraphs: [
          "Before a line is drawn, there is value in understanding the site and the opportunity behind it.",
          "Planning considerations, access, orientation, surrounding development, programme, market positioning and development objectives can all influence the appropriate response.",
          "This early understanding can help identify opportunities while also revealing constraints before significant resources are committed.",
        ],
      },
      {
        heading: "Efficiency creates value",
        paragraphs: [
          "The organisation of space has a direct relationship with value.",
          "Clear circulation, appropriate room proportions, efficient structural systems and well-considered service zones can make a project easier to build and more effective to operate.",
          "Efficiency does not mean reducing architecture to minimum dimensions. It means ensuring that the space created is purposeful and contributes to the overall performance of the project.",
        ],
      },
      {
        heading: "Design and long-term thinking",
        paragraphs: [
          "A building should be considered beyond the moment it is completed.",
          "Durability, adaptability, maintenance, energy performance and the ability of spaces to respond to changing needs can all influence long-term value.",
          "Architecture becomes more valuable when it remains useful, relevant and desirable over time.",
        ],
      },
      {
        heading: "Architecture as an investment",
        paragraphs: [
          "For developers and property owners, architecture is ultimately part of an investment decision.",
          "The role of design is therefore not simply to make a project attractive. It is to help create a coherent proposition where land, programme, construction, user experience and market opportunity work together.",
          "Our approach brings design thinking into that wider conversation from the beginning.",
        ],
      },
    ],
  },

  {
    slug: "building-in-the-tropics",
    number: "03",
    category: "Climate",
    title: "Building in the Tropics",
    date: "September 2026",
    intro:
      "Tropical architecture requires more than aesthetics. Sun, wind, rain, ventilation and material performance should shape the design from the beginning.",
    sections: [
      {
        heading: "Designing with climate",
        paragraphs: [
          "The tropical environment presents both opportunities and challenges for architecture.",
          "Strong sunlight, seasonal rainfall, humidity and varying wind conditions can significantly influence comfort and building performance.",
          "Rather than responding to these conditions after the architecture has been designed, they can become part of the design process itself.",
        ],
      },
      {
        heading: "Orientation and solar response",
        paragraphs: [
          "The relationship between a building and the sun is fundamental to tropical design.",
          "Orientation, shading, roof design, façade depth and the placement of openings can all influence the amount of heat and daylight entering a building.",
          "These decisions can also produce architectural depth, creating balconies, screens, overhangs and transitional spaces that contribute to the identity of the building.",
        ],
      },
      {
        heading: "Ventilation and movement",
        paragraphs: [
          "Air movement is an important part of creating comfortable tropical environments.",
          "The arrangement of openings, internal spaces and external shaded areas can help establish useful relationships between the building and prevailing environmental conditions.",
          "Good ventilation should therefore be considered alongside planning and spatial organisation rather than treated as an isolated mechanical requirement.",
        ],
      },
      {
        heading: "Rain and material performance",
        paragraphs: [
          "Rainfall places particular demands on roofs, façades, drainage systems, external finishes and detailing.",
          "Durability is therefore closely connected to the quality of construction and the suitability of materials for the local environment.",
          "In coastal and other humid environments, material selection and detailing become especially important considerations in the life of a building.",
        ],
      },
      {
        heading: "Climate as character",
        paragraphs: [
          "Climate-responsive architecture does not have to look a certain way.",
          "The response can be expressed through proportion, shade, landscape, openings, courtyards, screens, materiality and the relationship between interior and exterior space.",
          "When these elements are integrated from the beginning, environmental performance can become part of the architectural character rather than a compromise to it.",
        ],
      },
    ],
  },

  {
    slug: "the-house-as-a-place",
    number: "04",
    category: "Residential",
    title: "The House as a Place",
    date: "September 2026",
    intro:
      "A home is more than a collection of rooms. It is a framework for everyday life, memory and connection.",
    sections: [
      {
        heading: "Beyond the floor plan",
        paragraphs: [
          "Residential architecture should respond to the rhythms of the people who inhabit it.",
          "A successful home is not simply a collection of bedrooms, living spaces and service areas. It is an environment organised around how people actually live.",
          "The relationship between spaces can be as important as the spaces themselves.",
        ],
      },
      {
        heading: "Privacy and connection",
        paragraphs: [
          "Homes have to balance openness and privacy.",
          "Family spaces may benefit from visual and physical connections, while bedrooms, bathrooms and other private areas require a different degree of separation.",
          "Good planning creates these transitions naturally.",
        ],
      },
      {
        heading: "Inside and outside",
        paragraphs: [
          "In many Kenyan environments, outdoor space can form an important extension of domestic life.",
          "Courtyards, terraces, gardens, balconies and shaded outdoor areas can create intermediate spaces between the building and its surroundings.",
          "These relationships can make a home feel larger, calmer and more connected to its site.",
        ],
      },
      {
        heading: "Light, views and movement",
        paragraphs: [
          "Natural light and carefully framed views can influence how a home is experienced throughout the day.",
          "Movement through the house can also create a sequence of moments — arrival, transition, gathering, retreat and connection with the landscape.",
          "These experiences are difficult to capture in a simple room schedule, yet they are central to good residential design.",
        ],
      },
      {
        heading: "A home with character",
        paragraphs: [
          "We believe the best homes are distinctive without being excessive and considered without feeling complicated.",
          "Character comes from the relationship between proportion, light, materials, landscape and the lives of the people who inhabit the building.",
          "The objective is architecture that feels personal and enduring rather than simply fashionable.",
        ],
      },
    ],
  },

  {
    slug: "from-concept-to-construction",
    number: "05",
    category: "Practice",
    title: "From Concept to Construction",
    date: "September 2026",
    intro:
      "The strongest architectural ideas are those that can survive the journey from drawing to construction.",
    sections: [
      {
        heading: "The drawing is not the destination",
        paragraphs: [
          "Design is only one part of architecture. The real test comes when an idea has to become a physical building.",
          "A successful project connects concept, documentation, coordination, procurement and construction into one continuous process.",
          "This requires designers to understand not only how a building should look, but how it will actually be made.",
        ],
      },
      {
        heading: "Buildability begins early",
        paragraphs: [
          "Construction considerations should influence design decisions from an early stage.",
          "Structure, materials, junctions, services, access and construction sequencing can all affect whether an architectural idea is practical and economical to deliver.",
          "Considering these issues early can reduce unnecessary changes later in the process.",
        ],
      },
      {
        heading: "Coordination matters",
        paragraphs: [
          "Complex buildings require coordination between architecture, structure, building services, quantities and construction.",
          "The quality of this coordination can have a significant effect on the outcome on site.",
          "Clear information allows different teams to understand the same design intent and work towards the same result.",
        ],
      },
      {
        heading: "Materials become architecture",
        paragraphs: [
          "The transition from drawing to building is also the moment when material decisions become tangible.",
          "Texture, colour, joints, tolerances, weathering and workmanship all influence the final experience of a building.",
          "This is why material selection should be considered together with detailing and construction rather than in isolation.",
        ],
      },
      {
        heading: "From idea to reality",
        paragraphs: [
          "The connection between design and delivery is central to the way we approach projects.",
          "The ambition is to protect the original idea while remaining responsive to cost, construction realities, technical requirements and the conditions encountered on site.",
          "Good architecture is not only imagined well. It is resolved well.",
        ],
      },
    ],
  },

  {
    slug: "architecture-for-a-changing-africa",
    number: "06",
    category: "Perspective",
    title: "Architecture for a Changing Africa",
    date: "September 2026",
    intro:
      "Africa is changing rapidly. Its cities, communities and economies require architecture that is ambitious, adaptable and rooted in context.",
    sections: [
      {
        heading: "A continent in transition",
        paragraphs: [
          "Africa's built environment is being shaped by urban growth, demographic change, new investment, evolving technologies and changing patterns of work and living.",
          "These changes create enormous opportunities for architecture and development.",
          "They also demand a more considered approach to how places are planned, designed and delivered.",
        ],
      },
      {
        heading: "Beyond individual buildings",
        paragraphs: [
          "The future of African architecture cannot be considered only through individual buildings.",
          "Housing, commercial development, infrastructure, hospitality, education, healthcare and public spaces are interconnected parts of larger urban and regional systems.",
          "The quality of those relationships will increasingly influence how successful our cities and communities become.",
        ],
      },
      {
        heading: "Rooted and globally relevant",
        paragraphs: [
          "There is an opportunity to create places that are distinctly African while remaining globally relevant.",
          "This does not require a single architectural style. It requires an understanding of local climate, culture, materials, economies, patterns of living and aspirations.",
          "Architecture can be contemporary without losing its relationship with place.",
        ],
      },
      {
        heading: "The role of development",
        paragraphs: [
          "Architecture and development are powerful tools for shaping the future of the built environment.",
          "Responsible development can create housing, employment, commercial opportunities, social infrastructure and new places for communities to thrive.",
          "The challenge is to align these opportunities with thoughtful planning and long-term value.",
        ],
      },
      {
        heading: "Building Africa's future",
        paragraphs: [
          "For us, the opportunity extends beyond individual commissions.",
          "It is about contributing to environments that are ambitious, useful, resilient and capable of creating lasting value.",
          "This is the kind of future-oriented architecture we believe is worth pursuing.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Journal | LKM Architecture",
    };
  }

  return {
    title: `${article.title} | LKM Architecture`,
    description: article.intro,
    alternates: {
      canonical: `https://www.lkmarchitecture.com/journal/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | LKM Architecture`,
      description: article.intro,
      type: "article",
      publishedTime: "2026-09-01",
      authors: ["LKM Architecture"],
      section: article.category,
    },
  };
}

export default async function JournalArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articleIndex = articles.findIndex(
    (item) => item.slug === slug
  );

  if (articleIndex === -1) {
    notFound();
  }

  const article = articles[articleIndex];

  const previousArticle =
    articles[
      (articleIndex - 1 + articles.length) % articles.length
    ];

  const nextArticle =
    articles[(articleIndex + 1) % articles.length];

  return (
    <main className="bg-white text-neutral-950">

      {/* ARTICLE HERO */}
      <section className="bg-[#182638] text-white">

        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                LKM Journal
              </p>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/35">
                {article.number}
              </p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                {article.category}
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-serif leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                {article.title}
              </h1>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/35">
                {article.date}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-black/10">

        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Perspective
              </p>
            </div>

            <div>

              <p className="max-w-4xl text-2xl font-serif leading-[1.35] tracking-[-0.025em] md:text-4xl">
                {article.intro}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ARTICLE BODY */}
      <article>

        {article.sections.map((section, index) => (

          <section
            key={section.heading}
            className={
              index % 2 === 0
                ? "bg-white"
                : "bg-neutral-50"
            }
          >

            <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-24 lg:px-16">

              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.6fr]">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                </div>

                <div>

                  <h2 className="max-w-3xl text-3xl font-serif leading-tight tracking-[-0.03em] md:text-5xl">
                    {section.heading}
                  </h2>

                  <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">

                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>

        ))}

      </article>

      {/* ARTICLE NAVIGATION */}
      <section className="border-t border-black/10">

        <div className="mx-auto grid max-w-[1500px] md:grid-cols-2">

          <Link
            href={`/journal/${previousArticle.slug}`}
            className="group border-b border-black/10 px-6 py-12 transition-colors hover:bg-neutral-50 md:border-b-0 md:border-r md:px-10 md:py-20 lg:px-16"
          >

            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Previous Article
            </p>

            <div className="mt-6 flex items-end justify-between gap-6">

              <h2 className="max-w-md text-2xl font-serif tracking-[-0.025em] md:text-3xl">
                {previousArticle.title}
              </h2>

              <span className="text-xl transition-transform group-hover:-translate-x-1">
                ←
              </span>

            </div>

          </Link>

          <Link
            href={`/journal/${nextArticle.slug}`}
            className="group px-6 py-12 transition-colors hover:bg-neutral-50 md:px-10 md:py-20 lg:px-16"
          >

            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Next Article
            </p>

            <div className="mt-6 flex items-end justify-between gap-6">

              <h2 className="max-w-md text-2xl font-serif tracking-[-0.025em] md:text-3xl">
                {nextArticle.title}
              </h2>

              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>

            </div>

          </Link>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#182638] text-white">

        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Continue the Conversation
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-serif leading-tight tracking-[-0.04em] md:text-6xl">
            Have an idea worth exploring?
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Whether you are planning a home, developing a commercial
            opportunity or considering a site, tell us what you are
            thinking about.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <Link
              href="/start-a-project"
              className="inline-flex items-center gap-6 bg-white px-7 py-5 text-xs uppercase tracking-[0.22em] text-[#182638] transition-opacity hover:opacity-80"
            >
              Start a Project
              <span>→</span>
            </Link>

            <a
              href="https://wa.me/254720140647"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-6 border border-white/30 px-7 py-5 text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#182638]"
            >
              WhatsApp LKM
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

      {/* BACK TO JOURNAL */}
      <section className="border-t border-black/10">

        <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 lg:px-16">

          <Link
            href="/journal"
            className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:text-neutral-950"
          >
            ← Back to Journal
          </Link>

        </div>

      </section>

    </main>
  );
}