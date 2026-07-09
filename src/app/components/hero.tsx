import { ShieldCheck, ArrowRight, Wrench } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  // Mouse-driven tilt for the hero visual
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 15,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 15,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="pg-scanlines relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Layered dark neon background */}
      <motion.div
        className="absolute inset-0 pg-grid opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/4 size-[520px] rounded-full bg-[var(--pg-magenta)]/10 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-0 size-[480px] rounded-full bg-[var(--pg-cyan)]/10 blur-[140px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--pg-base)] to-transparent" />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 pt-48 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div>
          <motion.span
            className="inline-flex items-center gap-2 pg-clip pg-glass pg-edge-green px-4 py-2 font-body text-[11px] tracking-[0.2em] uppercase pg-text-green"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <ShieldCheck className="size-3.5" />
            Garantía incluida en toda reparación
          </motion.span>

          <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight text-white lg:text-[64px]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              Tu <span className="pg-text-magenta">arsenal</span> gamer.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.22 }}
            >
              Tu consola, <span className="pg-text-cyan">revivida.</span>
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-lg font-body text-[15px] leading-relaxed pg-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.36 }}
          >
            Venta de consolas, juegos y componentes — más un taller de reparación
            con diagnóstico experto para dejar tu equipo como nuevo.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.48 }}
          >
            <motion.a
              href="#venta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 pg-clip bg-white px-7 py-3.5 font-display text-[13px] tracking-[0.14em] uppercase text-black transition-shadow hover:pg-edge-cyan"
            >
              Ver Catálogo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#servicio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 pg-clip border border-white/10 px-7 py-3.5 font-display text-[13px] tracking-[0.14em] uppercase text-white transition-all hover:bg-white/5 hover:border-white/20"
            >
              <Wrench className="size-4 opacity-70" />
              Reparar mi Consola
            </motion.a>
          </motion.div>
        </div>

        {/* Framed hero visual w/ tilt + float */}
        <motion.div
          className="relative"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative pg-clip pg-glass pg-edge-cyan p-2">
              <ImageWithFallback
                src="img/tecnico.png"
                alt="Gamers jugando en una sala oscura con luces neón"
                className="pg-clip h-[420px] w-full object-cover contrast-110 saturate-[1.15]"
              />
              <div className="pointer-events-none absolute inset-2 pg-clip bg-gradient-to-tr from-[var(--pg-magenta)]/25 via-transparent to-[var(--pg-cyan)]/20 mix-blend-screen" />
            </div>
          </motion.div>
          <div className="absolute -bottom-4 left-6 flex items-center gap-2 pg-clip pg-glass px-4 py-2 font-display text-[10px] tracking-[0.24em] uppercase">
            <span className="size-1.5 rounded-full bg-[var(--pg-green)] pg-blink" />
            <span className="text-white">Taller online</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            className="size-1 rounded-full bg-[var(--pg-cyan)]"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
