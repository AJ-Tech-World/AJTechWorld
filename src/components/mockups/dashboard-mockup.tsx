import React from "react";
import {
  BarChart3,
  Users,
  CreditCard,
  ArrowUpRight,
  Search,
  Bell,
  Settings,
  MoreVertical,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0B111D] text-gray-400 overflow-hidden rounded-lg font-sans select-none flex">
      {/* Sidebar Navigation */}
      <div className="w-12 sm:w-16 border-r border-gray-800/60 flex flex-col items-center py-4 gap-6 bg-[#090D16]">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-5 mt-4">
          <BarChart3 className="w-5 h-5 text-indigo-500" />
          <Users className="w-5 h-5" />
          <CreditCard className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
        <div className="mt-auto">
          <div className="w-8 h-8 rounded-full bg-slate-700"></div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-12 border-b border-gray-800/60 px-4 flex items-center justify-between bg-[#0B111D]">
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <Search className="w-4 h-4 text-gray-500" />
            <span className="text-[11px]">Search analytics...</span>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4" />
            <div className="h-6 w-px bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <div className="text-[10px] text-right hidden sm:block">
                <div className="text-gray-200 font-medium">Alex Johnson</div>
                <div className="text-[9px]">Administrator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 flex-1 overflow-auto bg-[#080C14]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-gray-100">Overview</h4>
            <div className="text-[10px] bg-gray-800 text-gray-300 px-2.5 py-1 rounded-lg border border-gray-700">
              Last 30 Days
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-[#121826] border border-gray-800 p-3 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div className="p-1.5 bg-indigo-500/10 text-indigo-500 rounded-lg">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-emerald-500 font-bold flex items-center">
                  +12.4% <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Total Revenue
              </div>
              <div className="text-lg font-bold text-gray-100">$124,500</div>
            </div>

            <div className="bg-[#121826] border border-gray-800 p-3 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div className="p-1.5 bg-blue-500/10 text-blue-500 rounded-lg">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-emerald-500 font-bold flex items-center">
                  +5.2% <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Active Users
              </div>
              <div className="text-lg font-bold text-gray-100">1,420</div>
            </div>

            <div className="bg-[#121826] border border-gray-800 p-3 rounded-xl hidden sm:block">
              <div className="flex justify-between items-start mb-2">
                <div className="p-1.5 bg-amber-500/10 text-amber-500 rounded-lg">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-emerald-500 font-bold flex items-center">
                  +2.1% <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>
              <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                Conv. Rate
              </div>
              <div className="text-lg font-bold text-gray-100">3.42%</div>
            </div>
          </div>

          {/* Charts & Tables Area */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {/* Chart */}
            <div className="sm:col-span-3 bg-[#121826] border border-gray-800 p-3 rounded-xl min-h-[120px] flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-200 uppercase tracking-widest">
                  Performance
                </span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-[9px]">Revenue</span>
                </div>
              </div>
              <div className="flex-1 mt-1 relative flex items-end justify-between px-1">
                <div className="w-4 bg-indigo-600/20 h-[30%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/30 h-[45%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/40 h-[40%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/50 h-[65%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/60 h-[55%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/70 h-[85%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/80 h-[75%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-600/90 h-[95%] rounded-t-sm"></div>
                <div className="w-4 bg-indigo-500 h-[80%] rounded-t-sm relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[8px] font-bold px-1 rounded">
                    $12.5k
                  </div>
                </div>
              </div>
            </div>

            {/* Side Column Table */}
            <div className="sm:col-span-2 bg-[#121826] border border-gray-800 p-3 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-gray-200 uppercase tracking-widest">
                  Revenue Source
                </span>
                <MoreVertical className="w-3 h-3 text-gray-500" />
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Subscriptions", val: "65%", color: "bg-indigo-500" },
                  { label: "Consulting", val: "22%", color: "bg-blue-500" },
                  { label: "Licensing", val: "13%", color: "bg-emerald-500" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[9px]">
                      <span>{item.label}</span>
                      <span className="text-gray-200">{item.val}</span>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: item.val }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
