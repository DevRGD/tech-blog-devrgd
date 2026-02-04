import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Authors', href: '/authors' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white">
              TECH<span className="text-blue-500">BLOG</span>
            </Link>
            <p className="text-balance leading-relaxed max-w-sm">
              The leading source for deep-dives into modern software engineering, distributed systems, and the future of
              the web.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-md bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm hover:text-blue-500 transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Subscribe to our newsletter</h4>
            <p className="text-sm">Get the latest articles and insights delivered to your inbox every week.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-md py-3 px-6 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-md transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {currentYear} TechBlog Media Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
