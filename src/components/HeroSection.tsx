import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (hasPlayed.current) return;
    hasPlayed.current = true;
    // Create a subtle loom "thwack-clack" using Web Audio API
    try {
      const ctx = new AudioContext();
      const playNoise = (time: number, duration: number, gain: number) => {
        const buf = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.02));
        }
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const g = ctx.createGain();
        g.gain.value = gain;
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 800;
        src.connect(filter).connect(g).connect(ctx.destination);
        src.start(time);
      };
      playNoise(ctx.currentTime + 0.5, 0.08, 0.15);
      playNoise(ctx.currentTime + 0.7, 0.06, 0.1);
    } catch {
      // Audio not supported, silent fail
    }
  }, []);

  const scrollDown = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-secondary">
      {/* Cinematic background - dark textile aesthetic */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-drift"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, hsl(0 40% 12%) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, hsl(20 30% 8%) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, hsl(0 20% 6%) 0%, hsl(0 0% 5%) 100%)
            `,
          }}
        />
        {/* Textile texture lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(45 33% 97%) 2px, hsl(45 33% 97%) 3px)`,
            backgroundSize: "100% 4px",
          }}
        />
        {/* Shaft of light */}
        <div
          className="absolute top-0 left-[35%] w-[200px] h-full opacity-[0.06]"
          style={{
            background: `linear-gradient(180deg, hsl(40 60% 70% / 0.4) 0%, transparent 70%)`,
            filter: "blur(40px)",
            transform: "skewX(-5deg)",
          }}
        />
        {/* Dust motes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-charcoal-foreground/20 animate-dust-float"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              left: `${25 + Math.random() * 30}%`,
              top: `${60 + Math.random() * 40}%`,
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-hindi text-3xl md:text-5xl lg:text-6xl text-secondary-foreground leading-relaxed max-w-4xl"
        >
          मेरे हाथों की लकीरें, इस रेशम में बुन गई हैं।
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading italic text-lg md:text-xl text-secondary-foreground/60 mt-6 tracking-wide"
        >
          The lines of my hands are woven into this silk.
        </motion.p>
      </div>

      {/* Bottom left micro-copy */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-10 left-8 md:left-12 font-body text-[10px] md:text-xs tracking-[0.15em] text-secondary-foreground/40 max-w-[200px] leading-relaxed"
      >
        Woven in the dust of Odisha.
        <br />
        Draped in the boardrooms of the world.
      </motion.p>

      {/* Bottom right CTA */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
        onClick={scrollDown}
        className="absolute bottom-10 right-8 md:right-12 font-body text-xs tracking-[0.15em] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors duration-500 underline underline-offset-4 decoration-secondary-foreground/20 hover:decoration-secondary-foreground/50"
      >
        Enter the Loom
      </motion.button>
    </section>
  );
};

export default HeroSection;
