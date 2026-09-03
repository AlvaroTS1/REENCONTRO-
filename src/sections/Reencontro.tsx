import { reencontro as texto } from '../config/content'
import { fotos } from '../config/site'
import { BotaoContato } from '../components/BotaoContato'
import { Foto } from '../components/Foto'
import { Reveal } from '../components/Reveal'

export function Reencontro() {
  return (
    <section id="reencontro" className="bg-marfim py-20 md:py-28 lg:py-32" aria-labelledby="titulo-reencontro">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Coluna editorial */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">O programa</p>
              <h2
                id="titulo-reencontro"
                className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.02] tracking-tight text-tinta"
              >
                {texto.titulo}
              </h2>
              <p className="mt-4 font-display text-[1.35rem] italic text-verde md:text-[1.5rem]">
                {texto.subtitulo}
              </p>
              <p className="mt-7 max-w-md text-grafite">{texto.introducao}</p>
            </Reveal>

            <Reveal atraso={140}>
              <div className="mt-10 aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-tinta lg:aspect-[5/6]">
                <Foto
                  src={fotos.editorial.src}
                  alt={fotos.editorial.alt}
                  posicao="50% 22%"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                />
              </div>
            </Reveal>

            <Reveal atraso={80} className="mt-10 hidden lg:block">
              <BotaoContato mensagem="Olá, Cristina! Gostaria de conhecer o Programa Reencontro.">
                {texto.ctaTexto}
              </BotaoContato>
            </Reveal>
          </div>

          {/* Os quatro encontros */}
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 hidden h-[calc(100%-4rem)] w-px bg-bege/70 sm:block"
            />
            {texto.encontros.map((encontro, i) => (
              <Reveal as="li" key={encontro.numero} atraso={i * 90} className="relative sm:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-3 hidden h-2.5 w-2.5 rounded-full border border-bege bg-marfim sm:block"
                />
                <article className="border-b border-bege/60 pb-10 pt-10 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[2.75rem] leading-none text-dourado">
                      {encontro.numero}
                    </span>
                    <h3 className="font-sans text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-tinta">
                      {encontro.nome}
                    </h3>
                  </div>

                  <p className="mt-5 font-display text-[1.4rem] italic leading-snug text-carvao md:text-[1.6rem]">
                    {encontro.frase}
                  </p>

                  <p className="mt-5 text-grafite">{encontro.descricao}</p>

                  <p className="mt-5 text-[0.9rem] text-nevoa">
                    <span className="font-medium uppercase tracking-[0.14em] text-verde">
                      Intenção
                    </span>
                    <span aria-hidden="true" className="mx-2.5">
                      ·
                    </span>
                    {encontro.intencao}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12 lg:hidden">
          <BotaoContato
            className="w-full"
            mensagem="Olá, Cristina! Gostaria de conhecer o Programa Reencontro."
          >
            {texto.ctaTexto}
          </BotaoContato>
        </Reveal>
      </div>
    </section>
  )
}
