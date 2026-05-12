import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Plus, 
  Trash2, 
  Maximize2, 
  Thermometer, 
  Droplets, 
  Wind, 
  CloudSun,
  Layout,
  Cpu,
  Monitor
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Profile() {
  const [fieldSize, setFieldSize] = useState(25);
  const [location, setLocation] = useState('Nairobi, Kenya');
  const [showWeather, setShowWeather] = useState(false);

  return (
    <div className="pl-24 md:pl-72 pt-28 pr-4 pb-8 min-h-screen space-y-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Farm Management</h1>
            <p className="text-slate-500 font-medium">Configure your hardware, fields, and operational parameters.</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-brand-forest/10 flex items-center justify-center text-brand-forest border border-brand-forest/20">
            <User size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Field Size Section */}
            <section className="glass-card p-8 rounded-[28px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-forest/5 rounded-xl text-brand-forest">
                    <Maximize2 size={24} />
                  </div>
                  <h2 className="text-xl font-display font-bold">Field Dimensions</h2>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-brand-offwhite rounded-2xl border border-brand-lightgray">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Area</p>
                    <div className="flex items-baseline gap-1">
                      <input 
                        type="number" 
                        value={fieldSize} 
                        onChange={(e) => setFieldSize(Number(e.target.value))}
                        className="bg-transparent text-3xl font-display font-bold text-slate-900 w-20 focus:outline-none"
                      />
                      <span className="text-sm font-bold text-slate-500">Acres</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-brand-mint text-brand-forest rounded-xl font-bold text-sm">
                    Verified
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic">This value scales all automated nutrient calculations and harvest projections.</p>
              </div>
            </section>

            {/* Sectors Section */}
            <section className="glass-card p-8 rounded-[28px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-forest/5 rounded-xl text-brand-forest">
                    <Layout size={24} />
                  </div>
                  <h2 className="text-xl font-display font-bold">Sectors & Crops</h2>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-forest text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-forest/20">
                  <Plus size={18} /> Add Sector
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'North Quad', product: 'Tomatoes', size: '120x80m' },
                  { name: 'East Greenhouse', product: 'Kale', size: '45x20m' }
                ].map((sector, i) => (
                  <div key={i} className="group p-6 bg-white border border-brand-lightgray rounded-[20px] hover:border-brand-soft/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-forest font-bold">
                        S{i+1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{sector.name}</h4>
                        <p className="text-xs text-slate-500">Growing: {sector.product} • {sector.size}</p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-alert-red transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Sensors Section */}
            <section className="glass-card p-8 rounded-[28px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-forest/5 rounded-xl text-brand-forest">
                    <Radio size={24} />
                  </div>
                  <h2 className="text-xl font-display font-bold">Sensor Network</h2>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-forest text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-forest/20">
                  <Plus size={18} /> Register Device
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Soil Multi-1', type: 'Moisture/pH', sn: 'SN-7729-A', sector: 'North Quad' },
                  { name: 'Ambient Hub 4', type: 'Temp/Humid', sn: 'SN-9901-B', sector: 'East Greenhouse' }
                ].map((sensor, i) => (
                  <div key={i} className="p-5 bg-white border border-brand-lightgray rounded-[20px] hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-brand-mint/10 text-brand-forest rounded-lg">
                        <Cpu size={18} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 font-mono">{sensor.sn}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1">{sensor.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{sensor.type}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-brand-lightgray/50">
                       <span className="text-[10px] font-bold uppercase text-slate-400">Located in {sensor.sector}</span>
                       <div className="w-2 h-2 rounded-full bg-brand-soft" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column - Location & Weather */}
          <div className="space-y-8">
            <section className="glass-card p-8 rounded-[28px] overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent-blue/40 rounded-xl text-slate-700">
                    <MapPin size={24} />
                  </div>
                  <h2 className="text-xl font-display font-bold">Farm Location</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Current Coordinates</label>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-brand-lightgray">
                      <span className="font-bold text-slate-900">{location}</span>
                      <button 
                        onClick={() => setLocation('Nairobi, Kenya')}
                        className="p-2 bg-white rounded-lg shadow-sm hover:text-brand-forest transition-colors"
                      >
                        <MapPin size={16} />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowWeather(!showWeather)}
                    className="w-full py-4 bg-brand-forest text-white rounded-2xl font-bold shadow-lg shadow-brand-forest/20 flex items-center justify-center gap-2 hover:bg-brand-forest group transition-all"
                  >
                    <CloudSun size={20} /> Ping Weather Forecast
                  </button>

                  {showWeather && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 pt-4 mt-4 border-t border-brand-lightgray"
                    >
                      <div className="flex items-center justify-between p-4 bg-accent-blue/10 rounded-2xl border border-accent-blue/30">
                        <div className="flex items-center gap-3">
                          <Thermometer className="text-slate-600" size={20} />
                          <div>
                            <p className="text-xs font-bold text-slate-400">Expected Temp</p>
                            <p className="text-lg font-bold text-slate-900">26.4°C</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Droplets className="text-slate-600" size={20} />
                          <div>
                            <p className="text-xs font-bold text-slate-400">Rain Prob.</p>
                            <p className="text-lg font-bold text-slate-900">12%</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 text-center font-medium italic">
                        Forecast synced via OpenWeather. Reliable for next 24 hours.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
              <MapPin className="absolute -right-8 -bottom-8 text-slate-100 w-32 h-32 rotate-12" />
            </section>

            <section className="glass-card p-8 rounded-[28px] bg-brand-forest text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20">
                  <Monitor size={24} />
                </div>
                <h2 className="text-xl font-display font-bold">Systems Health</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70 font-medium">Cloud Sync Status</span>
                  <span className="text-xs font-bold px-2 py-1 bg-brand-mint/20 rounded-lg text-brand-mint">HEALTHY</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70 font-medium">Gateway Latency</span>
                  <span className="text-xs font-bold px-2 py-1 bg-brand-mint/20 rounded-lg text-brand-mint">24ms</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <p className="text-xs text-white/50 leading-relaxed italic">
                     Your Intergrated Farm systems are operating within nominal parameters. No hardware faults detected in the last 72 hours.
                   </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Radio({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4"/><path d="M19.1 4.9a10 10 0 0 1 0 14.2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4"/><path d="M4.9 4.9a10 10 0 0 0 0 14.2"/></svg>
  );
}
