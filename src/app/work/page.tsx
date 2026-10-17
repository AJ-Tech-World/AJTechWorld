"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projectsData, ProjectCategory } from "@/data/projects";
import { ProjectFilters } from "@/components/work/project-filters";
import { ProjectCard } from "@/components/work/project-card";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "All") return true;
    return p.filterCategory === activeCategory;
  });

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
            / <span className="text-blue-600">Work</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              OUR PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Our Work
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore some of our recent projects. Each project is built with a focus on real-world business needs and modern technology.
            </p>
          </div>
        </div>

        {/* Filtered Grid Section */}
        <div className="bg-gray-50/50 py-16 border-t border-gray-100 min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  There are currently no projects listed under "{activeCategory}".
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-xl text-sm hover:bg-blue-500 transition-colors"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
