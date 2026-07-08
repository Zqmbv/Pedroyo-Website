import { MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { SectionLabel } from "./section-label";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

export function Nosotros() {
  return (
    <section id="nosotros" className="relative mx-auto max-w-[1440px] px-6 py-28 lg:px-12">
      <Reveal className="flex flex-col gap-3">
        <SectionLabel label="Nosotros" accent="magenta" />
        <h2 className="font-display text-3xl tracking-tight text-white lg:text-4xl">
          Pasá por el local
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Map placeholder */}
        <motion.div
          className="relative min-h-[320px] overflow-hidden pg-clip pg-glass pg-edge-cyan"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.202386184729!2d-71.6197715!3d10.641379700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8998532c626369%3A0x68aa14f2acc20bc!2sCentro%20Comercial%20Gran%20Bazar.!5e0!3m2!1ses!2sus!4v1783553036493!5m2!1ses!2sus"
            className="absolute inset-0 size-full grayscale-[20%] invert-[92%] contrast-[90%]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--pg-cyan)]/10 via-transparent to-[var(--pg-magenta)]/10 mix-blend-screen" />
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 pg-glass px-3 py-2 font-display text-[10px] tracking-[0.18em] uppercase text-white">
            <Navigation className="size-3.5 pg-text-cyan" />
            Cómo llegar
          </div>
        </motion.div>

        {/* Info */}
        <RevealGroup className="flex flex-col gap-4">
          {[
            {
              icon: MapPin,
              title: "Dirección",
              lines: ["Av 15 Delicias, Calle 100, Av. Libertador, Venezuela. Centro Comercial Gran Bazar, Locales 337 y 1212"],
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              lines: ["+58 426-2010020", "Respuesta en el día"],
            },
            {
              icon: Clock,
              title: "Horarios",
              lines: ["Lun a Sab · 09:00AM – 5:00PM", "Domingos · 09:00AM – 1:00PM"],
            },
          ].map((item) => (
            <RevealItem key={item.title}>
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex items-start gap-4 pg-clip pg-glass p-5 transition-shadow hover:pg-edge-magenta"
            >
              <span className="grid size-11 shrink-0 place-items-center pg-clip bg-white/[0.03] pg-text-cyan">
                <item.icon className="size-5" strokeWidth={1.8} />
              </span>
              <div>
                <div className="font-display text-[12px] tracking-[0.18em] uppercase text-white">
                  {item.title}
                </div>
                {item.lines.map((l) => (
                  <div key={l} className="mt-1 font-body text-[14px] pg-muted">
                    {l}
                  </div>
                ))}
              </div>
            </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
