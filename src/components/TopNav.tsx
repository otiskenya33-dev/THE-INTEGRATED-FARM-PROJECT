import React from 'react';
import { Search, CloudSun, User, Bell, Wifi, ChevronDown } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="fixed top-4 left-24 right-4 h-16 px-6 bg-transparent flex items-center justify-between z-40">
      <div className="flex-1 max-w-sm">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-forest transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search greenhouse nodes..."
            className="w-full h-10 pl-10 pr-4 bg-white border border-brand-lightgray rounded-full focus:ring-1 focus:ring-brand-forest/20 transition-all outline-none text-xs font-medium shadow-bento"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-accent-blue/50 text-slate-700 rounded-full text-xs font-bold ring-1 ring-brand-lightgray">
          <span>Cloudy</span>
          <span>24°C</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-brand-beige/50 text-brand-forest rounded-full text-xs font-bold ring-1 ring-brand-lightgray">
          <Wifi size={14} className="animate-pulse" />
          <span>Live Connection: Strong</span>
        </div>
      </div>
    </header>
  );
}
