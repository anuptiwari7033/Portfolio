import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Bot, Database, Wrench, BookOpen, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      ...skillsData.languages,
      icon: Code,
      badge: "Core Logic"
    },
    {
      ...skillsData.ai,
      icon: Bot,
      badge: "Intelligent Systems"
    },
    {
      ...skillsData.backend,
      icon: Server,
      badge: "Distributed Services"
    },
    {
      ...skillsData.frontend,
      icon: Layout,
      badge: "Interactive UI"
    },
    {
      ...skillsData.databases,
      icon: Database,
      badge: "Data & Caching"
    },
    {
      ...skillsData.tools,
      icon: Wrench,
      badge: "Workflows & DevOps"
    },
    {
      ...skillsData.core,
      icon: BookOpen,
      badge: "CS Fundamentals"
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] mt-2 max-w-xl">
            A comprehensive inventory of programming languages, frameworks, cloud tools, and CS foundations I leverage daily.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group relative p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#161513]/70 border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C]/50 dark:hover:border-[#D4AF37]/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37] transition-transform duration-200 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E7E3D8]/50 dark:bg-[#252420] text-[#66645F] dark:text-[#B7B4AA]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#171717] dark:text-[#F5F3EA] mb-4">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-3 py-1.5 rounded-xl bg-[#FAFAF8] dark:bg-[#1F1E1B] border border-[#E7E3D8] dark:border-[#34332E] group-hover:border-[#C49A2C]/30 dark:group-hover:border-[#D4AF37]/30 text-[#2C2B27] dark:text-[#ECEAE1] font-mono transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
