import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="footer" className="bg-background py-32 md:py-48">
      <div ref={ref} className="max-w-3xl mx-auto px-8 md:px-16 text-center">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading italic text-lg md:text-xl text-foreground/70 mb-2">
            Do not rush.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
            Leave your email to receive private viewings of our rarest weaves before they are released.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-foreground/20 text-foreground placeholder:text-muted-foreground font-body text-sm tracking-wide focus-visible:ring-primary/30 h-12"
            />
            <button className="font-body text-xs tracking-[0.2em] uppercase bg-secondary text-secondary-foreground px-8 h-12 hover:bg-foreground hover:text-background transition-colors duration-500 whitespace-nowrap">
              Join the Inner Circle
            </button>
          </div>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 pt-8 border-t border-border/30"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["The Craft", "Private Concierge", "Care for your Heirloom", "Shipping & Ethics"].map(
              (link) => (
                <button
                  key={link}
                  className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
                >
                  {link}
                </button>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
