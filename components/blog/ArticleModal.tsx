'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Calendar, User, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

interface ArticleModalProps {
  article: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-100 flex justify-center bg-slate-900/80 backdrop-blur-sm pt-20 pb-6 px-4 md:px-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-full max-w-4xl h-fit max-h-full rounded-md overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300">
        <div className="relative h-56 md:h-72 w-full shrink-0">
          <Image src={article.photo_url} alt={article.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">{article.title}</h2>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 mb-8 pb-8 border-b border-slate-100 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>Tech Author</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>{format(new Date(article.created_at), 'MMMM dd, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md">
              <Tag className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase">{article.category}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>5 min read</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-900 font-semibold mb-10 leading-relaxed italic border-l-4 border-blue-600 pl-4 bg-blue-50/30 py-4">
              {article.description}
            </p>
            <div className="flex flex-col gap-8">
              {article.content_text
                .split('\n')
                .filter((p) => p.trim() !== '')
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-700 text-base md:text-lg leading-[1.8] first-letter:text-2xl first-letter:font-serif"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
