import { Shield, Banknote, HeartHandshake, CheckCircle, Award, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Shield, title: "Proteção Patrimonial Estruturada", desc: "Seu patrimônio pessoal e empresarial protegido contra riscos jurídicos e execuções" },
  { icon: Banknote, title: "Redução de Custos e Perdas", desc: "Menos gastos com processos, indenizações e prejuízos evitáveis" },
  { icon: HeartHandshake, title: "Segurança para Crescer", desc: "Tome decisões empresariais com confiança, sem medo de riscos ocultos" },
  { icon: CheckCircle, title: "Conformidade Simplificada", desc: "Estrutura clara, contratos seguros e operação alinhada com a legislação" },
  { icon: Award, title: "Vantagem Competitiva Real", desc: "Empresas juridicamente estruturadas crescem mais e enfrentam menos obstáculos" },
];

const BeneficiosSection = () => (
  <section className="section-light py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">Benefícios</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-azul-profundo">
            O que a empresa ganha ao estruturar sua segurança jurídica
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Carousel opts={{ align: "start", loop: true, watchDrag: true }} className="w-full" style={{ touchAction: "pan-y" }}>
          <CarouselContent className="-ml-4" style={{ touchAction: "pan-y" }}>
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div
                    className="card-premium p-5 h-full transition-all duration-300 border-t-[3px] border-l-2"
                    style={{
                      borderTopColor: "hsl(43, 50%, 54%)",
                      borderLeftColor: "hsl(218, 68%, 14%, 0.15)",
                    }}
                  >
                    <div className="mb-3">
                      <Icon size={20} style={{ color: "hsl(43, 50%, 54%)" }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-cinzel text-base font-bold text-azul-profundo mb-2">{b.title}</h3>
                    <p className="font-inter text-cinza-texto text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <CarouselPrevious className="static translate-y-0 bg-dourado border-dourado text-azul-profundo hover:bg-dourado/80 hover:border-dourado/80" />
            <CarouselNext className="static translate-y-0 bg-dourado border-dourado text-azul-profundo hover:bg-dourado/80 hover:border-dourado/80" />
          </div>
        </Carousel>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-center px-4 mt-10 sm:mt-14">
          <span className="font-inter italic text-cinza-texto text-base sm:text-lg">Uma base jurídica sólida é o que sustenta empresas que crescem com consistência</span>
          <br />
          <span className="font-cinzel text-lg sm:text-xl font-bold text-dourado">
            Empresas bem estruturadas não dependem da sorte para evitar prejuízos
          </span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default BeneficiosSection;
