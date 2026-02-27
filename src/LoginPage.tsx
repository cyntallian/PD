import React, { useState } from 'react';
import { Shield, Lock, User, ChevronRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials against your API here
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      
        {/* Decorative Grid Background - Now 100% Tailwind */}
        <div className="absolute inset-0 opacity-10 pointer-events-none 
            bg-[linear-gradient(#00f2ff_1px,transparent_1px),linear-gradient(90deg,#00f2ff_1px,transparent_1px)] 
            bg-[size:40px_40px]" 
        />

        <div className="w-full max-w-md relative group">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-cyan-500 p-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-4">
              <Shield size={32} className="text-slate-900" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white">PROJECT BRIAA</h1>
            <p className="text-slate-400 text-xs tracking-[0.2em] uppercase mt-1">Command & Control Login</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Operator ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="operator@sky-shield.io"
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-slate-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-slate-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              AUTHENTICATE <ChevronRight size={18} />
            </button>
          </form>

          {/* Footer Warning */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-[9px] text-slate-500 leading-relaxed uppercase tracking-widest">
              Authorized Personnel Only. <br />
              All access attempts are logged with AES-256 encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;