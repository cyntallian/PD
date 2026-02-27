import { LayoutDashboard, Shield, Settings, LogOut, Radio, Activity } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const DroneDashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="bg-cyan-500 p-2 rounded-lg">
            <Shield size={20} className="text-slate-950" />
          </div>
          <span className="font-black tracking-tighter text-white">PROJECT BRIAA</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <LayoutDashboard size={18} />
            <span className="text-sm font-bold">Command & Control</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 rounded-xl transition-all">
            <Radio size={18} />
            <span className="text-sm font-bold">Connection</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 rounded-xl transition-all">
            <Settings size={18} />
            <span className="text-sm font-bold">Settings</span>
          </button>
        </nav>

        {/* User & Logout Section */}
        <div className="p-4 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
              JD
            </div>
            <div>
              <p className="text-xs font-bold text-white">ENGR. BARRIOS</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Level 4 Operator</p>
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20 group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
         {/* ... (Video/Canvas Content here) ... */}
         <div className="flex-1 bg-black flex items-center justify-center relative">
            <div className="absolute top-6 left-6 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                <Activity size={14} className="text-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Live: DJI_MAVIC_3_ENT</span>
              </div>
            </div>
            {/* Live Feed Placeholder */}
            <p className="text-slate-700 font-mono text-xs tracking-widest animate-pulse">
              INITIALIZING SECURE VIDEO LINK...
            </p>
         </div>
      </main>
    </div>
  );
};

export default DroneDashboard;