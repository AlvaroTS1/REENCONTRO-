import { hero } from '../config/content'
import { fotos } from '../config/site'
import { BotaoContato } from '../components/BotaoContato'
import { Foto } from '../components/Foto'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-marfim pt-[4.5rem] md:pt-20">
      {/* textura suave de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[38rem] w-[38rem] rounded-full bg-creme/70 blur-3xl"
      />

      <div className="container-editorial relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-amarelo" />
            {hero.eyebrow}
          </p>

          <h1 className="titulo-display mt-6 text-balance">{hero.titulo}</h1>

          <p className="mt-7 max-w-lg text-[1.05rem] leading-relaxed text-grafite md:text-lg">
            {hero.subtitulo}
          </p>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <BotaoContato>{hero.ctaPrimario}</BotaoContato>
            <a
              href="#reencontro"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-bege px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-carvao transition-colors duration-300 hover:border-verde hover:text-verde"
            >
              {hero.ctaSecundario}
            </a>
          </div>

          <p className="mt-10 max-w-md border-l border-bege pl-5 font-display text-xl italic leading-snug text-grafite md:text-[1.4rem]">
            4 encontros para voltar a olhar para você.
          </p>
        </div>

        {/* Fotografia principal */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-4 hidden h-full w-full rounded-[2rem] border border-bege/70 md:block"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-creme shadow-[0_18px_60px_-30px_rgba(35,32,29,0.45)] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Foto
              src={fotos.hero.src}
              alt={fotos.hero.alt}
              posicao="50% 30%"
              prioridade
              sizes="(min-width: 1024px) 45vw, 92vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-tinta/12 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>

      <div className="container-editorial">
        <div className="linha-fina" />
      </div>
    </section>
  )
}
