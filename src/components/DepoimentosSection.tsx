import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const faqs = [
  {
    q: "Como saber se minha empresa tem riscos jurídicos ocultos?",
    a: "Se você nunca fez uma análise estratégica completa, o risco já existe. A maioria das empresas descobre falhas trabalhistas, contratuais e cíveis apenas quando já está sendo acionada judicialmente.",
  },
  {
    q: "Existe risco real de eu perder meu patrimônio pessoal?",
    a: "Sim e isso acontece com mais frequência do que parece. Sem uma estrutura jurídica adequada, dívidas e processos podem ultrapassar a empresa e atingir diretamente os bens dos sócios.",
  },
  {
    q: "Qual a importância de contratos bem estruturados na prática?",
    a: "Total. Contratos mal elaborados são uma das principais causas de prejuízos, conflitos e ações judiciais no âmbito cível e empresarial.",
  },
  {
    q: "A holding realmente protege o patrimônio e reduz riscos?",
    a: "Sim, quando bem estruturada. A holding organiza o patrimônio, facilita a gestão e pode reduzir riscos e impactos financeiros, sempre dentro da legalidade.",
  },
  {
    q: "Preciso tratar cada área separadamente ou existe uma solução integrada?",
    a: "O ideal é integrar tudo. Empresarial, trabalhista, cível e patrimonial precisam estar alinhados para garantir proteção real e segurança nas decisões.",
  },
];

const DepoimentosSection = () => (
  <section id="depoimentos" className="section-light py-14 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">Dúvidas Frequentes</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-azul-profundo">
            Perguntas que todo empresário faz
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-premium border-t-[3px] border-l-2 px-5 rounded-none"
                style={{
                  borderTopColor: "hsl(43, 50%, 54%)",
                  borderLeftColor: "hsl(218, 68%, 14%, 0.15)",
                  borderBottom: "none",
                }}
              >
                <AccordionTrigger className="font-cinzel text-sm sm:text-base font-semibold text-azul-profundo text-left hover:text-dourado hover:no-underline py-5 gap-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-cinza-texto text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* Fechamento */}
      <AnimatedSection>
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center">
          <div className="w-12 h-px bg-dourado/40 mx-auto mb-8" />
          <p className="font-inter italic text-cinza-texto text-sm sm:text-base leading-relaxed mb-3">
            O problema não é <span className="font-semibold text-azul-profundo">se</span> sua empresa terá um risco jurídico.
          </p>
          <p className="font-cinzel text-lg sm:text-xl lg:text-2xl font-bold text-azul-profundo mb-8 sm:mb-10">
            É <span className="text-dourado">quando</span> isso vai acontecer e se você estará preparado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block w-full sm:w-auto px-8 sm:px-10 py-4 text-sm uppercase tracking-wider"
          >
            Falar com especialista agora
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DepoimentosSection;
