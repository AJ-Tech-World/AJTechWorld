import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OfficeVisual } from "@/components/mockups/office-visual";
import { Target, Eye, Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About AJ Tech World — Software Development Studio",
  description:
    "We are a passionate team of developers and designers building high-quality digital products that make a real impact.",
};

const pillars = [
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: "Our Mission",
    desc: "To help businesses bring their ideas to life through reliable and high-quality software.",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Our Vision",
    desc: "To be a trusted global development partner for agencies and businesses everywhere.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Our Values",
    desc: "Quality, transparency, innovation and building long-term relationships.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        {/* Header Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-blue-600">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                ABOUT AJ TECH WORLD
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Engineering the next generation of digital products.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                We are a software development studio focused on building useful,
                reliable and high-performance digital products for startups and
                established businesses globally.
              </p>
              <div className="pt-4 flex flex-col gap-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Expert engineering led by focused founders</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Commitment to clean code and scalable architecture</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Transparent communication and reliable delivery timelines</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <OfficeVisual label="AJ Tech World Headquarters" />
            </div>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="bg-gray-50/50 py-24 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xs hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">Our Development Approach</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    We don't just write code; we solve business problems. Our methodology ensures that every line of code serves a purpose.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <div className="text-xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Uptime Promise</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <div className="text-xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Source Ownership</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Quality is our primary standard.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                AJ Tech World was founded with a simple goal: to provide world-class software engineering that remains accessible and focused. We bridge the gap between large expensive agencies and unreliable freelance platforms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By maintaining a lean, highly specialized team, we ensure that every client receives direct attention from expert engineers and designers. No bureaucracy, just efficient execution.
              </p>
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="bg-[#0B1220] hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all shadow-md text-sm"
                >
                  <span>Talk to our founders</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
