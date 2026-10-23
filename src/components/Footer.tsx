import React from 'react';
import { ArrowUp, Mail, Code2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#0D0D0C] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7E3D8] dark:border-[#34332E]">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px]">
              <div className="w-full h-full bg-[#FAFAF8] dark:bg-[#0F0F0E] rounded-[9px] flex items-center justify-center">
                <span className="font-mono font-bold text-[#C49A2C] dark:text-[#D4AF37] text-xs">
                  {personalData.initials}
                </span>
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-[#171717] dark:text-[#F5F3EA]">
                {personalData.name}
              </div>
              <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">
                {personalData.primaryTitle}
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.codeforces}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all"
              title="Codeforces"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all"
              title="LeetCode"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#66645F] dark:text-[#A7A499] gap-4">
          <div>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div>
            Engineered with React • Tailwind CSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};
