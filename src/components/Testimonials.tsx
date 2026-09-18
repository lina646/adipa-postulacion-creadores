import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

type Country = "Colombia" | "México";

const FLAG: Record<Country, string> = {
  Colombia: "🇨🇴",
  México: "🇲🇽",
};

const TESTIMONIALS: { name: string; country: Country; quote: string }[] = [
  {
    name: "Camila Ríos",
    country: "Colombia",
    quote:
      "Grabar mis videos fue más fácil de lo que pensé, sin guion ni presión. Y de paso me llevé un curso que sí me sirvió.",
  },
  {
    name: "Mateo Morales",
    country: "México",
    quote:
      "Me gustó poder contar mi experiencia con mis propias palabras. Todo el proceso fue rápido y claro.",
  },
  {
    name: "Valeria Gómez",
    country: "Colombia",
    quote:
      "No esperaba que fuera tan sencillo: grabé mis dos videos en una tarde y ya tenía acceso al curso.",
  },
  {
    name: "Rodrigo Fernández",
    country: "México",
    quote:
      "Fue chévere poder hablar de mi experiencia real con ADIPA, sin nada forzado ni impostado.",
  },
];

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="adipa-card adipa-card-interactive w-[300px] shrink-0 p-6 sm:w-[340px]">
      <Quotes size={24} weight="fill" className="text-brand-purple/40" />
      <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/80">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-navy">
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-base leading-none ring-1 ring-brand-navy/10"
          aria-hidden="true"
        >
          {FLAG[t.country]}
        </span>
        {t.name}
        <span className="font-normal text-brand-navy/60">— {t.country}</span>
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-brand-soft py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-brand-navy">
            Lo que dicen quienes ya crearon contenido con ADIPA
          </h2>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="adipa-marquee-mask mt-8 overflow-hidden">
          <div className="adipa-marquee-track flex w-max gap-6 px-4">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
