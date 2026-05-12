import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, Github, Mail, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-forest rounded-2xl flex items-center justify-center shadow-xl shadow-brand-forest/20">
              <Leaf className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-forest">AgriFlow</h2>
              <p className="text-sm text-slate-400 font-medium">Smart Farming Solutions</p>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Welcome back</h1>
            <p className="text-slate-500">Sign in to your farm management command center.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-forest transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-forest/20 outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-forest transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-forest/20 outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2 ml-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-brand-forest focus:ring-brand-forest" />
                <span className="text-sm text-slate-500 font-medium">Remember me</span>
              </label>
              <button type="button" className="text-sm font-bold text-brand-forest hover:underline">Forgot password?</button>
            </div>

            <button 
              type="submit"
              className="w-full h-14 bg-brand-forest text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-forest group transition-all shadow-xl shadow-brand-forest/30 active:scale-95"
            >
              Sign in to Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 border border-slate-200 rounded-2xl flex items-center justify-center gap-2 font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" /> Google
            </button>
            <button className="h-14 border border-slate-200 rounded-2xl flex items-center justify-center gap-2 font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Github size={20} /> GitHub
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 font-medium pt-4">
            Don't have an account? <button className="text-brand-forest font-bold hover:underline">Get a free trial</button>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-brand-forest">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-mint rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-soft rounded-full blur-[100px] animate-pulse" />
        </div>
        
        <div className="h-full flex flex-col items-center justify-center p-16 text-white text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-brand-mint rounded-full animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest">Precision Ag 2.0</span>
            </div>
            <h3 className="text-6xl font-display font-bold mb-6 tracking-tight leading-tight">
              Cultivating the <br /> 
              <span className="text-brand-mint">Next Generation</span>
            </h3>
            <p className="text-white/70 text-xl max-w-lg mx-auto font-medium">
              AgriFlow's IoT platform helps thousands of farmers optimize their yields and protect the environment.
            </p>
          </div>

          {/* Minimal Mockup */}
          <div className="w-full max-w-xl bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl overflow-hidden group">
             <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-50" />
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-50" />
                </div>
                <div className="h-4 w-24 bg-white/20 rounded-full" />
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/10 rounded-2xl" />
                <div className="h-24 bg-white/10 rounded-2xl" />
                <div className="col-span-2 h-48 bg-white/20 rounded-2xl flex items-end p-4">
                   <div className="flex gap-2 w-full h-full items-end">
                      <div className="flex-1 bg-brand-mint/40 rounded-t-lg h-[40%] group-hover:h-[60%] transition-all duration-700" />
                      <div className="flex-1 bg-brand-mint/40 rounded-t-lg h-[60%] group-hover:h-[80%] transition-all duration-700 delay-75" />
                      <div className="flex-1 bg-brand-mint/60 rounded-t-lg h-[90%] group-hover:h-[70%] transition-all duration-700 delay-150" />
                      <div className="flex-1 bg-brand-mint/40 rounded-t-lg h-[50%] group-hover:h-[90%] transition-all duration-700 delay-225" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 border-[40px] border-brand-mint/10 rounded-full" />
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-soft/20 rounded-3xl rotate-45" />
      </div>
    </div>
  );
}
