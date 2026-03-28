import { Search, FileCheck, BookOpen, Users, Shield, RefreshCw, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Análise e Mapeamento de Riscos", desc: "Identificamos cada vulnerabilidade trabalhista antes que vire problema" },
  { icon: FileCheck, title: "Adequação Preventiva", desc: "Conformidade total com a legislação vigente, sem burocracia desnecessária" },
  { icon: BookOpen, title: "Manuais de Compliance", desc: "Documentação personalizada que organiza e protege cada processo interno" },
  { icon: Users, title: "Assessoria Estratégica Contínua", desc: "Acompanhamento permanente para que sua empresa esteja sempre blindada" },
  { icon: Shield, title: "Proteção Patrimonial", desc: "Blindagem do patrimônio pessoal e empresarial contra riscos evitáveis" },
  { icon: RefreshCw, title: "Suporte em Reformas Regulatórias", desc: "Atualização constante frente a mudanças na legislação trabalhista" },
];

const ServicosSection = () => (
  <section id="servicos" className="section-light py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">O Que Fazemos</span>
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-5xl font-bold text-azul-profundo">
            Blindagem Jurídica 360° para o Seu Negócio
          </h2>
        </div>
      </AnimatedSection>

      <div className="divide-y divide-dourado/10">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          return (
            <AnimatedSection key={i} delay={i * 80}>
              <div className={`flex flex-col md:flex-row items-center gap-5 lg:gap-12 py-7 sm:py-8 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                {/* Icon circle */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border border-dourado/40 flex items-center justify-center">
                  <Icon size={24} style={{ color: "hsl(43, 50%, 54%)" }} strokeWidth={1.5} />
                </div>

                {/* Text — centered on mobile, left or right on md+ */}
                <div className={`flex-1 text-center md:text-left ${!isEven ? "md:text-right" : ""}`}>
                  <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-azul-profundo mb-2">{s.title}</h3>
                  {/* mx-auto so the max-w-md stays centered on mobile */}
                  <p className={`font-inter text-cinza-texto text-sm leading-relaxed max-w-md mx-auto ${isEven ? "md:mx-0" : "md:ml-auto md:mr-0"}`}>{s.desc}</p>
                </div>

                {/* Ghost number */}
                <div className="hidden lg:block flex-shrink-0 font-cormorant text-[80px] font-bold leading-none select-none pointer-events-none" style={{ color: "hsl(215, 70%, 14%, 0.05)" }}>
                  0{i + 1}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection>
        <p className="text-center mt-10 sm:mt-14 px-4">
          <span className="font-playfair italic text-dourado text-base sm:text-lg">&ldquo;Chega de Advogados que Drenam sua Caixa:&rdquo;</span>
          <br />
          <span className="font-cormorant text-xl sm:text-2xl font-bold text-azul-profundo">
            Consultoria que Gera Valor Real
          </span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicosSection;
