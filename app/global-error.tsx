'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Global critical error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100 font-sans p-6 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
        </div>

        <div className="relative z-10 max-w-lg w-full bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl text-center border border-white/10">
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Critical Error</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            A critical system error occurred. We apologize for the inconvenience. Please try reloading the application.
          </p>
          <button
            onClick={() => reset()}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
