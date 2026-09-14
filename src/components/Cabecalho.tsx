import { useEffect, useRef, useState } from 'react'
import { navegacao } from '../config/content'
import { site, fotos } from '../config/site'
import { BotaoContato } from './BotaoContato'

export function Cabecalho() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)
  const botaoMenu = useRef<HTMLButtonElement>(null)
  const painel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Fecha com Esc, bloqueia a rolagem do fundo e devolve o foco ao botão.
  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false)
    }
    document.addEventListener('keydown', aoTeclar)
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    painel.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = anterior
      botaoMenu.current?.focus()
    }
  }, [aberto])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-verde focus:px-5 focus:py-3 focus:text-sm focus:text-marfim"
      >
        Ir para o conteúdo
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          rolou
            ? 'border-b border-bege/50 bg-marfim/92 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-editorial flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
          <a
            href="#inicio"
            className="flex items-center"
            aria-label={`${site.nome} — Terapeuta Integrativa, início`}
          >
            <picture>
              <source srcSet="/cristina/logo-vedana.webp" type="image/webp" />
              <img
                src={fotos.logo.src}
                alt={fotos.logo.alt}
                className="h-11 w-auto md:h-[3.2rem]"
                draggable={false}
              />
            </picture>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navegacao.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative whitespace-nowrap text-[0.8rem] font-medium text-grafite transition-colors duration-300 hover:text-tinta after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-dourado after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <BotaoContato className="!px-6 !py-3 !text-[0.7rem]">Entre em contato</BotaoContato>
          </div>

          <button
            ref={botaoMenu}
            type="button"
            onClick={() => setAberto(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-tinta lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
          >
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-4/6 bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        ref={painel}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[55] bg-marfim transition-opacity duration-300 lg:hidden ${
          aberto ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        hidden={!aberto}
      >
        <div className="container-editorial flex h-[4.5rem] items-center justify-between">
          <picture>
              <source srcSet="/cristina/logo-vedana.webp" type="image/webp" />
              <img
                src={fotos.logo.src}
                alt={fotos.logo.alt}
                className="h-10 w-auto"
                draggable={false}
              />
            </picture>
          <button
            type="button"
            onClick={() => setAberto(false)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-tinta"
            aria-label="Fechar menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Navegação"
          className="container-editorial flex flex-col gap-1 pt-6"
        >
          {navegacao.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setAberto(false)}
              className="border-b border-bege/50 py-4 font-display text-[1.65rem] text-tinta"
            >
              {item.rotulo}
            </a>
          ))}
          <div className="pt-8">
            <BotaoContato className="w-full">Entre em contato</BotaoContato>
          </div>
        </nav>
      </div>
    </>
  )
}
