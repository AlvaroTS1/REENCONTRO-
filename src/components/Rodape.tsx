import { navegacao } from '../config/content'
import { site } from '../config/site'

export function Rodape() {
  const ano = new Date().getFullYear()
  const { instagram, email } = site.links

  return (
    <footer className="bg-tinta text-marfim/70">
      <div className="container-editorial border-t border-marfim/12 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-wide text-marfim">{site.nome}</p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-marfim/60">
              Programa {site.marca}
            </p>
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed">{site.tagline}</p>
          </div>

          <nav aria-label="Navegação do rodapé" className="grid grid-cols-2 gap-x-10 gap-y-2.5">
            {navegacao.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[0.88rem] transition-colors duration-300 hover:text-marfim"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>

          {(instagram || email) && (
            <div className="flex flex-col gap-2.5">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.88rem] transition-colors duration-300 hover:text-marfim"
                >
                  Instagram
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-[0.88rem] transition-colors duration-300 hover:text-marfim"
                >
                  {email}
                </a>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-marfim/12 pt-7 text-[0.78rem] leading-relaxed text-marfim/60">
          <p className="max-w-2xl">
            A experiência oferecida não substitui acompanhamento médico, psicológico ou psiquiátrico
            quando necessário. Em caso de emergência, ligue 192. O CVV atende gratuitamente pelo 188,
            24 horas por dia.
          </p>
          <p className="mt-5">
            © {ano} {site.nomeCompleto}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
