import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Loader2 className="animate-spin text-blue-500 mb-6" size={56} />
        <p className="text-slate-400 font-medium animate-pulse tracking-wider uppercase text-sm">Loading content...</p>
      </div>
    </div>
  );
}
