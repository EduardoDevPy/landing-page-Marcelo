import lawyerAbout from "@/assets/marcelo2.jpeg";
import AnimatedSection from "./AnimatedSection";

const SobreSection = () => (
  <section id="sobre" className="bg-card diagonal-pattern-blue py-14 lg:py-28">
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
            </div>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={200}>
          <span className="badge-gold mb-4 inline-block">Quem Somos</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-azul-profundo mb-6">
            Seu parceiro estratégico em segurança jurídica empresarial
          </h2>
          <p className="font-inter text-cinza-texto leading-relaxed mb-4">
            Na MB Advocacia, cada cliente é tratado de forma única.
          </p>
          <p className="font-inter text-cinza-texto leading-relaxed mb-6">
            Sabemos que por trás de cada empresa existem decisões importantes, riscos reais e anos de construção que precisam ser protegidos com seriedade e estratégia.
          </p>
          <p className="font-inter text-cinza-texto leading-relaxed mb-6">
            Por isso, nossa atuação vai além do jurídico tradicional.
          </p>
          <blockquote className="border-l-[3px] border-dourado pl-5 sm:pl-6 py-2">
            <p className="font-cinzel text-dourado text-sm sm:text-base leading-relaxed">
              Nosso compromisso é entender profundamente a realidade da sua empresa para oferecer soluções personalizadas, seguras e eficazes.
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SobreSection;
