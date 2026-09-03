/**
 * Gera os ícones do PWA, o favicon e a imagem de compartilhamento (Open Graph).
 * Execute com:  npm run icons
 */
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publico = resolve(raiz, 'public')
const icones = resolve(publico, 'icons')

const MARFIM = '#FBF9F5'
const VERDE = '#4F6152'
const DOURADO = '#A8834A'
const TINTA = '#23201D'

/** Monograma "R" sobre fundo creme. `escala` controla a margem (ícone maskable). */
const marca = (tamanho, escala = 0.62) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${tamanho}" height="${tamanho}" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${MARFIM}"/>
  <circle cx="256" cy="256" r="${Math.round(214 * (escala / 0.62))}" fill="none" stroke="${DOURADO}" stroke-opacity="0.55" stroke-width="3"/>
  <text x="256" y="256" fill="${VERDE}"
        font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(512 * escala)}"
        text-anchor="middle" dominant-baseline="central">R</text>
</svg>`

const favicon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="${MARFIM}"/>
  <text x="256" y="268" fill="${VERDE}"
        font-family="Georgia, 'Times New Roman', serif" font-size="330"
        text-anchor="middle" dominant-baseline="central">R</text>
</svg>`

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${MARFIM}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${DOURADO}" opacity="0.5"/>
  <text x="96" y="150" fill="#8A827B" font-family="Helvetica, Arial, sans-serif"
        font-size="22" letter-spacing="7">CRISTINA &#183; PROGRAMA REENCONTRO</text>
  <text x="96" y="290" fill="${TINTA}" font-family="Georgia, serif" font-size="74">Talvez esteja na hora</text>
  <text x="96" y="378" fill="${TINTA}" font-family="Georgia, serif" font-size="74">de voltar a olhar para você.</text>
  <line x1="96" y1="452" x2="360" y2="452" stroke="${DOURADO}" stroke-width="2" opacity="0.6"/>
  <text x="96" y="516" fill="${VERDE}" font-family="Georgia, serif" font-size="34"
        font-style="italic">4 encontros para voltar a olhar para você.</text>
</svg>`

const svg = (texto) => Buffer.from(texto)

await mkdir(icones, { recursive: true })

await Promise.all([
  writeFile(resolve(publico, 'favicon.svg'), favicon.trim()),
  sharp(svg(marca(192))).png().toFile(resolve(icones, 'icon-192.png')),
  sharp(svg(marca(512))).png().toFile(resolve(icones, 'icon-512.png')),
  sharp(svg(marca(192, 0.42))).png().toFile(resolve(icones, 'maskable-192.png')),
  sharp(svg(marca(512, 0.42))).png().toFile(resolve(icones, 'maskable-512.png')),
  sharp(svg(marca(180))).png().toFile(resolve(icones, 'apple-touch-icon.png')),
  sharp(svg(favicon)).resize(48, 48).png().toFile(resolve(publico, 'favicon.png')),
  sharp(svg(og)).jpeg({ quality: 86 }).toFile(resolve(publico, 'og-image.jpg')),
])

console.log('Ícones, favicon e og-image gerados em public/.')
