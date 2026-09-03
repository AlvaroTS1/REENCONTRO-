import { comoFunciona as texto } from '../config/content'
import { Reveal } from '../components/Reveal'

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-creme py-20 md:py-28 lg:py-32"
      aria-labelledby="titulo-como-funciona"
    >
      <div className="container-editorial">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{texto.eyebrow}</p>
          <h2 id="titulo-como-funciona" className="titulo-secao mt-5 text-balance">
            {texto.titulo}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-bege/70 bg-bege/70 md:grid-cols-3">
          {texto.passos.map((passo, i) => (
            <Reveal
              as="li"
              key={passo.numero}
              atraso={i * 110}
              className="bg-marfim p-8 md:p-9"
            >
              <span className="font-display text-[2.5rem] leading-none text-dourado">
                {passo.numero}
              </span>
              <h3 className="mt-5 font-display text-[1.55rem] text-tinta">{passo.titulo}</h3>
              <p className="mt-3 text-[0.98rem] text-grafite">{passo.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
