import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grid.layoutit.com/img/grid-tile.svg')] opacity-[0.03] bg-size-[40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start text-left max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">
              The Future of Tech, Decoded
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-8 leading-tight">
            Insightful stories for the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
              Modern Developer.
            </span>
          </h1>

          <p className="text-md md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-12 font-medium">
            Deep dives into software engineering, architectural patterns, and the technologies shaping the next decade.
            Curated by experts, built for you.
          </p>

          <div className="flex flex-row items-center flex-wrap gap-3 sm:gap-8 w-full">
            <a
              href="#articles"
              className="group relative px-4 py-2 sm:px-8 sm:py-4 bg-white text-slate-950 rounded-full font-black text-xs sm:text-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                Explore Articles{' '}
                <ArrowRight size={14} className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative w-6 h-6 sm:w-10 sm:h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Reader"
                      fill
                      sizes="(max-width: 640px) 24px, 40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[9px] sm:text-sm font-bold text-slate-300 whitespace-nowrap uppercase tracking-wider">
                Join 50k+ readers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
