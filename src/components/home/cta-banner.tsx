import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1220] rounded-3xl p-10 sm:p-16 relative overflow-hidden flex flex-col items-center text-center">
          {/* Background decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mb-6">
            Ready to build something great?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mb-8 leading-relaxed">
            Have a project in mind? Share your requirements and we’ll get back to you with the next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl flex items-center gap-2 transition-all shadow-lg text-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-xl transition-colors text-sm"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
