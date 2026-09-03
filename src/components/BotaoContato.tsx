import { useState } from 'react'
import { WHATSAPP_MENSAGEM, whatsappHref } from '../config/site'

type Variante = 'primario' | 'secundario' | 'claro' | 'linha'

type Props = {
  children: React.ReactNode
  variante?: Variante
  /** Mensagem pré-preenchida específica deste botão. */
  mensagem?: string
  className?: string
  /** Rótulo acessível quando o texto visível não for suficiente. */
  ariaLabel?: string
}

const base =
  'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 ease-out'

const variantes: Record<Variante, string> = {
  primario:
    'bg-verde text-marfim shadow-[0_1px_2px_rgba(35,32,29,0.08)] hover:bg-tinta hover:shadow-[0_6px_20px_rgba(35,32,29,0.14)]',
  secundario:
    'border border-bege bg-transparent text-carvao hover:border-verde hover:text-verde',
  claro: 'bg-marfim text-tinta hover:bg-creme',
  linha: 'border border-marfim/45 text-marfim hover:border-marfim hover:bg-marfim/10',
}

function IconeWhatsApp() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-[1.05em] w-[1.05em] shrink-0"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.47-3.63 8.11-8.09 8.11a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.06 8.06 0 0 1-1.24-4.3c0-4.47 3.63-8.1 8.09-8.1Zm-4.4 4.3c-.2 0-.53.08-.81.38-.28.3-1.07 1.04-1.07 2.53s1.1 2.94 1.25 3.14c.15.2 2.14 3.27 5.2 4.46 2.54.98 3.06.79 3.61.74.55-.05 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.64-.92-2.24-.24-.59-.48-.51-.67-.52h-.57Z" />
    </svg>
  )
}

/**
 * Botão de contato. Abre uma conversa no WhatsApp da Cristina.
 * Enquanto o número não estiver configurado em `src/config/site.ts`,
 * exibe um aviso discreto em vez de um link quebrado.
 */
export function BotaoContato({
  children,
  variante = 'primario',
  mensagem = WHATSAPP_MENSAGEM,
  className = '',
  ariaLabel,
}: Props) {
  const [avisando, setAvisando] = useState(false)
  const href = whatsappHref(mensagem)

  if (!href) {
    return (
      <span className={`inline-flex flex-col items-start gap-2 ${className}`}>
        <button
          type="button"
          onClick={() => setAvisando((v) => !v)}
          className={`${base} ${variantes[variante]} ${className}`}
          aria-label={ariaLabel}
          aria-describedby={avisando ? 'aviso-whatsapp' : undefined}
        >
          <IconeWhatsApp />
          {children}
        </button>
        {avisando && (
          <span id="aviso-whatsapp" role="status" className="text-xs text-nevoa">
            Número do WhatsApp ainda não configurado (src/config/site.ts).
          </span>
        )}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantes[variante]} ${className}`}
      aria-label={
        ariaLabel ??
        (typeof children === 'string'
          ? `${children} — abre uma conversa no WhatsApp`
          : 'Abrir conversa no WhatsApp')
      }
    >
      <IconeWhatsApp />
      {children}
    </a>
  )
}
