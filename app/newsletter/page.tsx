import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Mail className="text-blue-400" size={16} />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Stay Ahead</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Weekly engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                Insights Inbox.
              </span>
            </h1>
            <p className="text-slate-400 text-lg">
              Join 50,000+ developers. Get curated architectural patterns and deep dives delivered every Tuesday.
            </p>
          </div>

          <form className="space-y-4 max-w-md mx-auto">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Subscribe Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-green-500" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-green-500" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-green-500" />
              <span>Weekly updates</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
