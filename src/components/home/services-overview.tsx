import React from "react";
import Link from "next/link";
import { Monitor, Smartphone, Layers, Cloud, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
    title: "Website Development",
    desc: "Business websites, landing pages, e-commerce stores and custom web applications.",
    href: "/services#website-development",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Mobile App Development",
    desc: "Android and iOS applications for startups, businesses and enterprise needs.",
    href: "/services#mobile-app-development",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "Custom Software",
    desc: "Business management systems, CRM, dashboards and workflow automation.",
    href: "/services#custom-software",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Cloud & DevOps",
    desc: "Deployment, infrastructure setup, performance optimization and ongoing support.",
    href: "/services#cloud-devops",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-white py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Complete digital solutions for modern businesses.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-sm leading-relaxed">
              From business websites to complex software systems, we design,
              develop and deploy tailored solutions that solve real problems and
              create measurable results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group bg-white border border-gray-200 p-8 rounded-2xl flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
