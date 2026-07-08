import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/PedroyoGames_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-[var(--pg-line)] bg-[var(--pg-base)] pt-20 pb-8 text-[var(--pg-text)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* CTA Section */}
        <div className="mb-20 flex flex-col items-start justify-between gap-10 rounded-2xl bg-[var(--pg-surface)] p-10 border border-[var(--pg-line)] md:flex-row md:items-center">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-3">
              Llevá tu setup al <span className="pg-text-magenta">próximo nivel.</span>
            </h2>
            <p className="font-body text-[15px] pg-muted">
              Suscribite a nuestro newsletter y recibí acceso anticipado a componentes high-end, consolas retro y descuentos en el taller.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-black/50 border border-[var(--pg-line)] px-4 py-3 font-body text-sm text-white focus:border-[var(--pg-cyan)] focus:outline-none transition-colors"
            />
            <button className="bg-[var(--pg-magenta)] px-6 py-3 font-display text-[13px] tracking-[0.14em] uppercase text-black font-bold transition-all hover:brightness-125">
              Unirme ahora
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 border-b border-[var(--pg-line)] pb-16">
          <div className="lg:col-span-2">
            <a href="#top" className="mb-6 inline-block">
              <ImageWithFallback src={logoImg} alt="Pedroyo Games Logo" className="h-10 w-auto object-contain" />
            </a>
            <p className="mb-6 max-w-sm font-body text-sm leading-relaxed pg-muted">
              Venta de consolas, juegos y componentes de última generación. Taller especializado en modding, mantenimiento y reparación de tu arsenal gamer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="pg-muted hover:text-white transition-colors"><Instagram className="size-5" /></a>
              <a href="#" className="pg-muted hover:text-white transition-colors"><Twitter className="size-5" /></a>
              <a href="#" className="pg-muted hover:text-white transition-colors"><Facebook className="size-5" /></a>
              <a href="#" className="pg-muted hover:text-white transition-colors"><Youtube className="size-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm tracking-[0.1em] uppercase text-white">Catálogo</h4>
            <ul className="flex flex-col gap-3 font-body text-[15px] pg-muted">
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Consolas y Hardware</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Juegos Retro</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Componentes PC</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Accesorios Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm tracking-[0.1em] uppercase text-white">Servicios</h4>
            <ul className="flex flex-col gap-3 font-body text-[15px] pg-muted">
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Diagnóstico Online</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Reparación de Hardware</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Mantenimiento</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Modding y Custom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm tracking-[0.1em] uppercase text-white">Políticas</h4>
            <ul className="flex flex-col gap-3 font-body text-[15px] pg-muted">
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Envíos y Entregas</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Términos de Garantía</a></li>
              <li><a href="#" className="hover:text-[var(--pg-cyan)] transition-colors">Política de Reembolsos</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between pt-8 text-sm pg-muted md:flex-row">
          <p className="font-display text-[11px] tracking-[0.1em] uppercase">
            © 2026 Pedroyo Games. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
