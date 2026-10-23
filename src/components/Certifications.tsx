import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Award, Terminal, Trophy, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';
import { certificationsData, achievementsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8C1]/60 dark:bg-[#D4AF37]/15 border border-[#C49A2C]/20 dark:border-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Credentials & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Certifications & Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#A7A499] mt-2 max-w-xl">
            Industry cloud credentials, cybersecurity verifications, and competitive algorithmic achievements.
          </p>
        </div>

        {/* Industry Certifications Grid */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
            <span>Industry Credentials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => {
              const isAws = cert.iconType === 'cloud';
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF8] dark:from-[#171614] dark:to-[#0F0F0E] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C]/50 dark:hover:border-[#D4AF37]/50 shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                        {isAws ? <Cloud className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#F4E8C1]/70 dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37] border border-[#C49A2C]/20 dark:border-[#D4AF37]/20">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#171717] dark:text-[#F5F3EA] mb-1">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#C49A2C] dark:text-[#D4AF37] mb-3">
                      {cert.organization} • {cert.type}
                    </div>

                    <p className="text-xs sm:text-sm text-[#44423E] dark:text-[#DCD9CE] leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-between text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">
                    <span className="flex items-center gap-1.5 text-[#10B981] font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{cert.issueDate}</span>
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#E7E3D8]/40 dark:bg-[#22211D]">
                      Authorized Certification
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Competitive Coding & Milestones */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-bold mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
            <span>Competitive Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-[#FFFFFF]/70 dark:bg-[#161513]/70 border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C]/50 dark:hover:border-[#D4AF37]/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-2xl bg-[#F4E8C1] dark:bg-[#2A271B] text-[#C49A2C] dark:text-[#D4AF37]">
                        {item.iconType === 'terminal' ? (
                          <Terminal className="w-5 h-5" />
                        ) : item.iconType === 'trophy' ? (
                          <Trophy className="w-5 h-5" />
                        ) : (
                          <Zap className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#E7E3D8]/50 dark:bg-[#252420] text-[#66645F] dark:text-[#B7B4AA]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#171717] dark:text-[#F5F3EA] mb-1">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#C49A2C] dark:text-[#D4AF37] mb-3">
                      {item.organization} • {item.type}
                    </div>

                    <p className="text-xs text-[#44423E] dark:text-[#D1CEC3] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {item.link && (
                    <div className="pt-3 border-t border-[#E7E3D8] dark:border-[#34332E]">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C49A2C] dark:text-[#D4AF37] hover:underline"
                      >
                        <span>View Verified Profile</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
