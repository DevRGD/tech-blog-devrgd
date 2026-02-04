'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-60 top-0 transition-all duration-300 transform-gpu ${
          scrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-black tracking-tighter z-70 transition-all duration-300 transform-gpu ${
              scrolled || isMenuOpen ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            TECH<span className="text-blue-600">BLOG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-base font-bold transition-colors duration-300 group ${
                    isActive
                      ? 'text-blue-600'
                      : scrolled
                        ? 'text-slate-600 hover:text-blue-600'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-70 flex flex-col justify-center items-center w-8 h-8 md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                scrolled || isMenuOpen ? 'bg-slate-900' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-px' : '-translate-y-1'}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                scrolled || isMenuOpen ? 'bg-slate-900' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-px' : 'translate-y-1'}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-55 bg-white transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                className={`text-4xl font-black tracking-tight transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${isActive ? 'text-blue-600' : 'text-slate-900'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
