import React from "react";
import { ShoppingBag, Search, Heart, Star, Plus } from "lucide-react";

export function EcommerceMockup() {
  const products = [
    {
      name: "Minimalist Hoodie",
      price: "$89.00",
      color: "Slate",
      bg: "bg-slate-200",
      rating: 4.8,
    },
    {
      name: "Oversized Tee",
      price: "$45.00",
      color: "Ivory",
      bg: "bg-stone-100",
      rating: 4.9,
    },
    {
      name: "Leather Jacket",
      price: "$220.00",
      color: "Black",
      bg: "bg-gray-300",
      rating: 5.0,
    },
    {
      name: "Modern Sneakers",
      price: "$135.00",
      color: "White",
      bg: "bg-zinc-100",
      rating: 4.7,
    },
  ];

  return (
    <div className="w-full h-full bg-white text-gray-900 overflow-hidden rounded-lg font-sans select-none flex flex-col">
      {/* Top Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
            <div className="w-1.5 h-1.5 border-t border-r border-white rotate-45 transform translate-x-[-0.5px]"></div>
          </div>
          <span className="font-bold tracking-tighter text-sm uppercase">
            Symmetry
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-5 text-[11px] font-medium text-gray-500">
          <span className="text-black">New</span>
          <span>Men</span>
          <span>Women</span>
          <span>Sale</span>
        </div>
        <div className="flex items-center gap-3">
          <Search className="w-4 h-4 text-gray-400" />
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1.5 bg-black text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-50/50">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold">Featured Apparel</h4>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer">
              <span className="text-[10px]">&larr;</span>
            </div>
            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer">
              <span className="text-[10px]">&rarr;</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col group">
              <div
                className={`aspect-[4/5] ${p.bg} rounded-xl mb-2 relative group overflow-hidden`}
              >
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-3 h-3 text-gray-600" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 py-1.5 bg-black text-white text-[9px] font-bold text-center rounded-lg translate-y-8 group-hover:translate-y-0 transition-transform">
                  ADD TO BAG
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold truncate">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-gray-500">{p.color}</div>
                </div>
                <div className="text-[11px] font-bold">{p.price}</div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-2 h-2 ${
                        idx < 4
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[8px] font-medium text-gray-400">
                  (42)
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA Row */}
        <div className="mt-6 bg-slate-900 rounded-xl p-4 flex items-center justify-between text-white overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
              Join the club
            </div>
            <div className="text-sm font-bold mb-1">15% Off Your First Order</div>
            <div className="flex gap-2">
              <input
                disabled
                className="bg-slate-800 border-none rounded-md px-2 py-1 text-[10px] w-24 placeholder:text-slate-500"
                placeholder="Email Address"
              />
              <button className="bg-white text-slate-950 text-[10px] font-bold px-3 py-1 rounded-md">
                Join
              </button>
            </div>
          </div>
          <div className="absolute right-[-10px] top-0 bottom-0 flex items-center opacity-10">
            <ShoppingBag className="w-20 h-20 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
