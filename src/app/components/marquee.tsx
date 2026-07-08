import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function Marquee() {
  const items = [
    "REPARACIÓN EN 24 HORAS",
    "ENVÍOS A TODO EL PAÍS",
    "GARANTÍA EXTENDIDA",
    "MODDING DE CONSOLAS",
    "COMPONENTES HIGH-END",
    "ACCESORIOS EXCLUSIVOS",
  ];

  return (
    <div className="flex w-full overflow-hidden border-y border-white/5 bg-transparent py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 font-display text-[12px] tracking-[0.2em] uppercase text-[var(--pg-muted)]"
          >
            <span>{item}</span>
            <span className="size-1 rounded-full bg-[var(--pg-cyan)]/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
