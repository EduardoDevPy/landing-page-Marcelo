import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 80, prefix: "", suffix: "%", label: "Redução", desc: "de riscos jurídicos com compliance preventivo" },
  { value: 200, prefix: "R$", suffix: "k+", label: "Economizados", desc: "em média por cliente ao ano" },
  { value: 20, prefix: "", suffix: "", label: "Anos", desc: "de experiência jurídica empresarial" },
  { value: 100, prefix: "", suffix: "%", label: "Preventivo", desc: "agimos antes do problema acontecer" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const MetricCard = ({ metric, visible, index }: { metric: typeof metrics[0]; visible: boolean; index: number }) => {
  const count = useCountUp(metric.value, 1500, visible);

  return (
    <div
      className={`flex flex-col items-center text-center py-8 lg:py-12 px-4 sm:px-6 ${
        index < 2 ? "lg:border-b-0 border-b border-dourado/15" : ""
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease-out ${index * 150}ms, transform 0.7s ease-out ${index * 150}ms`,
      }}
    >
      <div className="font-cinzel text-4xl lg:text-6xl font-bold text-dourado leading-none mb-1">
        {metric.prefix}{count}{metric.suffix}
      </div>
      <div className="font-inter text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-dourado/50 mb-2 sm:mb-3 mt-1">
        {metric.label}
      </div>
      <div className="w-6 h-px bg-dourado/30 mb-2 sm:mb-3" />
      <p className="font-inter text-white/50 text-[11px] sm:text-xs leading-relaxed max-w-[110px] sm:max-w-[130px]">{metric.desc}</p>
    </div>
  );
};

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
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-dourado/15">
        {metrics.map((m, i) => (
          <MetricCard key={i} metric={m} visible={visible} index={i} />
        ))}
      </div>
      <div className="gold-line" />
    </section>
  );
};

export default ImpactNumbers;
