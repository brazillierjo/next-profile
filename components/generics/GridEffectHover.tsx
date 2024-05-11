"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

export const GridEffectHover = ({
  items,
  className,
}: {
  items: {
    company: string;
    title: string;
    years: string;
    skills: string[] | null;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="group relative  block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.company}</CardTitle>

            <p>{item.years}</p>

            <CardDescription>{item.title}</CardDescription>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {item.skills && item.skills.map((skill) => <p key={skill}>{skill}</p>)}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-white p-4 group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("mt-4 font-bold tracking-wide text-slate-800", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-8 text-sm leading-relaxed tracking-wide text-slate-700", className)}>{children}</p>;
};
