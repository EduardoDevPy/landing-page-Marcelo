import justiceBg from "@/assets/businessPeople.jpg";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Diagnóstico Estratégico", desc: "Análise completa da sua empresa para identificar riscos trabalhistas, cíveis e estruturais" },
  { num: "02", title: "Mapeamento de Vulnerabilidades", desc: "Identificação dos pontos que podem gerar prejuízos, processos ou exposição patrimonial" },
  { num: "03", title: "Estruturação Jurídica Personalizada", desc: "Desenvolvimento de soluções sob medida, incluindo contratos, organização societária e proteção patrimonial" },
  { num: "04", title: "Implementação e Acompanhamento", desc: "Execução estratégica com suporte contínuo para manter sua empresa segura e atualizada" },
];

const MetodologiaSection = () => (
  // No diagonal separator here — previous section (BeneficiosSection) is also dark.
  <section id="metodologia" className="relative py-14 lg:py-28 overflow-hidden">
    <div className="absolute inset-0">
      <img src={justiceBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(11, 31, 58, 0.90)" }} />
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-12 sm:mb-16">
          <span className="badge-gold mb-4 inline-block">Metodologia</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-white">
            Como estruturamos a segurança jurídica da sua empresa
          </h2>
        </div>
      </AnimatedSection>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[8%] right-[8%] h-px bg-dourado/30" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-azul-profundo border-2 border-dourado flex items-center justify-center mb-6 relative z-10">
                    <span className="font-cinzel text-lg font-bold text-dourado">{s.num}</span>
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="font-inter text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline
          - pl-12 on container gives room for the circle (w-8=32px) + gap
          - The line sits at left-4 (16px = center of the 32px circle at -left-[calc(2rem)])
          - Circle is -left-8 so its center aligns with the left-4 line */}
      <div className="md:hidden relative pl-12">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-dourado/30" />
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="relative mb-8 last:mb-0">
              {/* Circle center at left-4: position circle so its center (w-8 / 2 = 16px) aligns.
                  -left-8 places left edge of circle 32px to the left of pl-12 start,
                  which puts its center at 12*4 - 32 + 16 = 48-32+16 = 32px... let's use -left-[2rem] to be exact */}
              <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-azul-profundo border-2 border-dourado flex items-center justify-center">
                <span className="font-cinzel text-sm font-bold text-dourado">{s.num}</span>
              </div>
              <div className="border-t-[2px] border-l-2 p-4 sm:p-5" style={{ background: "rgba(255,255,255,0.05)", borderTopColor: "hsl(43, 50%, 54%)", borderLeftColor: "rgba(201,168,76,0.2)" }}>
                <h3 className="font-cinzel text-base font-bold text-white mb-1">{s.title}</h3>
                <p className="font-inter text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MetodologiaSection;
