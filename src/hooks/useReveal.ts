import { useEffect, useRef, useState } from 'react'

/**
 * Revela o elemento quando ele entra na viewport.
 * Respeita `prefers-reduced-motion` e degrada para conteúdo sempre visível
 * quando IntersectionObserver não está disponível.
 */
export function useReveal<T extends HTMLElement>(margem = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    const semMovimento =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisivel(true)
            observador.disconnect()
          }
        }
      },
      { rootMargin: margem, threshold: 0.08 },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [margem])

  return { ref, visivel }
}
