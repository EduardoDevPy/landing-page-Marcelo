import { Building2, HardHat, FileText, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import justiceBg from "@/assets/justice-bg.jpg";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const areas: {
  icon: LucideIcon;
  label: string;
  title: string;
  items: string[];
}[] = [
  {
    icon: Building2,
    label: "Empresarial",
    title: "Direito Empresarial",
    items: ["Estruturação societária", "Holdings patrimoniais", "Planejamento estratégico"],
  },
  {
    icon: HardHat,
    label: "Trabalhista",
    title: "Direito Trabalhista",
    items: ["Prevenção de passivos", "Defesa em reclamações", "Blindagem de relações de trabalho"],
  },
  {
    icon: FileText,
    label: "Cível",
    title: "Direito Cível",
    items: ["Defesa patrimonial", "Atuação em execuções", "Gestão de riscos jurídicos"],
  },
];

const ServicosSection = () => (
  <section id="servicos" className="section-dark py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Header */}
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">Atuação</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4">
            Integração Estratégica
          </h2>
          <p className="font-inter text-white/60 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Atuamos de forma integrada nas áreas empresarial, trabalhista e cível, desenvolvendo estratégias jurídicas personalizada para cada cliente.
          </p>
          <p className="font-cinzel text-dourado text-sm sm:text-base mt-3">
            Aqui, seu caso não é apenas mais um.
          </p>
        </div>
      </AnimatedSection>

      {/* Areas grid */}
      <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
        {areas.map((a, i) => {
          const Icon = a.icon;
          return (
            <AnimatedSection key={i} delay={i * 120}>
              <div
                className="relative overflow-hidden h-full border-t-[3px] border-l-2"
                style={{
                  borderTopColor: "hsl(43, 50%, 54%)",
                  borderLeftColor: "rgba(255,255,255,0.15)",
                }}
              >
                {/* Background image */}
                <img src={justiceBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0" style={{ background: "rgba(11,31,58,0.82)" }} />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-dourado/40 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} style={{ color: "hsl(43, 50%, 54%)" }} strokeWidth={1.5} />
                    </div>
                    <span className="font-inter text-xs uppercase tracking-widest text-dourado font-semibold">
                      {a.label}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg lg:text-xl font-bold text-white mb-4">
                    {a.title}
                  </h3>

                  <ul className="space-y-2">
                    {a.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(43, 50%, 54%)" }} />
                        <span className="font-inter text-white/70 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Bottom tagline + CTA */}
      <AnimatedSection>
        <div className="text-center">
          <p className="font-inter text-white/60 text-sm sm:text-base mb-2">
            Tudo com um único objetivo:
          </p>
          <p className="font-cinzel text-lg sm:text-xl lg:text-2xl font-bold text-white mb-8 sm:mb-10">
            Proteger sua empresa e seu patrimônio com{" "}
            <span className="font-cinzel text-dourado">segurança jurídica real.</span>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block w-full sm:w-auto px-8 sm:px-10 py-4 text-sm uppercase tracking-wider"
          >
            Quero estruturar minha empresa com segurança jurídica
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicosSection;
