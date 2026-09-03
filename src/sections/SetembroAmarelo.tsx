import { setembroAmarelo as texto } from '../config/content'
import { Reveal } from '../components/Reveal'

export function SetembroAmarelo() {
  return (
    <section id="setembro-amarelo" className="bg-creme py-20 md:py-28 lg:py-32" aria-labelledby="titulo-setembro">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-amarelo" />
              {texto.eyebrow}
            </p>
            <h2 id="titulo-setembro" className="titulo-secao mt-5 text-balance">
              {texto.titulo}
            </h2>
          </Reveal>

          <Reveal atraso={120} className="max-w-2xl">
            {texto.paragrafos.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 text-grafite last:mb-0">
                {p}
              </p>
            ))}

            <div className="mt-10 rounded-2xl border border-bege/70 bg-marfim p-6 md:p-8">
              <h3 className="flex items-start gap-3 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-tinta">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-block h-4 w-[3px] shrink-0 rounded-full bg-amarelo"
                />
                {texto.aviso.titulo}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-grafite">{texto.aviso.texto}</p>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.85rem] font-medium text-carvao">
                <a
                  href="tel:188"
                  className="underline decoration-amarelo decoration-2 underline-offset-4 transition-colors hover:text-verde"
                >
                  CVV · 188
                </a>
                <a
                  href="https://www.cvv.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-bege decoration-2 underline-offset-4 transition-colors hover:text-verde"
                >
                  cvv.org.br
                </a>
                <a
                  href="tel:192"
                  className="underline decoration-bege decoration-2 underline-offset-4 transition-colors hover:text-verde"
                >
                  SAMU · 192
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
