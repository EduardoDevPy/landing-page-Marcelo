const Footer = () => (
  <footer className="bg-footer-bg relative">
    <div className="gold-line" />
    <div className="container mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        {/* Logo */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
            <span className="font-cormorant text-2xl font-bold text-dourado">MB</span>
            <div>
              <span className="font-inter text-sm font-semibold tracking-[0.15em] text-white/90 uppercase block leading-tight">
                Marcelo Bueno
              </span>
              <span className="font-inter text-[10px] tracking-[0.3em] text-white/50 uppercase block">
                Advocacia
              </span>
            </div>
          </div>
          <p className="font-inter text-white/40 text-xs">Compliance Trabalhista Empresarial</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Início", "Serviços", "Contato", "Política de Privacidade"].map((l) => (
            <a
              key={l}
              href={l === "Política de Privacidade" ? "#" : `#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-inter text-xs text-white/50 hover:text-dourado transition-colors uppercase tracking-wider"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-inter text-white/40 text-xs text-center lg:text-right">
          © 2026 Marcelo Bueno Advocacia.<br />Todos os direitos reservados.
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="font-inter text-white/30 text-[10px] text-center px-2">
          Site de caráter exclusivamente informativo, conforme o Código de Ética e Disciplina da OAB.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
