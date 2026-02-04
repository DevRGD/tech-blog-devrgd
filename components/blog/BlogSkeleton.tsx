export default function BlogSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-video bg-slate-200" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-slate-200 rounded w-1/4" />
        <div className="h-6 bg-slate-200 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded" />
          <div className="h-4 bg-slate-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}
