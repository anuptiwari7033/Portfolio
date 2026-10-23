import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Zap, CheckCircle, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, Project } from '../data/portfolioData';

type CategoryFilter = 'All' | 'AI & Agents' | 'Distributed Systems' | 'Full-Stack';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const categories: CategoryFilter[] = ['All', 'AI & Agents', 'Distributed Systems', 'Full-Stack'];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] mt-2 max-w-xl">
              Production-focused systems spanning multi-agent AI frameworks, real-time distributed platforms, and full-stack web architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#FFFFFF]/70 dark:bg-[#1A1916]/70 p-1.5 rounded-2xl border border-[#E7E3D8] dark:border-[#34332E]">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#171717] text-white dark:bg-[#F5F3EA] dark:text-[#171717] shadow-xs'
                    : 'text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF8] dark:from-[#171614] dark:to-[#0F0F0E] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C]/60 dark:hover:border-[#D4AF37]/60 p-6 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Info & Specs */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37] border border-[#C49A2C]/20 dark:border-[#D4AF37]/20">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">
                          Project #{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-[#F5F3EA] group-hover:text-[#C49A2C] dark:group-hover:text-[#D4AF37] transition-colors">
                        {project.name}
                      </h3>
                      <div className="text-sm font-medium text-[#C49A2C] dark:text-[#D4AF37] mt-1 mb-4">
                        {project.subtitle}
                      </div>

                      <p className="text-sm sm:text-base text-[#44423E] dark:text-[#DCD9CE] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Performance highlight banner */}
                    <div className="p-4 rounded-2xl bg-[#F4E8C1]/30 dark:bg-[#D4AF37]/10 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 flex items-start gap-3">
                      <Zap className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C49A2C] dark:text-[#D4AF37] block">
                          Architecture Highlight
                        </span>
                        <span className="text-xs sm:text-sm text-[#2C2B27] dark:text-[#ECEAE1] font-medium">
                          {project.performanceAchievement}
                        </span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 bg-[#171717] hover:bg-[#2A2925] text-white dark:bg-[#F5F3EA] dark:hover:bg-white dark:text-[#171717] shadow-xs hover:scale-[1.02]"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs transition-all duration-200 border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] text-[#171717] dark:text-[#F5F3EA] hover:bg-[#E7E3D8]/50 dark:hover:bg-[#34332E]/50"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                          <span>Inspect Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Key Features & Tech Stack */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-[#E7E3D8] dark:lg:border-[#34332E] lg:pl-8">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold mb-3.5">
                        Key Features & Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {project.keyFeatures.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#44423E] dark:text-[#D1CEC3] leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-3 py-1 rounded-lg bg-[#E7E3D8]/50 dark:bg-[#252420] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#E2DFD2] font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
