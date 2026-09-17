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
      "¡Me encantó el curso de Adipa! Aprendí un montón y el contenido fue demasiado bueno y práctico. Además, me fascinó crear contenido para su comunidad. ¡100% recomendado!",
  },
  {
    name: "Mateo Morales",
    country: "México",
    quote:
      "¡Qué joya de curso! Estuvo demasiado bueno y aprendí muchísimo desde el día uno. Crear contenido para Adipa estuvo padrísimo, la experiencia fue increíble.",
  },
  {
    name: "Valeria Gómez",
    country: "Colombia",
    quote:
      "Hacer este curso con Adipa fue la mejor decisión; la calidad es brutal y aprendí un montón. Me encantó crear contenido para ellos, ¡lo disfrutarán muchísimo!",
  },
  {
    name: "Rodrigo Fernández",
    country: "México",
    quote:
      "El curso rebasó mis expectativas, estuvo demasiado bueno y aprendí un buen de herramientas. Me fascinó colaborar creando contenido para Adipa. ¡De 10!",
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
