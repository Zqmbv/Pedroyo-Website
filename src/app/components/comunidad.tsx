import { Facebook, Instagram, MessageCircle, Music2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionLabel } from "./section-label";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const POSTS = [
  {
    id: "c1",
    date: "05 JUL 2026",
    cat: "Torneo",
    title: "Arrancó la liga local de la comunidad Pedroyo",
    image:
      "https://images.unsplash.com/photo-1758179762049-615d9aac58ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "c2",
    date: "28 JUN 2026",
    cat: "Taller",
    title: "Cómo restauramos una consola retro paso a paso",
    image:
      "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "c3",
    date: "19 JUN 2026",
    cat: "Novedad",
    title: "Nuevos componentes para tu próximo build gamer",
    image:
      "https://images.unsplash.com/photo-1573053986275-840ffc7cc685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function Comunidad() {
  return (
    <section id="comunidad" className="relative mx-auto max-w-[1440px] px-6 py-28 lg:px-12">
      <Reveal className="flex flex-col gap-3">
        <SectionLabel label="Comunidad" accent="cyan" />
        <h2 className="font-display text-3xl tracking-tight text-white lg:text-4xl">
          Estate atento a las novedades
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <RevealItem key={p.id} className="h-full">
          <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group flex h-full flex-col overflow-hidden pg-glass pg-clip transition-shadow duration-300 hover:pg-edge-cyan"
          >
            <div className="relative overflow-hidden pg-clip">
              <ImageWithFallback
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--pg-base)]/85 to-transparent" />
              <span className="absolute left-3 top-3 pg-glass px-2.5 py-1 font-display text-[9px] tracking-[0.2em] uppercase pg-text-cyan">
                {p.cat}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="font-display text-[10px] tracking-[0.24em] pg-muted">
                {p.date}
              </span>
              <h3 className="flex-1 font-body text-[16px] leading-snug text-white">
                {p.title}
              </h3>
              <a
                href="#comunidad"
                className="inline-flex items-center gap-1 font-display text-[11px] tracking-[0.16em] uppercase pg-text-cyan"
              >
                Leer más
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.article>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup className="mt-12 flex items-center justify-center gap-4" stagger={0.08}>
        {SOCIALS.map((s) => (
          <RevealItem key={s.label}>
          <motion.a
            href="#comunidad"
            aria-label={s.label}
            whileHover={{ y: -5, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="grid size-11 place-items-center pg-clip pg-glass text-white transition-shadow hover:pg-edge-magenta hover:pg-text-magenta"
          >
            <s.icon className="size-[18px]" strokeWidth={1.8} />
          </motion.a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
