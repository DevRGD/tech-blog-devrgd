import { BlogPost } from '@/types';

export default function JsonLd({ blogs }: { blogs: BlogPost[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'TechBlog',
        url: 'https://tech-blog-devrgd.vercel.app',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://tech-blog-devrgd.vercel.app/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      ...blogs.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.photo_url,
        datePublished: post.created_at,
        dateModified: post.updated_at,
        author: {
          '@type': 'Person',
          name: 'Tech Author',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://tech-blog-devrgd.vercel.app/?id=${post.id}`,
        },
      })),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
