import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL } from "@/lib/constants";

const CtaFinalSection = () => (
  <section id="contato" className="section-dark diagonal-pattern relative py-12 lg:py-20">
    <div className="gold-line absolute top-0 left-0 right-0" />

    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
      <AnimatedSection>
        <span className="badge-gold mb-6 inline-block">Próximo Passo</span>
        <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-5 sm:mb-6 leading-tight">
          Sua empresa está protegida ou apenas ainda não teve{" "}
          <span className="font-cinzel text-dourado">problema?</span>
        </h2>
        <p className="font-inter text-white/70 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
          Uma única ação trabalhista, um contrato mal estruturado ou uma falha jurídica
          podem comprometer anos de construção.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-sm uppercase tracking-wider"
        >
          Quero proteger minha empresa
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaFinalSection;
