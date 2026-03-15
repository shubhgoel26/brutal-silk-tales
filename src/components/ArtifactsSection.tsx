import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const artifacts = [
  {
    title: "The Khandua Midnight Indigo",
    specs: "120 hours of manual tension. Hand-spun silk.",
    price: "24,000",
    type: "draped" as const,
    gradient: "linear-gradient(160deg, hsl(230 40% 15%) 0%, hsl(240 30% 8%) 100%)",
  },
  {
    title: "The Bomkai Vermillion",
    specs: "96 hours. Lac-dyed warp. Temple border.",
    price: "18,500",
    type: "raw" as const,
    gradient: "linear-gradient(160deg, hsl(0 50% 20%) 0%, hsl(15 30% 12%) 100%)",
  },
  {
    title: "The Ikat Monsoon Grey",
    specs: "140 hours. Double-ikat resist. Tussar blend.",
    price: "32,000",
    type: "draped" as const,
    gradient: "linear-gradient(160deg, hsl(200 10% 20%) 0%, hsl(210 15% 10%) 100%)",
  },
  {
    title: "The Sambalpuri Earthen Gold",
    specs: "110 hours. Bandha technique. Pure mulberry.",
    price: "21,000",
    type: "raw" as const,
    gradient: "linear-gradient(160deg, hsl(35 40% 18%) 0%, hsl(25 30% 10%) 100%)",
  },
];

const ArtifactCard = ({
  artifact,
  index,
}: {
  artifact: (typeof artifacts)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden cursor-pointer group ${
        index % 2 === 0 ? "aspect-[3/4]" : "aspect-[2/3]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div
        className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        style={{ background: artifact.gradient }}
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            artifact.type === "raw"
              ? `repeating-linear-gradient(45deg, transparent, transparent 3px, hsl(45 33% 97%) 3px, hsl(45 33% 97%) 4px)`
              : `radial-gradient(circle at 60% 40%, hsl(45 20% 50% / 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Type badge */}
      <div className="absolute top-6 left-6 font-body text-[9px] tracking-[0.25em] uppercase text-charcoal-foreground/30">
        {artifact.type === "draped" ? "Finished Weave" : "Raw Material"}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-xl md:text-2xl text-charcoal-foreground mb-2">
            {artifact.title}
          </h3>
          <p className="font-body text-[10px] tracking-[0.1em] text-charcoal-foreground/40 mb-3">
            {artifact.specs}
          </p>
          <p className="font-heading text-lg text-charcoal-foreground/60">
            {artifact.price}
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-6 md:left-8"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading italic text-xl md:text-2xl text-charcoal-foreground">
            Claim this Heirloom
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ArtifactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="artifacts" className="bg-background py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            The Artifacts
          </h2>
          <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3">
            Each piece, a biography
          </p>
        </motion.div>

        {/* Staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {artifacts.map((artifact, i) => (
            <div key={artifact.title} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <ArtifactCard artifact={artifact} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtifactsSection;
