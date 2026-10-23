import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Community & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Experience & Roles
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] mt-2 max-w-xl">
            Technical leadership, peer mentorship, and collaborative engineering projects within campus ecosystems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-[#E7E3D8] dark:before:bg-[#34332E] before:hidden md:before:block">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-20"
            >
              {/* Timeline Node Icon (Desktop) */}
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-[#FAFAF8] dark:bg-[#0F0F0E] border-2 border-[#C49A2C] dark:border-[#D4AF37] items-center justify-center z-10 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF8] dark:from-[#171614] dark:to-[#0F0F0E] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C]/50 dark:hover:border-[#D4AF37]/50 shadow-sm transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">
                        {exp.employmentType}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F5F3EA]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#C49A2C] dark:text-[#D4AF37] mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">
                    <div className="inline-flex items-center gap-1.5 bg-[#E7E3D8]/50 dark:bg-[#252420] px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#44423E] dark:text-[#DCD9CE] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#3E3C38] dark:text-[#CFCBC0] leading-snug">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-[#E7E3D8] dark:border-[#34332E]">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#E7E3D8]/40 dark:bg-[#22211D] border border-[#E7E3D8] dark:border-[#34332E] text-[#2C2B27] dark:text-[#DCD9CE] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
