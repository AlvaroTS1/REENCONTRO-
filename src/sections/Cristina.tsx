import { cristina as texto } from '../config/content'
import { fotos, site } from '../config/site'
import { Foto } from '../components/Foto'
import { Reveal } from '../components/Reveal'

export function Cristina() {
  const { cidade, observacao } = site.local

  return (
    <section id="cristina" className="bg-areia/60 py-20 md:py-28 lg:py-32" aria-labelledby="titulo-cristina">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">{texto.eyebrow}</p>
            <h2 id="titulo-cristina" className="titulo-secao mt-4">
              {texto.titulo}
            </h2>

            <blockquote className="mt-8 border-l-2 border-dourado-claro pl-6">
              <p className="font-display text-[1.45rem] italic leading-snug text-tinta md:text-[1.7rem]">
                “{texto.citacao}”
              </p>
            </blockquote>

            <div className="mt-8 space-y-5 text-grafite">
              {texto.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {texto.credenciais.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {texto.credenciais.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-bege bg-marfim px-4 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-grafite"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}

            {(cidade || observacao) && (
              <p className="mt-8 text-[0.9rem] text-nevoa">
                {[cidade, observacao].filter(Boolean).join(' · ')}
              </p>
            )}
          </Reveal>

          <Reveal atraso={100} className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.75rem] border border-bege/80 lg:block"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-creme shadow-[0_18px_60px_-32px_rgba(35,32,29,0.4)]">
                <Foto
                  src={fotos.sobre.src}
                  alt={fotos.sobre.alt}
                  posicao="50% 50%"
                  sizes="(min-width: 1024px) 45vw, 92vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
