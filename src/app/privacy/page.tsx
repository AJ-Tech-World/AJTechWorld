
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Mail,
} from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AJ Tech World",
  description:
    "Learn how AJ Tech World collects, uses, and protects your personal information.",
};

const sections = [
  {
    id: "information",
    number: "01",
    title: "Information We Collect",
    icon: Database,
    content:
      "We collect information that you provide directly through our contact form, including your name, email address, company name, and project details.",
  },
  {
    id: "usage",
    number: "02",
    title: "How We Use Your Information",
    icon: ShieldCheck,
    content:
      "We use the information we collect to respond to project inquiries, deliver our services, communicate with you, and improve our website. We do not sell your personal information or share it with third parties for their own marketing purposes.",
  },
  {
    id: "security",
    number: "03",
    title: "Data Security",
    icon: LockKeyhole,
    content:
      "We take reasonable measures to protect personal information against unauthorized access, loss, misuse, and disclosure. However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
  },
];

const navigation = [
  { id: "information", label: "Information We Collect" },
  { id: "usage", label: "How We Use Information" },
  { id: "security", label: "Data Security" },
  { id: "contact", label: "Contact Us" },
];

const contactEmail = "ajtechworldofficial@gmail.com";

export default function PrivacyPage() {
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
                Privacy Policy
              </span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                <ShieldCheck className="h-4 w-4" />
                Your privacy matters
              </div>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Transparency matters to us. Here is how AJ Tech World
                handles your information when you visit our website
                or work with our team.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: October 17, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Policy content */}
        <section className="py-8 sm:py-10 lg:py-12">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Horizontal section navigation */}
            <nav
              aria-label="Privacy policy sections"
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

            {/* Article */}
            <article className="w-full min-w-0 max-w-4xl">
              <div className="mb-8 border-b border-slate-200 pb-7 sm:mb-10 sm:pb-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Your information, handled responsibly
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  This policy explains what information we collect,
                  how we use it, and the steps we take to protect it
                  when you interact with AJ Tech World.
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
                        If you have questions about this Privacy
                        Policy or how we handle your information,
                        contact our team.
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

              {/* Bottom navigation */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  ← Back to home
                </Link>

                <Link
                  href="/terms"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  Terms of Service →
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
