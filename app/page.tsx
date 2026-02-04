import dynamic from 'next/dynamic';
import Image from 'next/image';
import { getBlogs } from '@/libs/api';
import { BlogPost } from '@/types';
import { ArrowRight, Sparkles, Zap, ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import BlogSkeleton from '@/components/blog/BlogSkeleton';

const BlogFeed = dynamic(() => import('@/components/blog/BlogFeed'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <BlogSkeleton key={i} />
      ))}
    </div>
  ),
});

const JsonLd = dynamic(() => import('@/components/seo/JsonLd'));

export default async function Home() {
  let initialBlogs: BlogPost[] = [];
  let errorOccurred = false;

  try {
    initialBlogs = await getBlogs();
  } catch (error) {
    console.error('Initial load error:', error);
    errorOccurred = true;
  }

  return (
    <>
      <main className="relative">
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
                Deep dives into software engineering, architectural patterns, and the technologies shaping the next
                decade. Curated by experts, built for you.
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/5 w-full">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Zap size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Rapid Updates</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Verified Content</span>
                </div>
                <div className="hidden md:flex items-center gap-3 justify-end">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">100+ Deep Dives</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="articles" className="container mx-auto px-6 -mt-20 relative z-20 pb-24">
          {errorOccurred ? (
            <div className="col-span-full py-20 text-center bg-white rounded-md border border-red-100 border-dashed shadow-xl">
              <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="text-red-400" size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Unable to load articles</h3>
              <p className="text-slate-500">
                We couldn&apos;t connect to the content server. Please try refreshing the page.
              </p>
            </div>
          ) : (
            <BlogFeed initialData={initialBlogs} />
          )}
        </div>
      </main>
      <JsonLd blogs={initialBlogs} />
    </>
  );
}
