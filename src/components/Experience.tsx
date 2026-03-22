"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/lib/data";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <ScrollReveal y={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                Professional Journey
              </span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink-900 leading-[1.1]">
                Work <span className="font-fraunces italic text-accent font-bold">History</span>.
              </h2>
            </div>
            <p className="max-w-[420px] text-ink-500 text-lg font-medium leading-relaxed md:mb-2">
              Building impactful digital solutions through strategic product leadership and agile execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col border-t border-borderLight overflow-hidden">
          {experienceData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group border-b border-borderLight transition-all duration-300 hover:bg-offWhite cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="max-w-7xl mx-auto py-10 md:py-14 grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-12 relative px-4 sm:px-8">
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-300 group-hover:text-accent duration-300">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 group-hover:text-accent transition-colors duration-300">
                          {item.role}
                        </h3>
                        <span className="text-lg sm:text-xl font-bold text-accent font-fraunces italic">
                          @ {item.company}
                        </span>
                      </div>
                      <div className="hidden sm:flex w-10 h-10 rounded-full border border-borderLight items-center justify-center text-ink-300 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-ink-500 leading-relaxed max-w-[800px] pt-4 pr-12">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
