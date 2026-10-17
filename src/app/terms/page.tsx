
import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  Scale,
  ShieldCheck,
  Mail,
} from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service | AJ Tech World",
  description:
    "Review the terms governing AJ Tech World services, project deliverables, intellectual property, and business engagements.",
};

const sections = [
  {
    id: "services",
    number: "01",
    title: "Services",
    icon: BriefcaseBusiness,
    content:
      "AJ Tech World provides software development, design, and consulting services. The scope, deliverables, timelines, fees, and responsibilities for each project will be defined in a separate agreement or statement of work agreed upon by both parties.",
  },
  {
    id: "intellectual-property",
    number: "02",
    title: "Intellectual Property",
    icon: FileText,
    content:
      "Unless otherwise agreed in writing, ownership of final deliverables created specifically for a client transfers to the client upon full payment. Pre-existing materials, reusable components, third-party software, and open-source dependencies remain subject to their respective ownership rights and license terms.",
  },
  {
    id: "limitation",
    number: "03",
    title: "Limitation of Liability",
    icon: ShieldCheck,
    content:
      "To the extent permitted by applicable law, AJ Tech World will not be liable for indirect, incidental, special, or consequential damages arising from the use of its services. Any contractual limitations of liability remain subject to applicable law and the relevant project agreement.",
  },
  {
    id: "governing-law",
    number: "04",
    title: "Governing Law",
    icon: Scale,
    content:
      "These terms are intended to be governed by the laws of India, subject to applicable law and any valid agreement between the parties. The appropriate jurisdiction and dispute-resolution arrangements should be specified in the applicable contract.",
  },
];

const navigation = [
  { id: "services", label: "Services" },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
  },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

const contactEmail = "ajtechworldofficial@gmail.com";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page heading */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="text-slate-500 transition-colors hover:text-blue-600"
              >
                Home
              </Link>

              <span className="text-slate-300">/</span>

              <span
                aria-current="page"
                className="font-medium text-blue-600"
              >
                Terms of Service
              </span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                <Scale className="h-4 w-4" />
                Clear terms. Better partnerships.
              </div>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Terms of Service
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Understand the terms that guide our services,
                project deliverables, intellectual property,
                and business relationships.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: October 17, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-8 sm:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Section navigation */}
            <nav
              aria-label="Terms of Service sections"
              className="mb-8 flex flex-wrap gap-2 border-b border-slate-200 pb-6"
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Article shares the same left alignment */}
            <article className="w-full min-w-0 max-w-4xl">
              <div className="mb-8 border-b border-slate-200 pb-7 sm:mb-10 sm:pb-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Working together
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  By accessing or using AJ Tech World services,
                  you agree to the applicable terms. Project-specific
                  agreements may provide additional details about
                  payment, delivery, ownership, and responsibilities.
                </p>
              </div>

              <div className="space-y-9 sm:space-y-10">
                {sections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-8"
                    >
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 sm:h-11 sm:w-11">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold tracking-[0.16em] text-blue-600">
                            {section.number}
                          </p>

                          <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                            {section.title}
                          </h2>

                          <p className="mt-3 text-base leading-7 text-slate-600 sm:leading-8">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/* Contact section */}
                <section
                  id="contact"
                  className="scroll-mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white sm:h-11 sm:w-11">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold text-slate-950 sm:text-xl">
                        Contact Us
                      </h2>

                      <p className="mt-3 text-base leading-7 text-slate-600">
                        If you have questions about these terms
                        or your project agreement, contact our team.
                      </p>

                      <a
                        href={`mailto:${contactEmail}`}
                        className="mt-3 inline-block break-all font-medium text-blue-600 underline-offset-4 hover:underline"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
