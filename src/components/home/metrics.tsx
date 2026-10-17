import React from "react";

const metrics = [
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Client Focused" },
  { value: "Modern", label: "Technologies" },
  { value: "Ongoing", label: "Support" },
];

export function Metrics() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-gray-100">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-1 ${
                i !== metrics.length - 1 ? "lg:border-r lg:border-gray-100" : ""
              }`}
            >
              <span className="text-3xl font-bold text-gray-900 tracking-tight">
                {m.value}
              </span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
