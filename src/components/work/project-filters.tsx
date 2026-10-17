"use client";

import React from "react";
import { ProjectCategory } from "@/data/projects";

interface ProjectFiltersProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const categories: ProjectCategory[] = [
  "All",
  "Web Applications",
  "Mobile Apps",
  "Custom Software",
];

export function ProjectFilters({
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
              isActive
                ? "bg-[#0B1220] border-[#0B1220] text-white shadow-md shadow-gray-200"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
