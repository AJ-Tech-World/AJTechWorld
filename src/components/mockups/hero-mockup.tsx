"use client";

import React from "react";
import { motion } from "framer-motion";
import { RealEstateMockup } from "./real-estate-mockup";

export function HeroMockup() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto perspective-1000">
      {/* Background Decorative Element (Subtle Ambient Glow) */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-100/50 rounded-full blur-3xl -z-10" />

      {/* Laptop Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 2 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        {/* Laptop Chassis Screen */}
        <div className="relative mx-auto w-full aspect-[16/10] bg-gray-800 rounded-2xl p-1.5 sm:p-2.5 shadow-2xl border-[6px] sm:border-[10px] border-gray-900 overflow-hidden">
          {/* Screen Display Content */}
          <div className="w-full h-full bg-slate-900 rounded-sm overflow-hidden relative group">
            <RealEstateMockup />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Camera / Sensors */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black rounded-full mt-1 sm:mt-2 opacity-50" />
        </div>

        {/* Laptop Base (Keyboard area) */}
        <div className="relative mx-auto w-[110%] -ml-[5%] h-2 sm:h-4 bg-gray-800 rounded-b-xl border-t border-gray-700 shadow-xl" />
        <div className="relative mx-auto w-[40%] h-1 sm:h-2 bg-gray-900/40 rounded-b-lg -mt-0.5" />
      </motion.div>

      {/* Overlapping Smartphone Mockup (Foreground Right) */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-10 z-20 w-[140px] sm:w-[180px] aspect-[1/2] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-[4px] sm:border-[8px] border-gray-900 overflow-hidden"
      >
        {/* Smartphone Screen Display */}
        <div className="w-full h-full bg-slate-900 rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden relative">
          <RealEstateMockup compact />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

          {/* Notch / Dynamic Island area */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-b-lg z-20 flex items-center justify-center">
            <div className="w-4 sm:w-6 h-0.5 sm:h-1 bg-gray-800 rounded-full" />
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-gray-800 rounded-full" />
      </motion.div>
    </div>
  );
}
