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
            À frente da atuação está <span className="font-semibold text-azul-profundo">Marcelo Bueno</span>, advogado estrategista e sócio, com mais de duas décadas de experiência, dedicado a estruturar soluções jurídicas que protegem empresas, patrimônio e decisões empresariais. Ao longo de sua trajetória, desenvolveu uma abordagem que vai além da resolução de problemas, com foco na antecipação de riscos e na construção de estruturas jurídicas seguras e eficientes.
          </p>
          <p className="font-inter text-cinza-texto leading-relaxed mb-4">
            A partir dessa visão, nasce a MB Advocacia, um escritório voltado à segurança jurídica empresarial, com atuação integrada nas áreas empresarial, trabalhista e cível. Na MB Advocacia, cada cliente é tratado de forma única, pois entendemos que por trás de cada empresa existem decisões relevantes, responsabilidades reais e anos de construção que não podem ser expostos a riscos desnecessários.
          </p>
          <blockquote className="border-l-[3px] border-dourado pl-5 sm:pl-6 py-2">
            <p className="font-cinzel text-dourado text-sm sm:text-base leading-relaxed">
              Cada caso é analisado de forma individual, com estratégias personalizadas e acompanhamento próximo e contínuo. Aqui, você não recebe soluções genéricas, mas sim uma estrutura jurídica pensada para a realidade do seu negócio.
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SobreSection;
