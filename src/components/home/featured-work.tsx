import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RealEstateMockup } from "@/components/mockups/real-estate-mockup";
import { EcommerceMockup } from "@/components/mockups/ecommerce-mockup";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";

const projects = [
  {
    title: "Real Estate Platform",
    desc: "Property listings, search filters, buyer inquiries and an admin dashboard.",
    cat: "Web Application",
    href: "/work/real-estate-platform",
    mockup: <RealEstateMockup />,
  },
  {
    title: "E-commerce Store",
    desc: "Product catalog, cart, checkout, order management and inventory tracking.",
    cat: "Web Application",
    href: "/work/ecommerce-store",
    mockup: <EcommerceMockup />,
  },
  {
    title: "Business Management System",
    desc: "Dashboard, user management, reporting and automated workflows.",
    cat: "Web Application",
    href: "/work/business-management-system",
    mockup: <DashboardMockup />,
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-gray-50/50 py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Selected projects that show what we do.
            </h2>
          </div>
          <div className="max-w-md flex flex-col gap-4 lg:items-end">
            <p className="text-gray-600 text-sm leading-relaxed lg:text-right">
              A few recent projects that demonstrate our capabilities in web
              development, mobile applications and custom software.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1"
            >
              {/* Project Preview */}
              <div className="aspect-[4/3] bg-gray-100 p-4 border-b border-gray-100 group-hover:bg-gray-200/30 transition-colors relative">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500">
                  {p.mockup}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
                <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {p.cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
