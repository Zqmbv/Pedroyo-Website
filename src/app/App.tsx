import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Marquee } from "./components/marquee";
import { Venta } from "./components/venta";
import { Servicio } from "./components/servicio";
import { Comunidad } from "./components/comunidad";
import { Nosotros } from "./components/nosotros";
import { Footer } from "./components/footer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCartCount((c) => c + 1);
    toast("Agregado al carrito", {
      description: "Producto añadido correctamente.",
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-[var(--pg-base)] text-[var(--pg-text)] antialiased selection:bg-[var(--pg-cyan)] selection:text-black">
      <div className="relative z-10">
        <Nav cartCount={cartCount} />
        <main>
          <Hero />
          <Marquee />
          <Venta onAdd={handleAdd} />
          <Servicio />
          <Comunidad />
          <Nosotros />
        </main>
        <Footer />
        <Toaster theme="dark" position="bottom-right" />
      </div>
    </div>
  );
}
