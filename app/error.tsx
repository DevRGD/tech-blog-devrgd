'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-slate-950 overflow-hidden px-6 text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
          <AlertTriangle className="text-red-400" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          We encountered an error while loading this page. Please try refreshing or checking your connection.
        </p>
        <button
          onClick={() => reset()}
          className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
        >
          <RefreshCw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}
