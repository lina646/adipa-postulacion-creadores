import {
  CheckCircle,
  XCircle,
  Clock,
  VideoCamera,
  Gift,
  ArrowDown,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple to-brand-cyan text-white">
        <div className="adipa-hero-orb h-72 w-72 -left-16 -top-16 text-white" />
        <div className="adipa-hero-orb adipa-hero-orb-slow h-56 w-56 right-0 top-24 text-white" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-white/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] ring-1 ring-white/25">
              Programa de creadores UGC
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Comparte tu experiencia real con ADIPA
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base">
              Si eres estudiante o profesional de psicología (o carreras afines), cuéntanos tu
              experiencia con un curso o seminario de ADIPA en un video corto y recibe acceso
              gratuito a un curso asincrónico.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="#postulacion"
              className="mt-8 inline-flex items-center gap-2 rounded-adipa bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:scale-[1.03] hover:bg-white/90"
            >
              Quiero postularme
              <ArrowDown size={18} weight="bold" className="adipa-cta-arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* De qué se trata */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-navy">¿De qué se trata esta colaboración?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/80">
            En ADIPA estamos trabajando con creadoras y creadores UGC — estudiantes y profesionales
            de psicología o carreras afines — que quieran compartir su experiencia real con
            nuestros cursos o seminarios a través de un video corto y orgánico.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/80">
            No es una vocería académica, ni una colaboración paga. Es un intercambio puntual y
            claro.
          </p>
        </Reveal>
      </section>

      {/* Qué ofrece / qué se pide */}
      <section className="bg-brand-soft py-14">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <Reveal>
            <div className="adipa-card adipa-card-interactive h-full p-6 transition-transform hover:-translate-y-1">
              <Gift size={28} className="text-brand-purple" />
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">¿Qué te ofrece ADIPA?</h3>
              <ul className="mt-3 space-y-2 text-[15px] text-brand-navy/80">
                <li>Acceso gratuito a un curso asincrónico de tu elección.</li>
                <li>
                  Posibilidad de volver a ser considerada/o para futuras colaboraciones UGC, según
                  cumplimiento y afinidad.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="adipa-card adipa-card-interactive h-full p-6 transition-transform hover:-translate-y-1">
              <VideoCamera size={28} className="text-brand-purple" />
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">¿Qué te pedimos a cambio?</h3>
              <ul className="mt-3 space-y-2 text-[15px] text-brand-navy/80">
                <li>2 videos verticales.</li>
                <li>Duración: entre 60 y 90 segundos.</li>
                <li>Lenguaje natural, cercano, con tu propio estilo.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contenido esperado vs no incluir */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-navy">Tipo de contenido esperado</h2>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="adipa-card adipa-card-interactive h-full p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 text-brand-navy">
                <CheckCircle size={22} weight="fill" className="text-brand-cyan" />
                <h3 className="text-base font-semibold">Sí incluye</h3>
              </div>
              <ul className="mt-3 space-y-2 text-[15px] text-brand-navy/80">
                <li>&ldquo;Tomé este curso sobre…&rdquo;</li>
                <li>&ldquo;Lo que más me gustó de ADIPA fue…&rdquo;</li>
                <li>&ldquo;Esto fue lo que me llevé de este curso/seminario&rdquo;</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="adipa-card adipa-card-interactive h-full p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 text-brand-navy">
                <XCircle size={22} weight="fill" className="text-brand-navy/60" />
                <h3 className="text-base font-semibold">No debe incluir</h3>
              </div>
              <ul className="mt-3 space-y-2 text-[15px] text-brand-navy/80">
                <li>Lenguaje comercial o de venta.</li>
                <li>Promesas de resultados clínicos.</li>
                <li>Mención de precios o descuentos.</li>
                <li>Guiones rígidos o frases obligatorias.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plazos */}
      <section className="bg-brand-soft py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="adipa-card flex items-start gap-4 p-6">
              <Clock size={28} className="mt-1 shrink-0 text-brand-purple" />
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">Plazos</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-navy/80">
                  Una vez activado tu cupón, tienes <strong>15 días en total</strong> para
                  completar el curso y enviarnos tus 2 videos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Postulación (Monday embed) */}
      <section id="postulacion" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-brand-navy">Postúlate aquí</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-brand-navy/80">
            Completa el formulario y nuestro equipo de Comunicaciones revisará tu postulación.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex justify-center">
            <iframe
              src="https://forms.monday.com/forms/embed/b98d918383c4bdde9cfaad7d1de693ce?r=use1"
              width="650"
              height="500"
              style={{ border: 0, boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)" }}
              className="w-full max-w-[650px] rounded-adipa"
            />
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3e8f3] py-8">
        <div className="mx-auto max-w-3xl px-4 text-center text-sm text-brand-navy/70 sm:px-6 lg:px-8">
          <p>¿Dudas? Escríbenos a <a className="underline" href="mailto:Lina@adipa.co">Lina@adipa.co</a></p>
        </div>
      </footer>
    </main>
  );
}
