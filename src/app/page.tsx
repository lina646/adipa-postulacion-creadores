import {
  Clock,
  VideoCamera,
  Gift,
  ArrowDown,
  DownloadSimple,
  TiktokLogo,
  LinkedinLogo,
  YoutubeLogo,
  SpotifyLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { CountryBriefPicker } from "@/components/CountryBriefPicker";
import { HeroWave } from "@/components/HeroWave";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple to-brand-cyan pb-24 text-white sm:pb-32">
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#postulacion"
                className="inline-flex items-center gap-2 rounded-adipa bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:scale-[1.03] hover:bg-white/90"
              >
                Quiero postularme
                <ArrowDown size={18} weight="bold" className="adipa-cta-arrow" />
              </a>
              <a
                href="#ejemplos"
                className="inline-flex items-center gap-2 rounded-adipa border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Ver videos de ejemplo
              </a>
              <a
                href="/briefs/adipa-brief-colombia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-adipa border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <DownloadSimple size={18} weight="bold" />
                Brief
              </a>
            </div>
          </Reveal>
        </div>
        <HeroWave />
      </section>

      {/* De qué se trata */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-navy">¿De qué se trata esta colaboración?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/80">
            En ADIPA buscamos estudiantes y profesionales de psicología o carreras afines que
            quieran compartir su experiencia real con nuestros cursos a través de videos cortos,
            creativos y auténticos. 🎥✨
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

      {/* Videos de ejemplo */}
      <section id="ejemplos" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-brand-navy">
            Videos de ejemplo 🚀
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-brand-navy/80">
            Contenido real, cercano y auténtico.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <video
              className="mx-auto aspect-[9/16] w-full max-w-xs rounded-adipa bg-black shadow-lg"
              controls
              preload="metadata"
              poster="/videos/ejemplo-1-poster.jpg"
            >
              <source src="/videos/ejemplo-1.mp4" type="video/mp4" />
            </video>
          </Reveal>
          <Reveal delay={120}>
            <video
              className="mx-auto aspect-[9/16] w-full max-w-xs rounded-adipa bg-black shadow-lg"
              controls
              preload="metadata"
              poster="/videos/ejemplo-2-poster.jpg"
            >
              <source src="/videos/ejemplo-2.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* Contenido esperado vs no incluir */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-brand-navy">Tipo de contenido esperado</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-brand-navy/80">
              Así puedes armar tu video: cómo arrancarlo y qué evitar.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="adipa-card adipa-card-interactive h-full overflow-hidden p-6 transition-transform hover:-translate-y-1">
                <div className="-mx-6 -mt-6 mb-5 h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-xl">
                    🎬
                  </span>
                  <h3 className="text-base font-semibold text-brand-navy">Cómo iniciar tu video</h3>
                </div>
                <ul className="mt-4 space-y-3 text-[15px] text-brand-navy/80">
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✅</span>
                    <span>&ldquo;Tomé este curso sobre…&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✅</span>
                    <span>&ldquo;Lo que más me gustó de ADIPA fue…&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">✅</span>
                    <span>&ldquo;Esto fue lo que me llevé de este curso/seminario&rdquo;</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="adipa-card adipa-card-interactive h-full overflow-hidden p-6 transition-transform hover:-translate-y-1">
                <div className="-mx-6 -mt-6 mb-5 h-1.5 bg-brand-navy/25" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-xl">
                    🚫
                  </span>
                  <h3 className="text-base font-semibold text-brand-navy">Lo que no debe incluir tu video</h3>
                </div>
                <ul className="mt-4 space-y-3 text-[15px] text-brand-navy/80">
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">❌</span>
                    <span>Promesas de resultados clínicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">❌</span>
                    <span>Guiones rígidos o frases obligatorias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden="true">❌</span>
                    <span>Lenguaje violento.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Plazos + brief por país */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-start gap-6 sm:grid-cols-2">
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
          <Reveal delay={120}>
            <CountryBriefPicker />
          </Reveal>
        </div>
      </section>

      {/* Postulación (Monday embed) */}
      <section id="postulacion" className="bg-brand-soft py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-brand-navy">Postúlate aquí</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-brand-navy/80">
              Completa el formulario y nuestro equipo de Comunicaciones revisará tu postulación.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="adipa-card mt-8 flex justify-center overflow-hidden p-2 sm:p-3">
              <iframe
                src="https://forms.monday.com/forms/embed/b98d918383c4bdde9cfaad7d1de693ce?r=use1"
                width="650"
                height="500"
                style={{ border: 0 }}
                className="w-full max-w-[650px] rounded-adipa"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3e8f3] py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href="https://www.tiktok.com/@somosadipa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de ADIPA"
              className="text-brand-navy/60 transition hover:text-brand-purple"
            >
              <TiktokLogo size={22} weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de ADIPA"
              className="text-brand-navy/60 transition hover:text-brand-purple"
            >
              <LinkedinLogo size={22} weight="fill" />
            </a>
            <a
              href="https://www.youtube.com/@somosadipa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de ADIPA"
              className="text-brand-navy/60 transition hover:text-brand-purple"
            >
              <YoutubeLogo size={22} weight="fill" />
            </a>
            <a
              href="https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify de ADIPA"
              className="text-brand-navy/60 transition hover:text-brand-purple"
            >
              <SpotifyLogo size={22} weight="fill" />
            </a>
          </div>
          <p className="text-sm text-brand-navy/70">
            ¿Dudas? Escríbenos a <a className="underline" href="mailto:Lina@adipa.co">Lina@adipa.co</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
