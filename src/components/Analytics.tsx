import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sprout, Clock, Thermometer, Brain, RefreshCw } from 'lucide-react';
import { getPlantSuggestions } from '../services/aiService';
import { PlantSuggestion } from '../types';
import { cn } from '../lib/utils';

export default function Analytics() {
  const [suggestions, setSuggestions] = useState<PlantSuggestion[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSuggestions = async () => {
    setLoading(true);
    // In a real app, we'd pass actual sensor data here
    const currentConditions = "Temp: 24.5°C, Humidity: 64%, Light: 850lx, CO2: 412ppm";
    const data = await getPlantSuggestions(currentConditions);
    setSuggestions(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <div className="pl-24 md:pl-72 pt-28 pr-4 pb-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Sector One Header Card */}
        <section className="relative h-[400px] rounded-[32px] overflow-hidden shadow-2xl group border border-white/20">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600" 
            alt="Sector One Greenhouse" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-transparent to-black/10" />
          
          <div className="absolute top-8 left-8">
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-white font-bold tracking-widest text-sm uppercase">
                Facility A
              </div>
              <div className="px-4 py-2 bg-brand-mint text-brand-forest font-bold rounded-2xl shadow-lg text-sm">
                Live Monitoring
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-5xl font-display font-bold mb-2 tracking-tight">Sector One</h1>
            <p className="text-white/80 text-lg font-medium max-w-xl">
              Equipped with high-precision IoT nodes and climate control modules. Currently optimized for leafy greens and citrus.
            </p>
          </div>
        </section>

        {/* AI Recommendations Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-forest/10 rounded-xl flex items-center justify-center text-brand-forest shadow-sm border border-brand-forest/10">
                <Brain size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-800">AI Plant Recommendations</h2>
                <p className="text-sm text-slate-500 font-medium">Smart suggestions based on Sector One's atmospheric conditions</p>
              </div>
            </div>
            
            <button 
              onClick={fetchSuggestions}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-white text-brand-forest border border-brand-lightgray rounded-2xl font-bold shadow-bento hover:bg-brand-mint/10 transition-all disabled:opacity-50"
            >
              <RefreshCw size={18} className={cn(loading && "animate-spin")} />
              {loading ? "Analyzing..." : "Refresh Insights"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-64 bg-slate-100 rounded-[28px] animate-pulse border border-slate-200" />
              ))
            ) : (
              suggestions.map((suggestion, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={suggestion.id}
                  className="glass-card p-8 rounded-[28px] border border-brand-lightgray hover:border-brand-soft/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-brand-mint/20 rounded-2xl flex items-center justify-center text-brand-forest shadow-sm">
                        <Sprout size={32} />
                      </div>
                      <div className="px-3 py-1 bg-brand-forest/5 text-brand-forest rounded-full text-xs font-bold border border-brand-forest/10 flex items-center gap-1.5">
                        <Sparkles size={12} />
                        {suggestion.suitability}% Match
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{suggestion.plantName}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {suggestion.recommendation}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-brand-lightgray">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent-blue/40 rounded-xl text-slate-700">
                        <Thermometer size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Optimal Conditions</p>
                        <p className="text-xs font-bold text-slate-700">{suggestion.conditions}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-beige rounded-xl text-brand-forest">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Growth Duration</p>
                        <p className="text-xs font-bold text-slate-700">{suggestion.duration}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* Footer Note */}
        <div className="p-6 bg-brand-forest/[0.03] border border-brand-forest/10 rounded-[28px] flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-forest/10 rounded-full flex items-center justify-center text-brand-forest shrink-0">
            <Info size={20} />
          </div>
          <p className="text-sm text-slate-500 font-medium italic">
            Predictions are generated using AgriFlow AI. For critical farming decisions, please cross-reference with manual soil testing results and local agricultural guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );
}
