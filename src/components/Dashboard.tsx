import React from 'react';
import { 
  LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area 
} from 'recharts';
import { 
  Droplets, Thermometer, Wind, Sun, FlaskConical, Activity, 
  ArrowUpRight, ArrowDownRight, Battery, Signal, Clock, AlertTriangle, Info, CheckCircle2, ChevronRight,
  Settings, Cpu, BarChart3
} from 'lucide-react';
import { sensors as mockSensors, devices, alerts } from '../lib/data';
import { fetchThingSpeakData } from '../services/thingspeakService';
import { SensorData } from '../types';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Droplets, Thermometer, Wind, Sun, FlaskConical, Activity
};

export default function Dashboard() {
  const [sensors, setSensors] = React.useState<SensorData[]>(mockSensors);

  React.useEffect(() => {
    const updateData = async () => {
      const tsData = await fetchThingSpeakData();
      if (tsData.length > 0) {
        setSensors(current => current.map(sensor => {
          const match = tsData.find(d => d.id === sensor.id);
          if (match && match.value !== undefined) {
            return { ...sensor, value: match.value };
          }
          return sensor;
        }));
      }
    };

    updateData();
    const interval = setInterval(updateData, 15000); // Update every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pl-24 md:pl-72 pt-28 pr-4 pb-8 min-h-screen">
      <div className="bento-grid">
        {/* Top Feature Row */}
        <div className="col-span-12 lg:col-span-5 h-[320px] glass-card p-8 rounded-3xl flex flex-col justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <div className="inline-flex items-center px-2 py-1 bg-brand-beige border border-brand-forest/10 rounded-lg text-brand-forest text-[10px] font-bold uppercase tracking-wider mb-4">
              Primary Greenhouse A1
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Air Humidity</p>
            <div className="flex items-baseline gap-2">
              <h1 className="text-5xl font-display font-bold text-slate-900">64.2%</h1>
              <span className="text-sm font-semibold text-brand-soft">+2.4% from yesterday</span>
            </div>
          </div>
          
          <div className="h-24 w-full flex items-end gap-1.5 px-1">
            {[30, 45, 60, 55, 75, 90, 85, 95, 70, 80, 85, 100].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-brand-mint/40 rounded-t-lg transition-all duration-500 group-hover:bg-brand-soft/60" 
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          
          <Droplets className="absolute -right-8 -top-8 text-brand-forest/5 w-48 h-48 -rotate-12" />
        </div>

        <div className="col-span-12 lg:col-span-7 h-[320px] grid grid-cols-2 md:grid-cols-3 gap-4">
          {sensors.slice(0, 6).map((sensor) => {
            const Icon = iconMap[sensor.icon];
            return (
              <div key={sensor.id} className="glass-card p-5 rounded-[20px] flex flex-col justify-center border border-brand-lightgray hover:border-brand-soft/30 transition-all cursor-pointer">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{sensor.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">{sensor.value}</span>
                  <span className="text-xs text-slate-400">{sensor.unit}</span>
                </div>
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full mt-3",
                  sensor.trend === 'up' ? "bg-brand-soft" : sensor.trend === 'down' ? "bg-alert-red" : "bg-warning-amber"
                )} />
              </div>
            );
          })}
        </div>

        {/* Main Monitoring Row */}
        <div className="col-span-12 lg:col-span-8 h-[500px] glass-card rounded-[28px] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600" 
            alt="Field Monitoring Digital Twin" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-black/20" />
          
          {/* Holographic Highlight Zone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/3 h-1/3 border-2 border-brand-soft/50 bg-brand-soft/10 backdrop-blur-[2px] rounded-2xl relative shadow-[0_0_50px_rgba(45,212,191,0.3)] animate-pulse">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-soft -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-soft translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-soft -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-soft translate-x-1 translate-y-1" />
              
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="px-5 py-2 bg-brand-forest text-white rounded-xl shadow-2xl font-display font-bold text-sm border border-white/20 backdrop-blur-md">
                  Your Farm
                </div>
                <div className="w-px h-4 bg-brand-soft shadow-lg" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 text-white z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-mint/90">Precision Plot A1</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-1 tracking-tight">Digital Twin Interface</h2>
            <p className="text-white/70 text-sm font-medium">Real-time geospatial mapping & sensor fusion</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="glass-card p-6 rounded-[24px] bg-alert-red/[0.03] border-alert-red/10 flex flex-col gap-4">
            <p className="text-xs font-bold text-alert-red uppercase tracking-widest">Critical Alerts</p>
            {alerts.filter(a => a.type === 'alert' || a.type === 'warning').map(alert => (
              <div key={alert.id} className="flex items-center gap-3">
                <div className={cn("w-2 h-2 rounded-full", alert.type === 'alert' ? "bg-alert-red" : "bg-warning-amber")} />
                <p className="text-sm font-medium text-slate-700 truncate">{alert.title}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-[28px] flex-1 flex flex-col">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-brand-lightgray pb-4">IoT Fleet Status</p>
            <div className="space-y-4 flex-1">
              {devices.map(device => (
                <div key={device.id} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{device.name}</span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase",
                    device.status === 'online' ? "text-brand-soft" : "text-slate-400"
                  )}>{device.status === 'online' ? 'Online' : 'Standby'}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-brand-lightgray">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Today's Tasks</p>
              <div className="p-4 bg-brand-offwhite rounded-2xl border border-brand-lightgray border-dashed">
                <p className="text-xs font-bold text-brand-forest">Refill Nutrient Solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
