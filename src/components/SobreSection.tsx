import lawyerAbout from "@/assets/marcelo2.jpeg";
import AnimatedSection from "./AnimatedSection";

const SobreSection = () => (
  <section id="sobre" className="bg-card py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Photo */}
        <AnimatedSection>
          <div>
            {/* overflow-visible ensures corner decorations are not clipped; px-3 gives breathing room for the -3 offset corners */}
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 overflow-visible px-3 pt-3 pb-3">
              {/* Angular frame corners — use -2 offset on mobile, -3 on sm+ */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-dourado" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-dourado" />
              <img
                src={lawyerAbout}
                alt="Marcelo Bueno - Advogado"
                className="w-full rounded-sm"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute bottom-4 left-4 bg-azul-profundo/95 px-3 sm:px-4 py-2 rounded-sm">
                <span className="font-inter text-xs text-dourado tracking-wider">
                  🏆 Membro MAV&apos;S Business Club
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={200}>
          <span className="badge-gold mb-4 inline-block">Quem Somos</span>
          <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-azul-profundo mb-6">
            Seu Parceiro Estratégico em Proteção Empresarial
          </h2>
          <p className="font-inter text-cinza-texto leading-relaxed mb-4">
            A MB Advocacia nasceu com um propósito claro: transformar a complexidade
            jurídica trabalhista em vantagem competitiva para empresários que querem
            crescer sem medo.
          </p>
          <p className="font-inter text-cinza-texto leading-relaxed mb-6">
            Somos especialistas em Compliance Trabalhista Empresarial, com abordagem
            100% preventiva e estratégica. Não esperamos o problema chegar, nós o
            eliminamos antes.
          </p>
          <blockquote className="border-l-[3px] border-dourado pl-5 sm:pl-6 py-2">
            <p className="font-playfair italic text-dourado text-base sm:text-lg leading-relaxed">
              Transformamos complexidade jurídica em estratégia empresarial
              descomplicada. Foco em resultados, não em horas faturadas.
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SobreSection;
