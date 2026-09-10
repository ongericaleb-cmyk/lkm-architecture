"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function StartAProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/xbgjqorr",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(
          "There was a problem sending your enquiry. Please try again or contact us on WhatsApp."
        );
      }
    } catch {
      alert(
        "There was a problem sending your enquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-[#171717]">

      {/* HERO */}
      <section className="bg-[#182638] text-white">
        <div className="mx-auto max-w-[1500px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-16">

          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Start a Project
          </p>

          <h1 className="mt-7 max-w-5xl text-5xl font-medium tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Let&apos;s create something considered.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            Whether you are planning a home, developing a commercial
            opportunity or looking for a complete design and development
            partner, tell us where you are starting from.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section>
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">

          {/* INTRO / CONTACT */}
          <aside>

            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Begin the conversation
            </p>

            <div className="mt-8 max-w-sm">
              <p className="text-lg leading-8 text-black/65">
                The more we understand about your project, the better
                we can advise on the right way forward.
              </p>
            </div>

            <div className="mt-12 border-t border-black/10 pt-8">

              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                Prefer WhatsApp?
              </p>

              <a
                href="https://wa.me/254720140647"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-3 text-sm transition-opacity hover:opacity-50"
              >
                +254 720 140 647
                <span>↗</span>
              </a>

            </div>

            <div className="mt-10 border-t border-black/10 pt-8">

              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                Email
              </p>

              <a
                href="mailto:info@lkmarchitecture.com"
                className="mt-4 inline-block text-sm transition-opacity hover:opacity-50"
              >
                info@lkmarchitecture.com
              </a>

            </div>

          </aside>

          {/* FORM */}
          <div>

            {submitted ? (
              <div className="border-t border-black/10 pt-10">

                <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                  Enquiry received
                </p>

                <h2 className="mt-6 max-w-2xl text-4xl tracking-[-0.04em] md:text-5xl">
                  Thank you. We&apos;ll be in touch.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
                  Your project information has been received by LKM
                  Architecture. We&apos;ll review the brief and get back
                  to you.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/work"
                    className="border border-black/20 px-6 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[#182638] hover:text-white"
                  >
                    Explore our work
                  </Link>

                  <a
                    href="https://wa.me/254720140647"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#182638] px-6 py-4 text-xs uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-80"
                  >
                    WhatsApp us
                  </a>

                </div>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border-t border-black/10"
              >

                {/* NAME */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="name"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0 md:text-xl"
                  />
                </div>

                {/* EMAIL */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="email"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0 md:text-xl"
                  />
                </div>

                {/* PHONE */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="phone"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254..."
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0 md:text-xl"
                  />
                </div>

                {/* PROJECT TYPE */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="projectType"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Project type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none focus:ring-0 md:text-xl"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="Residential">
                      Residential
                    </option>
                    <option value="Commercial">
                      Commercial
                    </option>
                    <option value="Hospitality">
                      Hospitality
                    </option>
                    <option value="Healthcare">
                      Healthcare
                    </option>
                    <option value="Institutional">
                      Institutional
                    </option>
                    <option value="Interior Design">
                      Interior Design
                    </option>
                    <option value="Development">
                      Development / Investment
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* LOCATION */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="location"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Project location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City / County / Country"
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0 md:text-xl"
                  />
                </div>

                {/* BUDGET */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="budget"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Indicative budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none focus:ring-0 md:text-xl"
                  >
                    <option value="" disabled>
                      Select an approximate range
                    </option>
                    <option value="Below KES 10M">
                      Below KES 10M
                    </option>
                    <option value="KES 10M - 25M">
                      KES 10M – 25M
                    </option>
                    <option value="KES 25M - 50M">
                      KES 25M – 50M
                    </option>
                    <option value="KES 50M - 100M">
                      KES 50M – 100M
                    </option>
                    <option value="Above KES 100M">
                      Above KES 100M
                    </option>
                    <option value="Not yet determined">
                      Not yet determined
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="border-b border-black/10 py-7">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-[0.25em] text-black/40"
                  >
                    Tell us about the project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you are planning, what stage you are at, and what you would like us to help with."
                    className="mt-4 w-full resize-none border-0 bg-transparent p-0 text-lg leading-8 outline-none placeholder:text-black/25 focus:ring-0 md:text-xl"
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-sm text-xs leading-5 text-black/40">
                    By submitting this form, you agree that LKM
                    Architecture may contact you regarding your enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex shrink-0 items-center justify-center gap-5 bg-[#182638] px-8 py-5 text-xs uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Enquiry"}
                    <span>→</span>
                  </button>

                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="bg-[#f7f5f0]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16">

          <p className="max-w-4xl text-3xl leading-[1.2] tracking-[-0.04em] md:text-5xl">
            Architecture should be considered from the first idea to
            the final detail.
          </p>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.25em] text-black/55 transition-colors hover:text-black"
            >
              Explore our services →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}