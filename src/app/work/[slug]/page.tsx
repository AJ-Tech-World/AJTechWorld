import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projectsData, ProjectItem } from "@/data/projects";
import { RealEstateMockup } from "@/components/mockups/real-estate-mockup";
import { EcommerceMockup } from "@/components/mockups/ecommerce-mockup";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { MobileAppMockup } from "@/components/mockups/mobile-app-mockup";
import { Check, ArrowRight, Layers, Shield, Cpu, ExternalLink } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const mockupMap: Record<string, React.ReactNode> = {
  "real-estate-platform": <RealEstateMockup />,
  "ecommerce-store": <EcommerceMockup />,
  "business-management-system": <DashboardMockup />,
  "fitness-mobile-app": <MobileAppMockup />,
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found — AJ Tech World" };

  return {
    title: `${project.title} — Case Study — AJ Tech World`,
    description: project.detailedOverview,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        {/* Header Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/work" className="hover:text-gray-900 transition-colors">
              Work
            </Link>{" "}
            / <span className="text-blue-600">{project.title}</span>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {project.category}
              </span>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>
        </div>

        {/* Big Visual Mockup Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="w-full aspect-[16/9] max-h-[600px] bg-gray-900 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden border border-gray-800">
            {mockupMap[project.slug] || <div className="w-full h-full bg-slate-800" />}
          </div>
        </div>

        {/* Metrics Row (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="bg-gray-50/50 py-12 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {project.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600 tracking-tight mb-1">
                      {m.value}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenge & Solution Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-200">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-6 bg-[#0B1220] p-8 sm:p-10 rounded-3xl text-white">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Solution</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="bg-gray-50/50 py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                KEY CAPABILITIES
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Built for performance and reliability.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-xs sm:text-sm font-semibold border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B1220] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Need a similar solution for your business?
              </h3>
              <p className="text-gray-400 text-sm max-w-lg mb-8 leading-relaxed">
                Let's discuss how we can build a high-performance web or mobile application tailored to your goals.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all shadow-lg text-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
