import AnimatedSection from "./AnimatedSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  { quote: "Reduzimos 70% do risco trabalhista em 3 meses e ganhamos segurança para abrir nova filial.", author: "João M.", role: "Dono de indústria alimentícia" },
  { quote: "Antes vivia com medo de fiscalização. Hoje durmo tranquilo sabendo que estou 100% protegido.", author: "Ana C.", role: "Empresária do setor de serviços" },
  { quote: "O compliance preventivo da MB nos economizou mais de R$200 mil em possíveis ações trabalhistas.", author: "Roberto S.", role: "Diretor de construtora" },
  { quote: "Finalmente tenho um advogado que fala a minha língua — de empresário para empresário.", author: "Luciana P.", role: "Fundadora de rede de franquias" },
];

const badges = ["Prevenção de Riscos", "Compliance Certificado", "MAV'S Business Club"];

const DepoimentosSection = () => (
  <section id="depoimentos" className="section-light py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">Prova Social</span>
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-5xl font-bold text-azul-profundo">
            Empresas que já Blindaram seu Futuro
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* overflow-hidden prevents any carousel horizontal bleed on narrow viewports */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full overflow-hidden">
          <CarouselContent className="-ml-3 sm:-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-3 sm:pl-4 md:basis-1/2">
                <div className="card-premium p-5 sm:p-6 h-full relative border-t-[3px] border-t-dourado border-l-2" style={{ borderLeftColor: "hsl(218, 68%, 14%, 0.15)" }}>
                  <span className="font-playfair text-5xl sm:text-6xl text-dourado/25 absolute top-3 left-5 select-none leading-none">&ldquo;</span>
                  <p className="font-playfair italic text-azul-profundo text-sm sm:text-base leading-relaxed mb-6 mt-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-dourado/20 pt-4">
                    <span className="font-inter font-semibold text-azul-profundo text-sm">{t.author}</span>
                    <span className="font-inter text-cinza-texto text-xs block">{t.role}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <CarouselPrevious className="static translate-y-0 border-dourado/40 text-azul-profundo hover:bg-dourado hover:text-white hover:border-dourado" />
            <CarouselNext className="static translate-y-0 border-dourado/40 text-azul-profundo hover:bg-dourado hover:text-white hover:border-dourado" />
          </div>
        </Carousel>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
        {badges.map((b) => (
          <span
            key={b}
            className="font-inter text-xs tracking-wider uppercase px-3 sm:px-4 py-2 border border-dourado/40 text-azul-profundo rounded-sm"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
