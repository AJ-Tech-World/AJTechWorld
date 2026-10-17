import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OfficeVisual } from "@/components/mockups/office-visual";
import { servicesData } from "@/data/services";
import { Monitor, Smartphone, Layers, Cloud, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — AJ Tech World",
  description:
    "End-to-end software development services including web apps, mobile applications, custom software, and cloud DevOps.",
};

const iconMap = {
  Monitor: <Monitor className="w-6 h-6 text-blue-600" />,
  Smartphone: <Smartphone className="w-6 h-6 text-blue-600" />,
  Layers: <Layers className="w-6 h-6 text-blue-600" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-600" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        {/* Header Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          {/* Breadcrumb */}
          <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-blue-600">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                OUR SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Our Services
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We offer end-to-end development services to help businesses build,
                launch and scale digital products with precision and speed.
              </p>
            </div>
            {/* <div className="lg:col-span-6">
              <OfficeVisual label="AJ Tech World Development Center" />
            </div> */}
          </div>
        </div>

        {/* Services Grid Section */}
        <div className="bg-gray-50/50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((s) => (
                <div
                  key={s.id}
                  id={s.slug}
                  className="bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                      {iconMap[s.iconName]}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {s.detailedDescription}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 mb-8">
                      {s.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Production Ready
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Have a custom requirement?
            </h2>
            <p className="text-gray-600 text-sm">
              We specialize in tailored architectural solutions designed to scale with your business demands.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B1220] hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-md text-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
