import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Logo } from "./logo";

const LINKS = [
  { label: "Productos", href: "#venta" },
  { label: "Servicio Técnico", href: "#servicio" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Nav({ cartCount = 0 }: { cartCount?: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col items-center transition-all duration-500 ${
        scrolled
          ? "bg-[var(--pg-base)]/90 backdrop-blur-xl border-b border-[var(--pg-line)] py-3 shadow-2xl"
          : "bg-gradient-to-b from-[var(--pg-base)]/80 to-transparent pt-8 pb-4"
      }`}
    >
      <div className="w-full flex flex-col items-center max-w-[1440px] px-6 lg:px-12">
        
        {/* Logo Placement (Bigger, Centered, Top) */}
        <a 
          href="#top" 
          className={`transition-all duration-500 transform origin-top ${
            scrolled ? "scale-75 mb-2" : "scale-100 mb-6"
          }`}
        >
          <Logo className="h-16 md:h-24 w-auto drop-shadow-2xl" />
        </a>

        {/* Navigation & Cart Row */}
        <div className="relative flex w-full items-center justify-center">
          <nav className="hidden items-center gap-10 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-display text-[13px] font-bold tracking-[0.18em] uppercase pg-muted transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--pg-magenta)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 grid size-11 place-items-center pg-clip pg-glass transition-all hover:bg-white/5 hover:border-white/20">
            <ShoppingCart className="size-5 text-white" strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-[var(--pg-cyan)] font-display text-[10px] text-black font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
