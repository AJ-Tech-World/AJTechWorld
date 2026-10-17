import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { RealEstateMockup } from "@/components/mockups/real-estate-mockup";
import { EcommerceMockup } from "@/components/mockups/ecommerce-mockup";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { MobileAppMockup } from "@/components/mockups/mobile-app-mockup";

interface ProjectCardProps {
  project: ProjectItem;
}

const mockupMap: Record<string, React.ReactNode> = {
  "real-estate-platform": <RealEstateMockup />,
  "ecommerce-store": <EcommerceMockup />,
  "business-management-system": <DashboardMockup />,
  "fitness-mobile-app": <MobileAppMockup />,
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1 flex flex-col"
    >
      {/* Mockup Preview */}
      <div className="aspect-[4/3] bg-gray-100 p-4 border-b border-gray-100 group-hover:bg-gray-200/30 transition-colors relative flex items-center justify-center">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500">
          {mockupMap[project.slug] || <div className="w-full h-full bg-slate-800" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {project.shortDescription}
        </p>
        <div className="mt-auto">
          <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
