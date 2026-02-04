'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { BlogPost } from '@/types';
import ArticleModal from './ArticleModal';
import BlogCard from './BlogCard';

interface BlogFeedProps {
  initialData: BlogPost[];
  initialPostId?: string;
}

export default function BlogFeed({ initialData, initialPostId }: BlogFeedProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [prevInitialPostId, setPrevInitialPostId] = useState(initialPostId);

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(() => {
    if (initialPostId) {
      return initialData.find((p) => p.id.toString() === initialPostId) || null;
    }
    return null;
  });

  if (initialPostId !== prevInitialPostId) {
    setPrevInitialPostId(initialPostId);
    const post = initialData.find((p) => p.id.toString() === initialPostId) || null;
    setSelectedArticle(post);
  }

  const categories = useMemo(() => {
    const unique = new Set(initialData.map((post) => post.category));
    return ['All', ...Array.from(unique)];
  }, [initialData]);

  const filteredPosts = useMemo(() => {
    return initialData.filter((post) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.content_text.toLowerCase().includes(searchLower);

      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialData, search, activeCategory]);

  return (
    <section className="space-y-10 mt-24">
      {initialData.length > 0 && (
        <div className="glass-panel p-4 rounded-md sticky top-16 z-30 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 border border-slate-200 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              aria-label="Search articles"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold whitespace-nowrap transition-all duration-300 capitalize ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={() => setSelectedArticle(post)} />
        ))}
      </div>

      {initialData.length === 0 && (
        <div className="col-span-full py-20 text-center bg-white rounded-md border border-slate-100 border-dashed shadow-xl">
          <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="text-slate-300" size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
          <p className="text-slate-500">Check back later for new updates.</p>
        </div>
      )}

      {initialData.length > 0 && filteredPosts.length === 0 && (
        <div className="col-span-full py-20 text-center bg-white rounded-md border border-slate-100 border-dashed shadow-xl">
          <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="text-slate-300" size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
          <p className="text-slate-500">Try adjusting your search terms or category filter.</p>
        </div>
      )}

      {initialData.length > 0 && (
        <div className="text-center pb-8">
          <p className="text-sm text-slate-400 font-medium">
            Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}

      {selectedArticle && <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </section>
  );
}
