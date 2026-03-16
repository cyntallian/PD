import { useState } from 'react';
import { 
  LayoutDashboard, 
  Shield, 
  Settings, 
  LogOut, 
  Activity, 
  FileVideo 
} from 'lucide-react';
import RecordingsView from './RecordingsView';

interface DashboardProps {
  onLogout: () => void;
}

const DroneDashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<'live' | 'recordings'>('live');

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      
      {/* Sidebar - Mission Control Style */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col z-20">
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="bg-cyan-500 p-2 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Shield size={20} className="text-slate-950" />
          </div>
          <span className="font-black tracking-tighter text-white text-lg uppercase">Project Briaa</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('live')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border ${
              activeTab === 'live' 
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]' 
              : 'text-slate-400 hover:bg-white/5 border-transparent'
            }`}
          >
            <LayoutDashboard size={18} />
            <span className="text-sm font-bold uppercase tracking-tight">Command & Control</span>
          </button>

          <button 
            onClick={() => setActiveTab('recordings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border ${
              activeTab === 'recordings' 
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]' 
              : 'text-slate-400 hover:bg-white/5 border-transparent'
            }`}
          >
            <FileVideo size={18} />
            <span className="text-sm font-bold uppercase tracking-tight">Mission Archive</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 rounded-xl transition-all">
            <Settings size={18} />
            <span className="text-sm font-bold uppercase tracking-tight">System Settings</span>
          </button>
        </nav>

        {/* Operator Profile Section */}
        <div className="p-4 border-t border-white/5 space-y-4 bg-slate-950/30">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
              EB
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase">Engr. Barrios</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Level 4 Operator</p>
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20 group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-tight">Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-y-auto bg-slate-950">
        {activeTab === 'live' ? (
          /* LIVE FEED VIEW */
          <div className="flex-1 bg-black flex items-center justify-center relative group">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 opacity-20" />
            
            <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Activity size={14} className="text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest uppercase text-white">Signal Strength: 98%</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto" />
              <p className="text-cyan-500/50 font-mono text-[10px] tracking-[0.4em] uppercase">
                Establishing Secure Link...
              </p>
            </div>
          </div>
        ) : (
          /* DYNAMIC MISSION ARCHIVE VIEW */
          <RecordingsView />
        )}
      </main>
    </div>
  );
};

export default DroneDashboard;