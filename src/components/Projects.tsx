"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { MoveUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-dark-bg text-dark-text overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <ScrollReveal y={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                Featured Work
              </span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 leading-[1.1]">
                Selected <span className="font-fraunces italic text-white/80 font-bold">Ventures</span>.
              </h2>
            </div>
            <p className="max-w-[400px] text-dark-muted text-lg font-medium leading-relaxed md:mb-2">
              Deep-diving into complex problems for government and global financial institutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer p-8 md:p-12 lg:p-14 bg-dark-card rounded-[40px] border border-dark-border flex flex-col gap-10 transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl lg:text-7xl font-bold text-dark-border opacity-50 group-hover:text-accent group-hover:opacity-100 transition-colors duration-500 leading-none">
                  {project.number}
                </span>
                <div className="w-14 h-14 rounded-full border border-dark-border flex items-center justify-center text-dark-muted group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                  <MoveUpRight size={24} />
                </div>
              </div>

              <div className="flex flex-col gap-4 relative">
                {/* Red accent line that slides in from left on hover */}
                <div className="absolute top-0 left-0 h-[3px] bg-accent w-16 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300 pt-6">
                  {project.title}
                </h3>
                <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                  {project.subtitle}
                </span>
                <p className="text-lg text-dark-muted leading-relaxed max-w-[400px] mt-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full border border-dark-border bg-dark-bg text-dark-muted text-[11px] font-mono uppercase tracking-widest group-hover:border-dark-muted/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
