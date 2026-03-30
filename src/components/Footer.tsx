import logoBranco from "@/assets/logo-Branco.png";

const Footer = () => (
  <footer className="bg-footer-bg relative">
    <div className="gold-line" />
    <div className="container mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        {/* Logo */}
        <div className="text-center lg:text-left">
          <img src={logoBranco} alt="Marcelo Bueno Advocacia" className="h-10 w-auto scale-[2] origin-center lg:origin-left mb-1" />
          <p className="font-inter text-white/40 text-xs">Compliance Trabalhista Empresarial</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["Início", "Serviços", "Contato"].map((l) => (
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
