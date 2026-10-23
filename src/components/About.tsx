import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2, BookOpen, Sparkles, Building2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            {personalData.about.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <p className="text-base sm:text-lg text-[#44423E] dark:text-[#DCD9CE] leading-relaxed">
              {personalData.about.paragraph}
            </p>

            <div className="p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#1A1916]/70 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-sm space-y-3.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold">
                Core Engineering Strengths
              </h3>
              <ul className="space-y-3">
                {personalData.about.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2C2B27] dark:text-[#ECEAE1] leading-normal font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FFFFFF]/50 dark:bg-[#161513]/50 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                <div>
                  <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">Location</div>
                  <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F3EA]">
                    {personalData.location}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-[#E7E3D8] dark:border-[#34332E] bg-[#FFFFFF]/50 dark:bg-[#161513]/50 flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                <div>
                  <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">Target Roles</div>
                  <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F3EA]">
                    Full-Stack & AI Systems
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF8] dark:from-[#1A1916] dark:to-[#121210] border border-[#E7E3D8] dark:border-[#34332E] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#C49A2C]/15 dark:from-[#D4AF37]/15 to-transparent blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E7E3D8]/60 dark:bg-[#34332E]/60 text-[#171717] dark:text-[#F5F3EA]">
                  {personalData.education.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F3EA] mb-1">
                {personalData.education.degree}
              </h3>

              <div className="text-sm font-medium text-[#C49A2C] dark:text-[#D4AF37] mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>{personalData.education.institution}</span>
              </div>

              <p className="text-xs text-[#66645F] dark:text-[#B7B4AA] mb-6">
                {personalData.education.location} • Expected Graduation: 2027
              </p>

              <div className="pt-5 border-t border-[#E7E3D8] dark:border-[#34332E]">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>Key Technical Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.education.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#E7E3D8]/40 dark:bg-[#262520]/70 border border-[#E7E3D8] dark:border-[#34332E] text-[#2C2B27] dark:text-[#DCD9CE] font-mono"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
