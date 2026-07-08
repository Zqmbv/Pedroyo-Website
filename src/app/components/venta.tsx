import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionLabel } from "./section-label";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

type Product = {
  id: string;
  name: string;
  tag: string;
  price: string;
  image: string;
  accent: "magenta" | "cyan" | "yellow";
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Control Inalámbrico Pro",
    tag: "Nuevo",
    price: "$54.990",
    image:
      "https://images.unsplash.com/photo-1543328011-1c0d628fae09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    accent: "magenta",
  },
  {
    id: "p2",
    name: "Consola Retro Restaurada",
    tag: "Restaurada",
    price: "$89.990",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    accent: "cyan",
  },
  {
    id: "p3",
    name: "Juego Usado — Edición",
    tag: "Usado",
    price: "$19.990",
    image:
      "https://images.unsplash.com/photo-1543622748-5ee7237e8565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    accent: "yellow",
  },
  {
    id: "p4",
    name: "Componente PC Gaming",
    tag: "Hardware",
    price: "$249.990",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    accent: "magenta",
  },
];

const accentEdge = {
  magenta: "group-hover:pg-edge-magenta",
  cyan: "group-hover:pg-edge-cyan",
  yellow: "group-hover:pg-edge-cyan",
} as const;

const tagColor = {
  magenta: "pg-text-magenta",
  cyan: "pg-text-cyan",
  yellow: "pg-text-yellow",
} as const;

export function Venta({ onAdd }: { onAdd: () => void }) {
  return (
    <section id="venta" className="relative mx-auto max-w-[1440px] px-6 py-28 lg:px-12">
      <Reveal className="flex flex-col gap-3">
        <SectionLabel label="Venta" accent="magenta" />
        <h2 className="font-display text-3xl tracking-tight text-white lg:text-4xl">
          Descubrí lo nuevo en la tienda
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => (
          <RevealItem key={p.id}>
          <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`group flex h-full flex-col pg-glass pg-clip transition-shadow duration-300 ${accentEdge[p.accent]}`}
          >
            <div className="relative overflow-hidden pg-clip">
              <ImageWithFallback
                src={p.image}
                alt={p.name}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 pg-glass px-2.5 py-1 font-display text-[9px] tracking-[0.2em] uppercase">
                <span className={tagColor[p.accent]}>{p.tag}</span>
              </span>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--pg-base)]/80 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="flex-1">
                <h3 className="font-body text-[15px] text-white">{p.name}</h3>
                <div className="mt-2 font-display text-lg text-white">{p.price}</div>
              </div>
              <motion.button
                onClick={onAdd}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 pg-clip border border-white/10 bg-transparent py-2.5 font-display text-[11px] tracking-[0.14em] uppercase text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                <Plus className="size-3.5" />
                Agregar al Carrito
              </motion.button>
            </div>
          </motion.article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
