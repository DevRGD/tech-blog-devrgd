import { Sparkles, Code, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 py-20">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">About the Blog</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Pushing the boundaries of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
              Modern Engineering.
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            We are a collective of developers and writers dedicated to making complex systems easy to understand through
            deep-dive articles and tutorials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
              <p className="text-slate-400 text-sm">Advocating for maintainable, scalable software practices.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Globe className="text-indigo-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm">Connecting developers from every corner of the world.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Cpu className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Latest Tech</h3>
              <p className="text-slate-400 text-sm">Staying ahead of the curve with bleeding-edge analysis.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
