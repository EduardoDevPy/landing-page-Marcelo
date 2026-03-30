import { AlertTriangle, Scale, ShieldOff, TrendingDown, Lock, FileX, type LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

const problems: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: AlertTriangle, title: "Ações trabalhistas inesperadas", desc: "Processos surgem sem aviso e podem gerar condenações que impactam diretamente o caixa da empresa" },
  { icon: Scale, title: "Legislação em constante mudança", desc: "Novas regras surgem e, sem atualização jurídica, sua empresa acumula riscos sem perceber" },
  { icon: ShieldOff, title: "Patrimônio exposto", desc: "Sem estrutura adequada, seus bens pessoais podem ser atingidos por dívidas e processos" },
  { icon: TrendingDown, title: "Processos drenam recursos", desc: "Cada demanda judicial representa tempo, dinheiro e energia desviados do crescimento" },
  { icon: Lock, title: "Insegurança para crescer", desc: "Sem segurança jurídica, decisões como contratar, expandir ou investir se tornam riscos" },
  { icon: FileX, title: "Contratos frágeis", desc: "Documentos genéricos abrem brechas que podem gerar prejuízos em conflitos e rescisões" },
];

const RealidadeSection = () => (
  <section id="realidade" className="section-light pt-14 lg:pt-28 relative overflow-hidden">

    {/* Orbs decorativos */}
    <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(218, 68%, 14%, 0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(218, 68%, 14%, 0.07) 0%, transparent 70%)", filter: "blur(50px)" }} />

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge-gold mb-4 inline-block">A Realidade</span>
          <h2 className="font-cinzel text-xl sm:text-2xl lg:text-4xl font-bold text-azul-profundo">
            Sua empresa está juridicamente protegida ou você só ainda não teve problema?
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-premium p-5 border-t-[3px] border-t-dourado border-l-2 h-full" style={{ borderLeftColor: "hsl(218, 68%, 14%, 0.15)" }}>
                <div className="mb-3">
                  <Icon size={20} style={{ color: "hsl(43, 50%, 54%)" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-azul-profundo mb-2">{p.title}</h3>
                <p className="font-inter text-cinza-texto text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>

    {/* Full-width CTA */}
    <AnimatedSection>
      <div className="section-dark py-10 lg:py-16 text-center px-4 sm:px-6">
        <p className="font-cinzel text-dourado text-base sm:text-lg lg:text-xl mb-3">
        Ignorar riscos custa caro. Antecipar protege o que você construiu.
        </p>
        <h3 className="font-cinzel text-lg sm:text-xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
          Transforme riscos jurídicos em decisões seguras e crescimento estruturado.
        </h3>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block px-8 sm:px-10 py-4 text-sm uppercase tracking-wider"
        >
          Quero Proteger Minha Empresa
        </a>
      </div>
    </AnimatedSection>
  </section>
);

export default RealidadeSection;
