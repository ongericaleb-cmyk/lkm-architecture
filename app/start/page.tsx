"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbgjqorr";

export default function StartProjectPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();

        setErrorMessage(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );

        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your enquiry. Please check your internet connection and try again."
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#f4f2ee] px-6 py-10 text-[#151515] lg:px-10">
        <div className="mx-auto flex min-h-[80vh] max-w-[1400px] flex-col justify-center">
          <p className="text-[10px] font-medium tracking-[0.3em] text-black/50">
            PROJECT ENQUIRY RECEIVED
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-8xl">
            Thank you.
            <br />
            Let&apos;s explore
            <br />
            what comes next.
          </h1>

          <p className="mt-10 max-w-xl text-base leading-8 text-black/60">
            Your project enquiry has been received successfully. Our team will
            review your information and get back to you regarding the next
            steps.
          </p>

          <Link
            href="/"
            className="mt-12 inline-block w-fit border border-black px-8 py-5 text-[10px] font-medium tracking-[0.2em] transition hover:bg-black hover:text-white"
          >
            RETURN HOME →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f2ee] text-[#151515]">
      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.35em]"
          >
            LKM ARCHITECTURE
          </Link>

          <Link
            href="/"
            className="text-[10px] font-medium tracking-[0.2em] text-black/60 transition hover:text-black"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </header>

      {/* INTRODUCTION */}
      <section className="border-b border-black/10 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-black/50">
              START A PROJECT
            </p>
          </div>

          <div>
            <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Tell us what
              <br />
              you want to create.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-black/60">
              Share a few details about your project. This helps us understand
              your ambitions, requirements and the best way for LKM Architecture
              to support you.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[1000px]"
        >
          {/* 01 — YOUR DETAILS */}
          <div className="border-t border-black/15 pt-8">
            <p className="mb-10 text-[10px] font-medium tracking-[0.25em] text-black/45">
              01 — YOUR DETAILS
            </p>

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <FormField label="FULL NAME" name="name" required />

              <FormField
                label="EMAIL ADDRESS"
                name="email"
                type="email"
                required
              />

              <FormField
                label="PHONE / WHATSAPP"
                name="phone"
                type="tel"
                required
              />

              <FormField label="COMPANY (OPTIONAL)" name="company" />
            </div>
          </div>

          {/* 02 — PROJECT DETAILS */}
          <div className="mt-20 border-t border-black/15 pt-8">
            <p className="mb-10 text-[10px] font-medium tracking-[0.25em] text-black/45">
              02 — PROJECT DETAILS
            </p>

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <SelectField
                label="PROJECT TYPE"
                name="projectType"
                required
                options={[
                  "Residential",
                  "Commercial",
                  "Hospitality",
                  "Mixed-Use",
                  "Institutional",
                  "Interior Design",
                  "Development",
                  "Other",
                ]}
              />

              <FormField
                label="PROJECT LOCATION"
                name="location"
                required
              />

              <SelectField
                label="CURRENT PROJECT STAGE"
                name="stage"
                required
                options={[
                  "Just exploring ideas",
                  "Have land / site",
                  "Concept development",
                  "Need approvals",
                  "Ready to build",
                  "Existing project / renovation",
                ]}
              />

              <SelectField
                label="ESTIMATED TIMELINE"
                name="timeline"
                required
                options={[
                  "Immediately",
                  "Within 3 months",
                  "Within 6 months",
                  "Within 12 months",
                  "Still exploring",
                ]}
              />
            </div>
          </div>

          {/* 03 — PROJECT INVESTMENT */}
          <div className="mt-20 border-t border-black/15 pt-8">
            <p className="mb-10 text-[10px] font-medium tracking-[0.25em] text-black/45">
              03 — PROJECT INVESTMENT
            </p>

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <SelectField
                label="ESTIMATED PROJECT BUDGET"
                name="budget"
                required
                options={[
                  "Below KES 5 Million",
                  "KES 5 – 10 Million",
                  "KES 10 – 25 Million",
                  "KES 25 – 50 Million",
                  "KES 50 – 100 Million",
                  "KES 100 Million +",
                  "Prefer to discuss",
                ]}
              />

              <SelectField
                label="HOW DID YOU FIND US?"
                name="source"
                required
                options={[
                  "Instagram",
                  "Facebook",
                  "LinkedIn",
                  "Google",
                  "Referral",
                  "Previous Client",
                  "Site / Project",
                  "Other",
                ]}
              />
            </div>
          </div>

          {/* 04 — TELL US MORE */}
          <div className="mt-20 border-t border-black/15 pt-8">
            <p className="mb-10 text-[10px] font-medium tracking-[0.25em] text-black/45">
              04 — TELL US MORE
            </p>

            <label className="block">
              <span className="text-[10px] font-medium tracking-[0.2em] text-black/50">
                DESCRIBE YOUR PROJECT
              </span>

              <textarea
                name="description"
                required
                rows={7}
                placeholder="Tell us about your vision, requirements and anything else we should know..."
                className="mt-4 w-full resize-none border border-black/15 bg-transparent px-5 py-5 text-base outline-none transition placeholder:text-black/30 focus:border-black"
              />
            </label>
          </div>

          {/* 05 — NEXT STEP */}
          <div className="mt-20 border-t border-black/15 pt-8">
            <p className="mb-10 text-[10px] font-medium tracking-[0.25em] text-black/45">
              05 — NEXT STEP
            </p>

            <SelectField
              label="HOW WOULD YOU PREFER TO CONTINUE?"
              name="consultation"
              required
              options={[
                "WhatsApp Conversation",
                "Phone Call",
                "Online Consultation",
                "Physical Consultation",
                "Email",
              ]}
            />
          </div>

          {/* ERROR MESSAGE */}
          {status === "error" && (
            <div className="mt-10 border border-red-500/30 bg-red-500/5 p-5 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          {/* SUBMIT */}
          <div className="mt-20 border-t border-black/15 pt-10">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="border border-black bg-black px-10 py-5 text-[10px] font-medium tracking-[0.2em] text-white transition hover:bg-transparent hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting"
                ? "SUBMITTING..."
                : "SUBMIT PROJECT ENQUIRY →"}
            </button>

            <p className="mt-6 max-w-xl text-xs leading-6 text-black/40">
              By submitting this enquiry, you allow LKM Architecture to contact
              you regarding your project and consultation requirements.
            </p>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 text-[10px] tracking-[0.15em] text-black/40 md:flex-row">
          <p>© {new Date().getFullYear()} LKM ARCHITECTURE</p>
          <p>NAIROBI · KENYA</p>
        </div>
      </footer>
    </main>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium tracking-[0.2em] text-black/50">
        {label}
      </span>

      <input
        type={type}
        name={name}
        required={required}
        className="mt-4 w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition focus:border-black"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium tracking-[0.2em] text-black/50">
        {label}
      </span>

      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-4 w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition focus:border-black"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}