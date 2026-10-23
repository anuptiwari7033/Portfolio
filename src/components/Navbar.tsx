import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'];
      const targetPos = scrollPos + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= targetPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#FAFAF8]/90 dark:bg-[#0F0F0E]/90 backdrop-blur-xl border-b border-[#E7E3D8] dark:border-[#34332E] shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Anup Tiwari - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px] shadow-sm transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#FAFAF8] dark:bg-[#0F0F0E] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-[#C49A2C] dark:text-[#D4AF37] text-sm tracking-wider">
                  {personalData.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#171717] dark:text-[#F5F3EA] group-hover:text-[#C49A2C] dark:group-hover:text-[#D4AF37] transition-colors">
                {personalData.name}
              </span>
              <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] leading-none">
                {personalData.shortTitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/80 dark:bg-[#1D1D1A]/80 border border-[#E7E3D8] dark:border-[#34332E] rounded-full px-3 py-1.5 shadow-sm backdrop-blur-md relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 z-10 ${
                    isActive
                      ? 'text-[#171717] dark:text-[#171717] font-semibold'
                      : 'text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#F4E8C1] dark:bg-[#D4AF37] rounded-full -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="inline-flex items-center justify-center p-2 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] bg-transparent hover:bg-[#E7E3D8]/50 dark:hover:bg-[#34332E]/60 text-[#171717] dark:text-[#F5F3EA] transition-all cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                {isDark ? (
                  <Sun className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-[#66645F] hover:text-[#C49A2C] transition-transform duration-300 -rotate-12 hover:rotate-0" />
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer bg-[#C49A2C] hover:bg-[#CE8946] text-white dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717] shadow-xs hover:shadow-md hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#66645F]" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8]/98 dark:bg-[#0F0F0E]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'text-[#171717] dark:text-[#171717] bg-[#F4E8C1] dark:bg-[#D4AF37] font-semibold shadow-xs'
                        : 'text-[#66645F] dark:text-[#B7B4AA] hover:bg-[#E7E3D8]/50 dark:hover:bg-[#1D1D1A]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-[#E7E3D8] dark:border-[#34332E]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#C49A2C] dark:bg-[#D4AF37] text-white dark:text-[#171717] shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Preview Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
