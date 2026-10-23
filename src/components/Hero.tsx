import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, FileText, Code2, ShieldCheck, Terminal, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-[#D4AF37]/15 dark:from-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 dark:bg-[#1D1D1A]/90 border border-[#E7E3D8] dark:border-[#34332E] shadow-2xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-xs font-mono font-medium text-[#66645F] dark:text-[#B7B4AA] tracking-wide uppercase">
                {personalData.primaryTitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA] leading-[1.1] mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#C49A2C] via-[#CE8946] to-[#D4AF37] bg-clip-text text-transparent">
                {personalData.name}
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#44423E] dark:text-[#E2DFD2] leading-relaxed mb-4">
              Building scalable distributed web applications, real-time architectures, and adaptive multi-agent AI systems.
            </p>

            <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] leading-relaxed mb-8 max-w-2xl">
              Computer Science undergraduate at <strong className="text-[#171717] dark:text-[#F5F3EA]">KIET Group of Institutions</strong>. Passionate about LangGraph multi-agent workflows, full-stack microservices, and solving challenging algorithmic problems in C++.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer bg-[#171717] hover:bg-[#2C2B27] text-white dark:bg-[#F5F3EA] dark:hover:bg-white dark:text-[#171717] shadow-sm hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer bg-[#C49A2C] hover:bg-[#CE8946] text-white dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717] shadow-xs hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-[#171717] dark:text-[#F5F3EA] hover:bg-[#E7E3D8]/40 dark:hover:bg-[#34332E]/40"
              >
                <Mail className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 pt-2 border-t border-[#E7E3D8] dark:border-[#34332E] w-full max-w-xl">
              <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] mr-2">Profiles:</span>
              
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] hover:bg-[#E7E3D8]/40 dark:hover:bg-[#34332E]/40 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.codeforces}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] hover:bg-[#E7E3D8]/40 dark:hover:bg-[#34332E]/40 transition-all"
                title="Codeforces"
              >
                <Code2 className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                <span>Codeforces</span>
              </a>

              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] hover:bg-[#E7E3D8]/40 dark:hover:bg-[#34332E]/40 transition-all"
                title="LeetCode"
              >
                <Terminal className="w-3.5 h-3.5 text-[#CE8946]" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] hover:bg-[#E7E3D8]/40 dark:hover:bg-[#34332E]/40 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Mesh & Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />

            {/* Floating Mini Badges */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-[#FFFFFF]/80 dark:bg-[#1A1916]/80 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-md shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#171717] dark:text-[#F5F3EA]">300+ Solved</div>
                  <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">LeetCode DSA (C++)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFFFF]/80 dark:bg-[#1A1916]/80 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-md shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#171717] dark:text-[#F5F3EA]">AWS & Palo Alto</div>
                  <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">Industry Certified</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
