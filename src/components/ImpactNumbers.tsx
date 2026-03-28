import { useRef, useState, useEffect } from "react";

const metrics = [
  { number: "80%", label: "Redução", desc: "de riscos jurídicos com compliance preventivo" },
  { number: "R$200k+", label: "Economizados", desc: "em média por cliente ao ano" },
  { number: "90", label: "Dias", desc: "para transformar riscos em vantagem competitiva" },
  { number: "100%", label: "Preventivo", desc: "agimos antes do problema acontecer" },
];

const ImpactNumbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-azul-profundo relative overflow-hidden">
      <div className="gold-line" />
      {/* On mobile: 2x2 grid with dividers only between columns and between the two rows */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-dourado/15">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center py-8 lg:py-12 px-4 sm:px-6 ${
              i < 2 ? "lg:border-b-0 border-b border-dourado/15" : ""
            }`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.7s ease-out ${i * 150}ms, transform 0.7s ease-out ${i * 150}ms`,
            }}
          >
            <div className="font-cormorant text-4xl lg:text-7xl font-bold text-dourado leading-none mb-1">
              {m.number}
            </div>
            <div className="font-inter text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-dourado/50 mb-2 sm:mb-3 mt-1">
              {m.label}
            </div>
            <div className="w-6 h-px bg-dourado/30 mb-2 sm:mb-3" />
            <p className="font-inter text-white/50 text-[11px] sm:text-xs leading-relaxed max-w-[110px] sm:max-w-[130px]">{m.desc}</p>
          </div>
        ))}
      </div>
      <div className="gold-line" />
    </section>
  );
};

export default ImpactNumbers;
