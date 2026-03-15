import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="relative bg-background py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Left: negative space + headline */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-hindi text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed"
            >
              धूप, मिट्टी, और सबर.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading italic text-base text-muted-foreground mt-3"
            >
              Sun, mud, and patience.
            </motion.p>
          </div>

          {/* Right: portrait + body copy */}
          <div className="md:col-span-7 flex flex-col gap-10">
            {/* B&W Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[3/4] max-w-md ml-auto overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(170deg, hsl(30 5% 25%) 0%, hsl(0 0% 15%) 40%, hsl(0 0% 10%) 100%)
                  `,
                }}
              />
              {/* Placeholder texture for portrait */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 35%, hsl(35 20% 40%) 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-6 left-6 font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-foreground/30">
                Master Weaver — Nuapatna, Odisha
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg ml-auto"
            >
              <p className="font-body text-sm md:text-base leading-[2] text-foreground/80 tracking-wide">
                True luxury is not born in sterile European factories. It is born on the mud floors of Odisha, out of absolute necessity and unyielding grit. We do not sell fashion. We sell a biography of survival. A masterpiece forged by women who have very little, creating something that possesses everything. This is not charity. It is reverence for the hardest-earned mastery on earth.
              </p>
              <button className="mt-10 font-body text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-500">
                Read Our Provenance
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
