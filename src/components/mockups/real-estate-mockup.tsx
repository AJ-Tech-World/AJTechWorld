import React from "react";
import { Search, MapPin, Bed, Bath, Move, ArrowRight } from "lucide-react";

interface RealEstateMockupProps {
  compact?: boolean;
}

export function RealEstateMockup({ compact = false }: RealEstateMockupProps) {
  return (
    <div className="w-full h-full bg-[#0D131F] text-white overflow-hidden rounded-lg font-sans select-none flex flex-col">
      {/* Top Navigation Bar */}
      <div className="px-4 py-2.5 border-b border-gray-800/80 flex items-center justify-between text-xs bg-[#090D16]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center font-bold text-[9px] text-white">
            P
          </div>
          <span className="font-semibold tracking-tight text-gray-200">
            PrimeEstates
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-gray-400 text-[11px]">
          <span className="text-white font-medium">Buy</span>
          <span>Rent</span>
          <span>Sell</span>
          <span>Agents</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">
            Sign In
          </span>
        </div>
      </div>

      {/* Hero Banner with Modern Luxury Villa */}
      <div className="relative flex-1 min-h-[140px] sm:min-h-[180px] bg-gradient-to-b from-[#111A2E] to-[#0A0E17] p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
        {/* Architectural Villa Illustration / Background Graphic */}
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <svg
            viewBox="0 0 800 450"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="twilightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="60%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="windowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="800" height="450" fill="url(#twilightGrad)" />
            {/* Modern Villa Structure */}
            <path
              d="M120 180 L480 140 L700 170 L700 380 L120 380 Z"
              fill="#182234"
            />
            {/* Overhanging cantilever roof */}
            <path d="M90 170 L520 120 L730 160 L680 180 L120 190 Z" fill="#243048" />
            {/* Illuminated panoramic floor-to-ceiling glass windows */}
            <rect x="160" y="210" width="160" height="110" rx="4" fill="url(#windowGlow)" />
            <rect x="340" y="190" width="180" height="130" rx="4" fill="url(#windowGlow)" />
            <rect x="540" y="210" width="130" height="110" rx="4" fill="url(#windowGlow)" opacity="0.6" />
            {/* Window Mullions */}
            <line x1="240" y1="210" x2="240" y2="320" stroke="#0F172A" strokeWidth="4" />
            <line x1="430" y1="190" x2="430" y2="320" stroke="#0F172A" strokeWidth="4" />
            {/* Reflective Pool in front */}
            <polygon points="100,340 720,340 760,420 60,420" fill="#0B132B" opacity="0.9" />
            <ellipse cx="400" cy="370" rx="200" ry="25" fill="#38BDF8" opacity="0.15" />
            {/* Silhouette trees */}
            <path
              d="M710 160 Q730 110 750 160 Q760 190 730 220 Z M735 220 L735 260"
              fill="#0F172A"
            />
            <path
              d="M80 180 Q100 130 115 180 Q125 210 100 240 Z M100 240 L100 280"
              fill="#0F172A"
            />
          </svg>
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-sm">
          <div className="inline-block text-[10px] font-semibold text-blue-400 uppercase tracking-widest bg-blue-950/60 border border-blue-500/20 px-2 py-0.5 rounded-full mb-1">
            Exclusive Listings
          </div>
          <h3 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight">
            Find Your Perfect Property
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-300 mt-1 line-clamp-1">
            Discover curated luxury villas, penthouses and architectural homes.
          </p>
        </div>

        {/* Compact Search Bar */}
        <div className="relative z-10 mt-3 p-1.5 sm:p-2 bg-gray-900/90 backdrop-blur-md border border-gray-700/60 rounded-lg flex items-center gap-2 max-w-md shadow-xl">
          <div className="flex items-center gap-1.5 flex-1 min-w-0 px-2 text-gray-300 text-[10px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">Beverly Hills, California</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 border-l border-gray-700 px-2 text-gray-400 text-[10px]">
            <span>Villa / House</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs font-medium px-3 py-1.5 rounded flex items-center gap-1 shrink-0 transition-colors">
            <Search className="w-3 h-3" />
            <span className="hidden xs:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Property Cards Grid (Visible if not compact) */}
      {!compact && (
        <div className="p-3 bg-[#080C14] border-t border-gray-800/60 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px]">
          {/* Card 1 */}
          <div className="bg-[#121826] border border-gray-800 rounded p-2 flex flex-col justify-between">
            <div className="h-14 bg-gradient-to-tr from-slate-800 to-indigo-950 rounded mb-1.5 relative overflow-hidden flex items-end p-1.5">
              <span className="bg-black/60 backdrop-blur-xs text-[9px] font-bold text-white px-1 rounded">
                $1,450,000
              </span>
            </div>
            <div className="font-semibold text-gray-200 truncate">
              The Glass Pavilion
            </div>
            <div className="text-gray-400 text-[9px] flex items-center gap-2 mt-1">
              <span className="flex items-center gap-0.5">
                <Bed className="w-2.5 h-2.5" /> 4
              </span>
              <span className="flex items-center gap-0.5">
                <Bath className="w-2.5 h-2.5" /> 3
              </span>
              <span className="flex items-center gap-0.5">
                <Move className="w-2.5 h-2.5" /> 3,400 sqft
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121826] border border-gray-800 rounded p-2 flex flex-col justify-between">
            <div className="h-14 bg-gradient-to-tr from-slate-800 to-amber-950 rounded mb-1.5 relative overflow-hidden flex items-end p-1.5">
              <span className="bg-black/60 backdrop-blur-xs text-[9px] font-bold text-white px-1 rounded">
                $2,850,000
              </span>
            </div>
            <div className="font-semibold text-gray-200 truncate">
              Oceanview Horizon
            </div>
            <div className="text-gray-400 text-[9px] flex items-center gap-2 mt-1">
              <span className="flex items-center gap-0.5">
                <Bed className="w-2.5 h-2.5" /> 5
              </span>
              <span className="flex items-center gap-0.5">
                <Bath className="w-2.5 h-2.5" /> 4
              </span>
              <span className="flex items-center gap-0.5">
                <Move className="w-2.5 h-2.5" /> 4,800 sqft
              </span>
            </div>
          </div>

          {/* Card 3 (Hidden on very small mobile) */}
          <div className="hidden sm:flex bg-[#121826] border border-gray-800 rounded p-2 flex-col justify-between">
            <div className="h-14 bg-gradient-to-tr from-slate-800 to-blue-950 rounded mb-1.5 relative overflow-hidden flex items-end p-1.5">
              <span className="bg-black/60 backdrop-blur-xs text-[9px] font-bold text-white px-1 rounded">
                $980,000
              </span>
            </div>
            <div className="font-semibold text-gray-200 truncate">
              Modernist Loft
            </div>
            <div className="text-gray-400 text-[9px] flex items-center gap-2 mt-1">
              <span className="flex items-center gap-0.5">
                <Bed className="w-2.5 h-2.5" /> 2
              </span>
              <span className="flex items-center gap-0.5">
                <Bath className="w-2.5 h-2.5" /> 2
              </span>
              <span className="flex items-center gap-0.5">
                <Move className="w-2.5 h-2.5" /> 1,950 sqft
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
