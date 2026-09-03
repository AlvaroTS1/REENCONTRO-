import { faq as texto } from '../config/content'
import { Reveal } from '../components/Reveal'

export function FAQ() {
  return (
    <section id="faq" className="bg-creme py-20 md:py-28 lg:py-32" aria-labelledby="titulo-faq">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">{texto.eyebrow}</p>
            <h2 id="titulo-faq" className="titulo-secao mt-5">
              {texto.titulo}
            </h2>
          </Reveal>

          <div className="border-t border-bege/70">
            {texto.itens.map((item, i) => (
              <Reveal key={item.pergunta} atraso={i * 70}>
                <details className="group border-b border-bege/70">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-[1.35rem] leading-snug text-tinta transition-colors duration-300 hover:text-verde md:text-[1.5rem] [&::-webkit-details-marker]:hidden">
                    {item.pergunta}
                    <span
                      aria-hidden="true"
                      className="relative mt-2.5 h-3 w-3 shrink-0 text-dourado"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-grafite">{item.resposta}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
