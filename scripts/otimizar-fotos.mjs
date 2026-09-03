/**
 * Otimiza as fotografias da Cristina para a web.
 *
 * Uso:
 *   node scripts/otimizar-fotos.mjs <pasta-com-os-originais>
 *
 * Espera encontrar na pasta de origem os arquivos definidos em ORIGENS
 * e gera, em public/cristina/, uma versão .webp e uma .jpg de cada uma.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const destino = resolve(raiz, 'public', 'cristina')

/** origem -> nome final no site (e largura máxima) */
const ORIGENS = [
  { de: 'CV1.jpeg', para: 'cristina-hero', largura: 1400 },
  { de: 'CV4.jpeg', para: 'cristina-sobre', largura: 1400 },
  { de: 'CV3.jpeg', para: 'cristina-editorial', largura: 1200 },
  { de: 'CV2.jpeg', para: 'cristina-final', largura: 1200 },
]

const origem = process.argv[2]
if (!origem) {
  console.error('Informe a pasta com as fotos originais.')
  process.exit(1)
}

await mkdir(destino, { recursive: true })

for (const { de, para, largura } of ORIGENS) {
  const entrada = resolve(origem, de)
  const base = sharp(entrada).rotate()
  const { width = largura } = await base.metadata()
  const alvo = Math.min(width, largura) // nunca ampliar além do original

  await sharp(entrada)
    .rotate()
    .resize({ width: alvo, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(resolve(destino, `${para}.webp`))

  await sharp(entrada)
    .rotate()
    .resize({ width: alvo, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true, progressive: true })
    .toFile(resolve(destino, `${para}.jpg`))

  console.log(`${de} -> ${para}.webp / ${para}.jpg (${alvo}px)`)
}
