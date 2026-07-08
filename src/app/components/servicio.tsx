import { ShieldCheck, MessageCircle, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./reveal";

const SERVICES = [
  { code: "SVC-01", name: "Cambio de pantalla Switch", eta: "24–48h" },
  { code: "SVC-02", name: "Reballing PS5 / Xbox", eta: "3–5 días" },
  { code: "SVC-03", name: "Limpieza PC Gaming", eta: "24h" },
  { code: "SVC-04", name: "Reparación de mandos", eta: "24h" },
];

export function Servicio() {
  return (
    <section id="servicio" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pg-green)]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Intro / warranty */}
          <Reveal>
            <div className="font-display text-[12px] tracking-[0.34em] uppercase pg-text-green">
              // Servicio Técnico
            </div>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-white lg:text-[40px] lg:leading-[1.1]">
              Diagnóstico experto.
              <br />
              <span className="pg-text-green">Tu equipo, revivido.</span>
            </h2>
            <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed pg-muted">
              Nuestro taller opera como una sala de diagnóstico: revisamos, informamos
              y reparamos con repuestos de calidad. Vos seguís el estado en todo momento.
            </p>

            <div className="mt-8 flex items-start gap-3 pg-clip pg-glass pg-edge-green p-5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 pg-text-green" />
              <div>
                <div className="font-display text-[12px] tracking-[0.16em] uppercase text-white">
                  Garantía en cada reparación
                </div>
                <p className="mt-1 font-body text-[13px] pg-muted">
                  90 días de cobertura sobre la mano de obra y los repuestos instalados.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 pg-clip bg-[var(--pg-green)] px-7 py-3.5 font-display text-[13px] tracking-[0.14em] uppercase text-[var(--pg-base)] transition-all hover:pg-edge-green"
            >
              <MessageCircle className="size-4" />
              Solicitar Diagnóstico por WhatsApp
            </a>
          </Reveal>

          {/* Diagnostic terminal / HUD */}
          <motion.div
            className="pg-clip pg-glass pg-edge-green overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-[var(--pg-green)]/25 bg-[var(--pg-green)]/[0.04] px-5 py-3">
              <div className="flex items-center gap-2 font-display text-[11px] tracking-[0.2em] uppercase pg-text-green">
                <Cpu className="size-4" />
                pedroyo://diagnostics
              </div>
              <div className="flex items-center gap-2 font-display text-[11px] tracking-[0.18em] uppercase text-white">
                <span className="size-2 rounded-full bg-[var(--pg-magenta)] pg-blink" />
                REC
              </div>
            </div>

            {/* Rows */}
            <motion.div
              className="divide-y divide-[var(--pg-line)]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
              {SERVICES.map((s) => (
                <motion.div
                  key={s.code}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--pg-green)]/[0.03]"
                >
                  <span className="font-display text-[11px] tracking-[0.14em] pg-muted">
                    {s.code}
                  </span>
                  <div>
                    <div className="font-body text-[15px] text-white">{s.name}</div>
                    <div className="font-body text-[12px] pg-muted">
                      ETA estimado {s.eta}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 pg-clip border border-[var(--pg-green)]/40 bg-[var(--pg-green)]/10 px-3 py-1.5 font-display text-[10px] tracking-[0.18em] uppercase pg-text-green">
                    <span className="size-1.5 rounded-full bg-[var(--pg-green)]" />
                    Disponible
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Terminal footer */}
            <div className="border-t border-[var(--pg-green)]/25 bg-[var(--pg-green)]/[0.04] px-5 py-3 font-display text-[10px] tracking-[0.18em] uppercase pg-text-green">
              &gt; 4 servicios activos · sistema operativo
              <span className="pg-blink"> _</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
