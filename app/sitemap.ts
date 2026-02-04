import { MetadataRoute } from 'next';
import { getBlogs } from '@/libs/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const baseUrl = 'https://tech-blog-devrgd.vercel.app';

  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/?id=${blog.id}`,
    lastModified: new Date(blog.updated_at),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}
