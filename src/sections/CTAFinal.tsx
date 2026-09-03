import { ctaFinal as texto } from '../config/content'
import { fotos } from '../config/site'
import { BotaoContato } from '../components/BotaoContato'
import { Foto } from '../components/Foto'
import { Reveal } from '../components/Reveal'

export function CTAFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-tinta text-marfim">
      <div className="container-editorial">
        <div className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          <Reveal>
            <h2 className="font-display text-[clamp(2.05rem,5vw,3.5rem)] leading-[1.06] text-marfim text-balance">
              {texto.titulo}
            </h2>

            <div className="mt-8 max-w-md space-y-2 text-[1.05rem] leading-relaxed text-marfim/75">
              {texto.paragrafos.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-marfim/18 pt-8">
              <p className="font-display text-[2rem] leading-none tracking-wide text-marfim md:text-[2.4rem]">
                {texto.marca}
              </p>
              <p className="mt-3 font-display text-[1.2rem] italic text-marfim/70">
                {texto.subtitulo}
              </p>

              <div className="mt-9">
                <BotaoContato variante="claro" className="w-full sm:w-auto">
                  {texto.cta}
                </BotaoContato>
              </div>
            </div>
          </Reveal>

          <Reveal atraso={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-carvao">
              <Foto
                src={fotos.final.src}
                alt={fotos.final.alt}
                posicao="50% 24%"
                sizes="(min-width: 1024px) 45vw, 92vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-tinta/45 via-transparent to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
