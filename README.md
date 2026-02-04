
# TechBlog 🚀

A high-performance, SEO-optimized technical blog built with Next.js 16, TypeScript, and Tailwind CSS. Features advanced search, deep-linking, and WCAG AA accessibility.

**Live Demo:** [https://tech-blog-devrgd.vercel.app](https://tech-blog-devrgd.vercel.app)

## 🛠️ Tech Stack
* **Framework:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS & Lucide React
* **Language:** TypeScript
* **Deployment:** Vercel

## ⚡ Quick Start
```bash
git clone [https://github.com/yourusername/tech-blog-devrgd.git](https://github.com/yourusername/tech-blog-devrgd.git)
cd tech-blog-devrgd
npm install
npm run dev

```

## 🔍 Key Features & Implementation

* **Smart Search:** Real-time combined filtering (Title + Description + Content + Category) using `useMemo` for high performance.
* **Accessibility:** Full keyboard navigation (`Tab` + `Enter`), ARIA roles, and semantic HTML.

## 📈 SEO & Performance Strategy

* **Metadata:** Unique Title and Open Graph tags generated server-side for every article link.
* **Structured Data:** JSON-LD implemented for `WebSite` and `BlogPosting` schemas.
* **Optimization:**
* `next/image` with `sizes` prop for responsive loading.
* Dynamic imports for heavy components (`BlogFeed`, `ArticleModal`).
* Server-side data fetching to minimize client bundle size.



## 📊 Lighthouse Score

![Lighthouse-Score](/public/lighthouse-score.png)

