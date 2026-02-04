import { ApiResponse, BlogPost } from '@/types';

export async function getBlogs(): Promise<BlogPost[]> {
  const res = await fetch('https://sample-api-black.vercel.app/api/v1/blogs', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Failed to fetch blogs');

  const data: ApiResponse = await res.json();
  return data.blogs.slice(0, 10);
}
