import React from "react";

interface OfficeVisualProps {
  label?: string;
  className?: string;
}

export function OfficeVisual({
  label = "AJ Tech World Studio",
  className = "",
}: OfficeVisualProps) {
  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200/80 shadow-lg bg-slate-900 group ${className}`}
    >
      {/* High-quality architectural tech studio illustration & photo composition */}
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="officeBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="woodTable" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#854D0E" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="glassWall" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Room Atmosphere Background */}
        <rect width="800" height="500" fill="url(#officeBg)" />

        {/* Floor */}
        <polygon points="0,320 800,320 800,500 0,500" fill="#0B101E" />
        <line x1="0" y1="320" x2="800" y2="320" stroke="#334155" strokeWidth="1" />

        {/* Architectural Glass Conference Room Wall (Background Left) */}
        <rect x="60" y="40" width="280" height="280" fill="url(#glassWall)" stroke="#334155" strokeWidth="2" />
        <line x1="200" y1="40" x2="200" y2="320" stroke="#334155" strokeWidth="1" />
        <line x1="60" y1="180" x2="340" y2="180" stroke="#334155" strokeWidth="1" />

        {/* Acoustic Paneling / Feature Wall (Right) */}
        <g opacity="0.3">
          {[...Array(12)].map((_, i) => (
            <rect key={i} x={420 + i * 30} y="40" width="16" height="280" rx="3" fill="#64748B" />
          ))}
        </g>

        {/* Neon/Backlit AJ Tech World Sign on Wall */}
        <g transform="translate(480, 110)">
          <rect x="-10" y="-10" width="220" height="56" rx="8" fill="#020617" stroke="#1E293B" strokeWidth="1" />
          <rect x="6" y="6" width="24" height="24" rx="5" fill="#2563EB" />
          <text x="18" y="23" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">AJ</text>
          <text x="40" y="23" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif">AJ Tech World</text>
        </g>

        {/* Executive Conference Table (Foreground Center) */}
        <polygon points="120,440 680,440 620,330 180,330" fill="url(#woodTable)" stroke="#A16207" strokeWidth="1" />

        {/* Ergonomic Chairs */}
        <rect x="250" y="290" width="50" height="40" rx="6" fill="#1E293B" />
        <rect x="375" y="285" width="50" height="45" rx="6" fill="#1E293B" />
        <rect x="500" y="290" width="50" height="40" rx="6" fill="#1E293B" />

        {/* Laptops on Table */}
        <g transform="translate(365, 345)">
          <polygon points="10,0 60,0 70,30 0,30" fill="#94A3B8" />
          <rect x="15" y="-30" width="40" height="28" rx="2" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="18" y="-27" width="34" height="22" rx="1" fill="#38BDF8" opacity="0.8" />
        </g>
        <g transform="translate(490, 355)">
          <polygon points="5,0 45,0 52,24 0,24" fill="#94A3B8" />
          <rect x="10" y="-24" width="30" height="22" rx="2" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1" />
          <rect x="12" y="-22" width="26" height="18" rx="1" fill="#818CF8" opacity="0.8" />
        </g>

        {/* Indoor Plant Accent (Left Foreground) */}
        <g transform="translate(70, 360)">
          <path d="M10 50 L35 50 L40 90 L5 90 Z" fill="#E2E8F0" />
          <ellipse cx="22" cy="50" rx="14" ry="4" fill="#78350F" />
          {/* Leaves */}
          <path d="M22 50 Q10 20 -10 15 Q5 35 22 50 Z" fill="#15803D" />
          <path d="M22 50 Q25 10 30 -5 Q35 25 22 50 Z" fill="#16A34A" />
          <path d="M22 50 Q45 25 65 30 Q45 45 22 50 Z" fill="#22C55E" />
        </g>

        {/* Ceiling Linear Pendant Lighting */}
        <line x1="220" y1="20" x2="580" y2="20" stroke="#F8FAFC" strokeWidth="3" />
        <line x1="260" y1="0" x2="260" y2="20" stroke="#64748B" strokeWidth="1" />
        <line x1="540" y1="0" x2="540" y2="20" stroke="#64748B" strokeWidth="1" />
      </svg>

      {/* Subtle Bottom Gradient Overlay & Badge */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-between">
        <span className="text-xs font-medium text-gray-300 backdrop-blur-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10">
          {label}
        </span>
        <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Engineering & Design Studio
        </span>
      </div>
    </div>
  );
}
