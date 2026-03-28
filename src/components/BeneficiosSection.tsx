import { Shield, Banknote, HeartHandshake, CheckCircle, Award, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Shield, title: "Blindagem Jurídica Total", desc: "Proteção 360° contra riscos trabalhistas que drenam seu caixa" },
  { icon: Banknote, title: "Economia Financeira Significativa", desc: "Adeus multas, indenizações e custos processuais imprevistos" },
  { icon: HeartHandshake, title: "Tranquilidade Empresarial", desc: "Foque no crescimento, não em medo de processos e fiscalizações" },
  { icon: CheckCircle, title: "Conformidade Simplificada", desc: "Processos organizados e compliance sem burocracia jurídica excessiva" },
  { icon: Award, title: "Estratégia Competitiva", desc: "Diferenciação no mercado e credibilidade fortalecida perante parceiros" },
];

const BeneficiosSection = () => (
  <section className="section-dark py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">Benefícios</span>
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
            O que Você Ganha ao Contar com a Gente
          </h2>
        </div>
      </AnimatedSection>

      {/*
        5 cards: 1 col mobile, 2 col md, 3 col lg.
        On lg the 5th card is alone in the last row — we push it to start at col 2 to center it visually.
      */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          const isLastOdd = i === benefits.length - 1 && benefits.length % 3 === 2;
          return (
            <AnimatedSection
              key={i}
              delay={i * 100}
              className={isLastOdd ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <div
                className="p-5 h-full transition-all duration-300 border-t-[3px] border-l-2"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderTopColor: "hsl(43, 50%, 54%)",
                  borderLeftColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="mb-3">
                  <Icon size={20} style={{ color: "hsl(43, 50%, 54%)" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-cormorant text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection>
        <p className="text-center px-4">
          <span className="font-playfair italic text-white text-base sm:text-lg">&ldquo;Sua Empresa Merece Segurança:&rdquo;</span>
          <br />
          <span className="font-cormorant text-xl sm:text-2xl font-bold text-dourado">
            Blindagem Jurídica que Libera seu Potencial
          </span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default BeneficiosSection;
