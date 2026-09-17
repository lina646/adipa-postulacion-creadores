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
import { PhoneFrame } from "@/components/PhoneFrame";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple to-brand-cyan pb-24 text-white sm:pb-32">
        <div className="adipa-hero-orb h-72 w-72 -left-16 -top-16 text-white" />
        <div className="adipa-hero-orb adipa-hero-orb-slow h-56 w-56 right-0 top-24 text-white" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="text-center lg:text-left">
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
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base lg:mx-0">
                Si eres estudiante o profesional de psicología (o carreras afines), cuéntanos tu
                experiencia con un curso o seminario de ADIPA en un video corto y recibe acceso
                gratuito a un curso asincrónico.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href="#postulacion"
                  className="inline-flex items-center gap-2 rounded-adipa bg-white px-6 py-3 text-sm font-semibold text-brand-purple transition hover:scale-[1.03] hover:bg-white/90"
                >
                  Quiero postularme
                  <ArrowDown size={18} weight="bold" className="adipa-cta-arrow" />
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
          <Reveal delay={150}>
            <div className="adipa-avatar-float relative mx-auto flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
              <video
                src="/avatar-creadora.mp4"
                poster="/avatar-creadora-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Creadora de contenido saludando"
                className="relative h-full w-full rounded-full object-cover ring-4 ring-white/40 shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
        <HeroWave />
      </section>

      {/* De qué se trata */}
      <section className="relative overflow-hidden py-14">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-brand-navy">¿De qué se trata esta colaboración?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/80">
              En ADIPA buscamos estudiantes y profesionales de psicología o carreras afines que
              quieran compartir su experiencia real con nuestros cursos a través de videos cortos,
              creativos y auténticos. 🎥✨
            </p>
          </Reveal>
        </div>
      </section>

      {/* Qué ofrece / qué se pide */}
      <section className="relative overflow-hidden bg-brand-soft py-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
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
            <PhoneFrame>
              <video
                className="aspect-[9/16] w-full bg-black"
                controls
                preload="metadata"
                poster="/videos/ejemplo-1-poster.jpg"
              >
                <source src="/videos/ejemplo-1.mp4" type="video/mp4" />
              </video>
            </PhoneFrame>
          </Reveal>
          <Reveal delay={120}>
            <PhoneFrame>
              <video
                className="aspect-[9/16] w-full bg-black"
                controls
                preload="metadata"
                poster="/videos/ejemplo-2-poster.jpg"
              >
                <source src="/videos/ejemplo-2.mp4" type="video/mp4" />
              </video>
            </PhoneFrame>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* Contenido esperado vs no incluir */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-brand-navy">Tipo de contenido esperado</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-adipa bg-gradient-to-br from-brand-cyan to-brand-purple p-6 text-white shadow-lg transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl">
                    🎬
                  </span>
                  <h3 className="text-base font-semibold">Cómo iniciar tu video</h3>
                </div>
                <ul className="mt-4 space-y-3 text-[15px] text-white/90">
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
              <div className="h-full rounded-adipa bg-brand-navy p-6 text-white shadow-lg transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl">
                    🚫
                  </span>
                  <h3 className="text-base font-semibold">Lo que no debe incluir tu video</h3>
                </div>
                <ul className="mt-4 space-y-3 text-[15px] text-white/80">
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
      <section className="bg-brand-soft py-14">
        <div className="mx-auto grid max-w-3xl items-start gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative flex h-full items-start gap-4 overflow-hidden rounded-adipa bg-gradient-to-br from-brand-purple to-brand-cyan p-6 text-white shadow-lg">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Clock size={22} weight="bold" />
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold">Plazos</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/90">
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
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/adipa-logo.png" alt="ADIPA" className="h-6 w-auto sm:h-7" />
          <div className="flex flex-col items-center gap-4 sm:items-end">
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
        </div>
      </footer>
    </main>
  );
}
