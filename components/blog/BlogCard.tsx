import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  type Category = 'technology' | 'design' | 'lifestyle';

  const categoryGradientMap: Record<Category, string> = {
    technology: 'from-blue-600 to-indigo-600',
    design: 'from-purple-600 to-pink-600',
    lifestyle: 'from-emerald-500 to-teal-600',
  };

  const gradientClass = categoryGradientMap[post.category as Category] ?? 'from-orange-500 to-rose-500';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(post);
    }
  };

  return (
    <article
      onClick={() => onClick(post)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="group bg-white rounded-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.photo_url}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        <span
          className={`absolute px-3 py-1 rounded-tl-md rounded-br-md text-[10px] font-bold uppercase tracking-wider text-white bg-linear-to-r ${gradientClass} shadow-lg shadow-black/20 z-10`}
        >
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 mb-3 text-xs font-medium text-slate-500">
          <time dateTime={post.created_at}>{format(new Date(post.created_at), 'MMM dd, yyyy')}</time>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-6">{post.description}</p>

        <div className="mt-auto flex items-center text-blue-600 font-bold text-sm">
          <span>Read Article</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
