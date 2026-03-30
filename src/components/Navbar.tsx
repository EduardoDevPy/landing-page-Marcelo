import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoDourado from "@/assets/logo-Dourado2.png";


const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Realidade", href: "#realidade" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-azul-profundo shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid hsl(43, 50%, 54%, 0.3)" } : {}}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <a href="#inicio">
          <img src={logoDourado} alt="Marcelo Bueno Advocacia" className="h-8 lg:h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-inter text-xs tracking-wider uppercase text-white/75 hover:text-dourado transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden sm:inline-block px-5 py-2.5 text-xs uppercase tracking-wider"
          >
            Falar no WhatsApp
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-azul-profundo/98 backdrop-blur-sm border-t border-dourado/20">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-sm tracking-wider uppercase text-white/80 hover:text-dourado py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-3 text-xs uppercase tracking-wider text-center mt-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
