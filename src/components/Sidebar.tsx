import React from 'react';
import { Home, BarChart3, Radio, Cpu, Camera, Bell, Settings, User, LogOut, ChevronRight, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'sensors', icon: Radio, label: 'Sensors' },
  { id: 'devices', icon: Cpu, label: 'Devices' },
  { id: 'camera', icon: Camera, label: 'Camera Feed' },
  { id: 'profile', icon: User, label: 'Profile' },
];

const secondaryItems = [
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  return (
    <aside className="floating-sidebar flex flex-col p-6 items-center">
      <div className="sidebar-icon active mb-10 text-brand-forest">
        <div className="w-10 h-10 bg-brand-forest rounded-xl flex items-center justify-center shadow-md">
          <Leaf className="text-white" size={20} />
        </div>
      </div>
      <span className="hidden md:block font-display font-bold text-lg text-brand-forest mb-4">Intergrated Farm</span>

      <nav className="flex-1 space-y-6 flex flex-col items-center w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-10 h-10 rounded-xl transition-all flex items-center justify-center group relative",
                isActive 
                  ? "bg-brand-forest text-white" 
                  : "text-slate-400 hover:text-brand-forest"
              )}
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-6 flex flex-col items-center">
        {secondaryItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="w-10 h-10 rounded-xl text-slate-400 hover:text-brand-forest transition-all flex items-center justify-center"
            >
              <Icon size={20} />
            </button>
          );
        })}

        <button 
          onClick={() => onNavigate('profile')}
          className={cn(
            "w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0 transition-all hover:ring-2 hover:ring-brand-forest",
            activeItem === 'profile' && "ring-2 ring-brand-forest"
          )}
        >
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
        </button>
      </div>
    </aside>
  );
}
