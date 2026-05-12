/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
import Login from './components/Login';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [view, setView] = useState<ViewType>('login');
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-brand-offwhite">
      <AnimatePresence mode="wait">
        {view === 'login' ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Login onLogin={() => setView('dashboard')} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex"
          >
            <Sidebar activeItem={activeTab} onNavigate={setActiveTab} />
            <div className="flex-1 relative">
              <TopNav />
              <main className="w-full">
                {activeTab === 'home' && <Dashboard />}
                {activeTab === 'analytics' && <Analytics />}
                {activeTab === 'profile' && <Profile />}
                {activeTab !== 'home' && activeTab !== 'analytics' && activeTab !== 'profile' && (
                  <div className="pl-24 md:pl-72 pt-32 pr-4 flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      {/* Using home as placeholder for other tabs */}
                      <div className="w-8 h-8 bg-slate-200 rounded-lg animate-pulse" />
                    </div>
                    <h2 className="text-xl font-display font-bold text-slate-600">Module Under Development</h2>
                    <p className="text-sm">We're currently refining the {activeTab} experience.</p>
                    <button 
                      onClick={() => setActiveTab('home')}
                      className="mt-6 px-6 py-2 bg-brand-forest text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-forest/20"
                    >
                      Return to Home
                    </button>
                  </div>
                )}
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
