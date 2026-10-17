import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: <Search className="w-6 h-6" />, title: "Discovery", desc: "Understanding requirements, user needs and business goals." },
  { icon: <PenTool className="w-6 h-6" />, title: "Design", desc: "Creating wireframes, prototypes and high-fidelity UI/UX." },
  { icon: <Code2 className="w-6 h-6" />, title: "Development", desc: "Building scalable code with modern tech stacks." },
  { icon: <Rocket className="w-6 h-6" />, title: "Deployment", desc: "Rigorous testing, optimization and live release." },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            A transparent, proven process.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
