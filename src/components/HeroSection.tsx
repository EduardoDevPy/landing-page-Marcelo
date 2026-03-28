import heroImg from "@/assets/marcelo2.jpeg";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex">
      {/* Left: Photo with overlay */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={heroImg}
          alt="Marcelo Bueno - Advogado especialista em compliance trabalhista"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,31,58,0.05) 60%, rgba(11,31,58,0.85) 100%)" }} />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 bg-azul-profundo diagonal-pattern relative flex items-center">
        {/* Large MB outline — reduced size on mobile to prevent overflow */}
        <span
          className="absolute top-[75%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cormorant text-[160px] sm:text-[220px] lg:text-[280px] font-bold select-none pointer-events-none"
          style={{
            WebkitTextStroke: "2px hsl(43, 50%, 54%)",
            WebkitTextFillColor: "transparent",
            opacity: 0.08,
          }}
        >
          MB
        </span>

        {/* Mobile hero background */}
        <div className="lg:hidden absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[55%]">
            <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,31,58,0.1) 0%, rgba(11,31,58,0.5) 38%, rgba(11,31,58,0.88) 53%, rgba(11,31,58,0) 58%)" }} />
        </div>

        {/* Content: pt accounts for navbar + image area on mobile; pb ensures scroll indicator isn't covered */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 pt-[58%] sm:pt-[50%] pb-20 lg:py-0 max-w-xl mx-auto lg:mx-0 w-full">
          <div className="badge-gold mb-6 sm:mb-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
             Proteção Empresarial Estratégica
          </div>

          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)" }}>
            Compliance Trabalhista:{" "}
            <span className="font-playfair italic text-dourado">Seu Escudo</span>{" "}
            Contra Riscos.
          </h1>

          <p className="font-inter text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
            Elimine passivos ocultos e proteja o caixa da sua empresa. Reduza até
            80% dos riscos jurídicos com blindagem preventiva de elite.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-4 text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Falar com Especialista
            </a>
            <a
              href="#contato"
              className="btn-outline-white px-6 py-4 text-sm uppercase tracking-wider text-center w-full sm:w-auto"
            >
              Consulta Estratégica
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
        <div
          className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div
            className="w-1 h-2 bg-dourado rounded-full"
            style={{ animation: "scroll-bounce 2s infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
