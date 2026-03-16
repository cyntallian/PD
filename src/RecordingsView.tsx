import { useState } from 'react';
import { 
  PlayCircle, Download, Trash2, Search, 
  ChevronDown, MoreVertical, LayoutGrid, List, FileText, Video, Clock 
} from 'lucide-react';

const RecordingsView = () => {
  const [viewType, setViewType] = useState<'Card' | 'List' | 'Summary'>('Card');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSort, setActiveSort] = useState('Newest First');
  const [searchQuery, setSearchQuery] = useState('');

  const mockRecordings = [
    { id: 1, title: "SECTOR_ALPHA_SCAN", date: "2026-03-15", displayDate: "MAR 15, 2026", duration: "12:45", seconds: 765, size: "1.2GB" },
    { id: 2, title: "PERIMETER_SURVEILLANCE", date: "2026-03-14", displayDate: "MAR 14, 2026", duration: "08:20", seconds: 500, size: "840MB" },
    { id: 3, title: "THERMAL_INSPECTION_UNIT_04", date: "2026-03-16", displayDate: "MAR 16, 2026", duration: "15:10", seconds: 910, size: "2.1GB" },
    { id: 4, title: "NIGHT_PATROL_BETA", date: "2026-03-13", displayDate: "MAR 13, 2026", duration: "45:00", seconds: 2700, size: "5.4GB" },
  ];

  // Helper to normalize sizes to Megabytes for accurate sorting (Fixes GB vs MB error)
  const getInMB = (sizeStr: string) => {
    const value = parseFloat(sizeStr);
    if (sizeStr.includes('GB')) return value * 1024;
    return value;
  };

  // Final processed list: Filtered by search then Sorted by selection
  const processedRecordings = [...mockRecordings]
    .filter(rec => rec.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (activeSort === 'Alphabetical') return a.title.localeCompare(b.title);
      if (activeSort === 'Duration') return b.seconds - a.seconds;
      if (activeSort === 'File Size') return getInMB(b.size) - getInMB(a.size);
      if (activeSort === 'Newest First') return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  return (
    <div className="p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="border-b border-white/5 pb-6">
        <h2 className="text-3xl font-black tracking-tighter text-white italic uppercase">Mission Archive</h2>
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-bold">Secure Encrypted Data Logs</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 items-center w-full">
        
        {/* Filter Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-slate-900/80 border border-white/10 text-white px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest hover:border-cyan-500 transition-all uppercase">
            {activeFilter} <ChevronDown size={14} className="text-cyan-500" />
          </button>
          <div className="absolute left-0 top-full pt-2 z-50 hidden group-hover:block w-48">
            <div className="bg-slate-950 border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in zoom-in-95 duration-200">
              {['All', 'Starred'].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className="w-full text-left px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-wider">
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="SEARCH RECORDS..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-[10px] font-bold tracking-widest text-white focus:outline-none focus:border-cyan-500/50 transition-all uppercase placeholder:text-slate-700"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-slate-900/80 border border-white/10 text-white px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest hover:border-cyan-500 transition-all uppercase">
            SORT: {activeSort} <ChevronDown size={14} className="text-cyan-500" />
          </button>
          <div className="absolute right-0 top-full pt-2 z-50 hidden group-hover:block w-56">
            <div className="bg-slate-950 border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in zoom-in-95 duration-200">
              {['Newest First', 'Alphabetical', 'Duration', 'File Size'].map((s) => (
                <button 
                  key={s} 
                  onClick={() => setActiveSort(s)} 
                  className={`w-full text-left px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors ${activeSort === s ? 'text-cyan-400 bg-white/5' : 'text-slate-400 hover:text-cyan-400 hover:bg-white/5'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View Type Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest border border-white/20 min-w-[120px] justify-between group-hover:border-cyan-500 transition-all uppercase">
            {viewType} <ChevronDown size={14} className="text-cyan-500" />
          </button>
          <div className="absolute right-0 top-full pt-2 z-50 hidden group-hover:block w-40">
            <div className="bg-slate-950 border border-white/10 rounded-xl shadow-2xl py-1 animate-in fade-in zoom-in-95 duration-200">
              {[
                { id: 'Card', icon: <LayoutGrid size={12} /> },
                { id: 'List', icon: <List size={12} /> },
                { id: 'Summary', icon: <FileText size={12} /> }
              ].map((v) => (
                <button 
                  key={v.id} 
                  onClick={() => setViewType(v.id as any)} 
                  className={`w-full text-left px-4 py-2.5 text-[10px] font-bold flex items-center gap-3 uppercase tracking-widest transition-colors ${viewType === v.id ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {v.icon} {v.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {viewType === 'Card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processedRecordings.map((rec) => (
            <div key={rec.id} className="group bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
              <div className="relative h-44 bg-slate-800 flex items-center justify-center overflow-hidden">
                <Video size={48} className="text-slate-700 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <PlayCircle size={40} className="text-cyan-400" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-black text-cyan-400 border border-white/10">
                  {rec.duration}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xs font-black text-white truncate uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{rec.title}</h3>
                <div className="flex items-center justify-between text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Clock size={10} className="text-cyan-500" /> {rec.displayDate}
                  </div>
                  <span className="text-slate-600 italic">{rec.size}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <button title="Download Data" className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-1 transition-colors uppercase">
                    <Download size={12}/> Save
                  </button>
                  <button title="Purge Record" className="text-[10px] font-bold text-rose-500 hover:bg-rose-500/10 px-2 py-1 rounded transition-colors uppercase">
                    <Trash2 size={12} className="inline mr-1" /> Purge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden">
          {processedRecordings.map((rec) => (
            <div key={rec.id} className="flex items-center gap-6 p-5 hover:bg-white/5 border-b border-white/5 last:border-0 transition-all group">
              <div className="relative w-40 h-24 bg-slate-950/50 rounded-xl flex items-center justify-center border border-white/5 overflow-hidden flex-shrink-0">
                <Video size={36} className="text-slate-800" />
                <div className="absolute bottom-1 right-1 bg-black/80 text-[8px] text-cyan-400 px-1.5 py-0.5 rounded font-black border border-white/10">
                  {rec.duration}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-black text-white truncate uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {rec.title}
                </h3>
                <div className="flex gap-4 mt-1">
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{rec.displayDate}</p>
                   <p className="text-[10px] text-slate-700 font-bold uppercase tracking-wider italic">{rec.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                <button title="Download" className="p-2 text-slate-500 hover:text-cyan-400 transition-colors">
                  <Download size={18} />
                </button>
                <button title="Options" className="p-2 text-slate-500 hover:text-white transition-colors">
                  <MoreVertical size={18} />
                </button>
                <button title="Purge" className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordingsView;