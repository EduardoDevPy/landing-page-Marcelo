import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const CtaFinalSection = () => (
  <section id="contato" className="section-dark diagonal-pattern relative py-12 lg:py-20">
    <div className="gold-line absolute top-0 left-0 right-0" />

    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
      <AnimatedSection>
        <span className="badge-gold mb-6 inline-block">Próximo Passo</span>
        <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight">
          Pronto para Blindar<br />
          <span className="font-playfair italic text-dourado">Seu Negócio?</span>
        </h2>
        <p className="font-inter text-white/70 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
          Não espere o processo chegar para descobrir que você estava desprotegido.
          Agende sua análise de risco gratuita agora.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-sm uppercase tracking-wider"
        >
          Falar Agora no WhatsApp
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaFinalSection;
