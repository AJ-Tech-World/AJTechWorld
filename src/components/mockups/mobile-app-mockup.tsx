import React from "react";
import {
  Activity,
  Heart,
  Flame,
  Clock,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export function MobileAppMockup() {
  return (
    <div className="w-full h-full bg-black text-white overflow-hidden rounded-[2.5rem] font-sans select-none border-4 border-gray-900 shadow-2xl relative">
      {/* Notch / Dynamic Island area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
      </div>

      {/* App Interface */}
      <div className="flex flex-col h-full bg-black">
        {/* Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-end">
          <div>
            <h5 className="text-[10px] text-gray-500 font-medium">
              October 17, 2026
            </h5>
            <h4 className="text-xl font-bold">Daily Activity</h4>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
        </div>

        {/* Circular Progress Area */}
        <div className="flex justify-center py-6 relative">
          <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
            {/* Outer Ring - Move */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#1e1e1e"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              stroke="#ef4444"
              strokeWidth="10"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              strokeLinecap="round"
            />
            {/* Middle Ring - Exercise */}
            <circle
              cx="50"
              cy="50"
              r="28"
              fill="transparent"
              stroke="#1e1e1e"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="28"
              fill="transparent"
              stroke="#22c55e"
              strokeWidth="10"
              strokeDasharray="175.8"
              strokeDashoffset="35.1"
              strokeLinecap="round"
            />
            {/* Inner Ring - Stand */}
            <circle
              cx="50"
              cy="50"
              r="16"
              fill="transparent"
              stroke="#1e1e1e"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="16"
              fill="transparent"
              stroke="#0ea5e9"
              strokeWidth="10"
              strokeDasharray="100.5"
              strokeDashoffset="20.1"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Flame className="w-5 h-5 text-red-500 mb-1" />
            <span className="text-2xl font-bold">75%</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-900/60 p-3 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-2 text-red-500 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Calories
              </span>
            </div>
            <div className="text-lg font-bold">542 kcal</div>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-2 text-emerald-500 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Heart
              </span>
            </div>
            <div className="text-lg font-bold">74 bpm</div>
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="px-6 flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h5 className="font-bold">Recent Workouts</h5>
            <span className="text-xs text-blue-500">See all</span>
          </div>
          <div className="space-y-3">
            {[
              {
                icon: <Flame className="w-4 h-4 text-orange-500" />,
                title: "HIIT Workout",
                dur: "45 min",
                cal: "320 kcal",
              },
              {
                icon: <Clock className="w-4 h-4 text-blue-500" />,
                title: "Strength Training",
                dur: "60 min",
                cal: "450 kcal",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="bg-gray-900/40 p-3 rounded-2xl border border-gray-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                    {w.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{w.title}</div>
                    <div className="text-[10px] text-gray-500">
                      {w.dur} • {w.cal}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div className="mt-auto bg-gray-900/80 backdrop-blur-xl border-t border-gray-800 px-8 py-6 flex justify-between rounded-t-3xl">
          <Activity className="w-6 h-6 text-blue-500" />
          <Clock className="w-6 h-6 text-gray-500" />
          <TrendingUp className="w-6 h-6 text-gray-500" />
          <div className="w-6 h-6 rounded-full bg-gray-700"></div>
        </div>
      </div>

      {/* Indicator line */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-800 rounded-full"></div>
    </div>
  );
}
