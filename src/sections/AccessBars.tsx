import { accessBars as texto } from '../config/content'
import { Reveal } from '../components/Reveal'

export function AccessBars() {
  return (
    <section
      id="access-bars"
      className="bg-marfim py-20 md:py-28 lg:py-32"
      aria-labelledby="titulo-access-bars"
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{texto.eyebrow}</p>
            <h2 id="titulo-access-bars" className="titulo-secao mt-5 text-balance">
              {texto.titulo}
            </h2>
          </Reveal>

          <Reveal atraso={110} className="max-w-2xl">
            <div className="space-y-5 text-grafite">
              {texto.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-creme p-6">
              <span
                aria-hidden="true"
                className="mt-1 inline-block h-4 w-[3px] shrink-0 rounded-full bg-verde-claro"
              />
              <p className="text-[0.92rem] leading-relaxed text-grafite">{texto.aviso}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
