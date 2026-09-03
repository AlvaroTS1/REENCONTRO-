import { useState } from 'react'

type Props = {
  /** Caminho do .jpg. A versão .webp é usada automaticamente quando existe. */
  src: string
  alt: string
  className?: string
  /** Enquadramento (object-position). Ex.: '50% 30%' para valorizar o rosto. */
  posicao?: string
  /** A foto do Hero deve carregar com prioridade. */
  prioridade?: boolean
  sizes?: string
}

/**
 * Fotografia com enquadramento controlado e formato moderno (WebP) com
 * fallback em JPEG. Se o arquivo ainda não estiver em `public/cristina/`,
 * mostra um marcador discreto em vez de uma imagem quebrada.
 */
export function Foto({
  src,
  alt,
  className = '',
  posicao = '50% 35%',
  prioridade = false,
  sizes,
}: Props) {
  const [falhou, setFalhou] = useState(false)
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp')

  if (falhou) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-areia via-creme to-bege ${className}`}
      >
        <span className="px-6 text-center font-display text-2xl text-nevoa/80">
          Fotografia
          <span className="mt-1 block font-sans text-[0.7rem] uppercase tracking-[0.2em] text-nevoa/70">
            {src.split('/').pop()}
          </span>
        </span>
      </div>
    )
  }

  return (
    <picture className="block h-full w-full">
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectPosition: posicao }}
        loading={prioridade ? 'eager' : 'lazy'}
        decoding={prioridade ? 'sync' : 'async'}
        {...(prioridade ? { fetchpriority: 'high' } : {})}
        sizes={sizes}
        draggable={false}
        onError={() => setFalhou(true)}
      />
    </picture>
  )
}
