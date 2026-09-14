import { paraVoce as texto } from '../config/content'
import { fotos } from '../config/site'
import { Foto } from '../components/Foto'
import { Reveal } from '../components/Reveal'

export function ParaVoce() {
  return (
    <section className="bg-marfim py-20 md:py-28 lg:py-32" aria-labelledby="titulo-para-voce">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 id="titulo-para-voce" className="titulo-secao max-w-md text-balance">
                {texto.titulo}
              </h2>
            </Reveal>

            <Reveal atraso={160}>
              <div className="mt-10 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-creme shadow-[0_12px_40px_-20px_rgba(35,32,29,0.3)]">
                <Foto
                  src={fotos.closeup.src}
                  alt={fotos.closeup.alt}
                  posicao="50% 25%"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <ul className="space-y-0">
              {texto.itens.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  atraso={i * 70}
                  className="flex items-start gap-4 border-b border-bege/60 py-4 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-dourado-claro"
                  />
                  <span className="text-[1.02rem] text-carvao">{item}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal atraso={120}>
              <p className="mt-10 font-display text-[1.5rem] italic leading-snug text-verde md:text-[1.85rem]">
                {texto.fechamento}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
