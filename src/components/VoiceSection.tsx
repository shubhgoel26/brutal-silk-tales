import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VoiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-secondary py-32 md:py-48">
      <div ref={ref} className="max-w-4xl mx-auto px-8 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-hindi text-3xl md:text-5xl lg:text-6xl text-secondary-foreground leading-relaxed mb-4"
        >
          ये कला नहीं, मेरी ज़िद है।
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading italic text-base md:text-lg text-secondary-foreground/50 mb-16"
        >
          This is not art, it is my stubbornness.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-sm md:text-base leading-[2.2] text-secondary-foreground/70 tracking-wide text-left md:text-center max-w-2xl mx-auto"
        >
          "They call it a masterpiece. I call it forty days of my back aching against a wooden post. To make this red, I boiled madder root over an open fire until the smoke stung my eyes bare. When the monsoon comes, the threads swell, and I must pull harder. My hands are rough so this fabric can be soft. My nights are sleepless so you can wear my time. I do not weave for your pity. I weave because my hands know nothing but perfection."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 font-heading italic text-sm text-secondary-foreground/40 text-right"
        >
          — Sanjukta, Master Weaver, Nuapatna Village.
        </motion.p>
      </div>
    </section>
  );
};

export default VoiceSection;
