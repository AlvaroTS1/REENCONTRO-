import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  className?: string
  /** Pequeno atraso em cascata, em milissegundos. */
  atraso?: number
  as?: ElementType
}

/** Envolve um bloco com uma revelação discreta ao entrar na viewport. */
export function Reveal({ children, className = '', atraso = 0, as: Tag = 'div' }: Props) {
  const { ref, visivel } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visivel ? 'is-visivel' : ''} ${className}`}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
