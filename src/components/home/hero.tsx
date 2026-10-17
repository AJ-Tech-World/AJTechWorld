"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroMockup } from "@/components/mockups/hero-mockup";
import heroImage from "@/assets/Hero-Section.png";

export function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        {/* Left: Content */}
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            SOFTWARE DEVELOPMENT STUDIO
          </div>

          <h1 className="max-w-[620px] text-[clamp(2.5rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950">
            Your Ideas
            <br />
            <span className="text-blue-600">
              Our Technology
            </span>
            <br />
            Real Business Growth
          </h1>

          <p className="mt-6 max-w-[540px] text-base leading-7 text-slate-600 sm:text-[17px]">
            We design, develop and deploy modern web and mobile
            applications, custom software and cloud solutions that
            solve real business problems.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative mx-auto w-full min-w-0 max-w-[600px]">
          <Image
            src={heroImage}
            alt="AJ Tech World software development services"
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
