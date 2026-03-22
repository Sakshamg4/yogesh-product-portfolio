"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export const SkillsMarquee = () => {
  // Triple the skills to ensure there's always content to scroll
  const items = [...skills, ...skills, ...skills];

  return (
    <section className="bg-offWhite overflow-hidden py-12 md:py-16 border-y border-borderLight select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center gap-12 group-hover:pause"
        >
          {items.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-900">
                {skill}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
