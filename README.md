# Reencontro · Cristina

Presença digital da Cristina e do **Programa Reencontro** — *4 encontros para voltar a olhar para você*.

PWA de página única, feito com React + Vite + TypeScript + Tailwind CSS. Sem banco de dados,
sem login, sem checkout: o objetivo é apresentar a Cristina e levar a pessoa ao WhatsApp.

---

## O que falta preencher

Estes são os únicos pontos com informação pendente. Nada foi inventado.

| O quê | Onde |
| --- | --- |
| **Número do WhatsApp** | `src/config/site.ts` → `WHATSAPP_NUMERO` |
| Biografia da Cristina | `src/config/content.ts` → `cristina.paragrafos` |
| Formação / credenciais (se houver) | `src/config/content.ts` → `cristina.credenciais` |
| Instagram e e-mail (opcionais) | `src/config/site.ts` → `site.links` |
| Cidade / observação (opcional) | `src/config/site.ts` → `site.local` |
| Domínio final | `src/config/site.ts` → `site.url`, `index.html`, `public/sitemap.xml` |

Enquanto o WhatsApp não for configurado, os botões não abrem link quebrado: mostram um aviso
discreto. Campos opcionais vazios simplesmente não aparecem no site.

### WhatsApp

```ts
// src/config/site.ts
export const WHATSAPP_NUMERO = '5511987654321' // 55 + DDD + número, só dígitos
```

Todos os CTAs abrem a conversa com a mensagem:
*"Olá, Cristina! Conheci o Programa Reencontro e gostaria de saber mais."*

---

## Comandos

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # testar o build (é aqui que o service worker funciona)
npm run icons    # regenera ícones, favicon e imagem de compartilhamento
```

## Fotografias

As quatro fotos ficam em `public/cristina/`, em `.webp` (moderno) e `.jpg` (fallback):

| Arquivo | Onde aparece |
| --- | --- |
| `cristina-hero` | Hero — foto colorida, ambiente claro |
| `cristina-sobre` | Seção "Cristina" — corpo inteiro, sala de atendimento |
| `cristina-editorial` | Seção "Reencontro" — retrato P&B contemplativo |
| `cristina-final` | Seção final — retrato P&B sereno, sobre fundo escuro |

Para trocar alguma foto, substitua o original e rode:

```bash
node scripts/otimizar-fotos.mjs "C:/caminho/para/as/fotos"
```

O script espera os nomes de origem definidos em `scripts/otimizar-fotos.mjs`. O enquadramento
de cada foto é ajustado pela propriedade `posicao` (object-position) no componente da seção.

## Estrutura

```
src/
  config/        site.ts (contato, fotos, SEO) e content.ts (todos os textos)
  components/    cabeçalho, botão de contato, foto, rodapé, contato flutuante
  sections/      uma seção por arquivo, na ordem da página
  hooks/         useReveal — animação de entrada discreta
  seo/           dados estruturados (schema.org)
  styles/        identidade visual (paleta e tipografia) em CSS
public/
  cristina/      as quatro fotografias
  icons/         ícones do PWA
scripts/         geração de ícones e otimização de fotos
```

## PWA

Manifest, service worker (Workbox via `vite-plugin-pwa`), ícones normais e maskable,
`theme-color`, funcionamento offline da shell e cache de fontes e imagens.
O service worker só roda no build — use `npm run preview` para testá-lo.

## Publicação na Vercel

O projeto não depende de domínio: funciona em `*.vercel.app` e aceita domínio próprio depois.

```bash
npx vercel        # pré-visualização
npx vercel --prod # produção
```

Ao definir um domínio próprio, atualize `site.url` em `src/config/site.ts`, as URLs
absolutas em `index.html` (canonical e Open Graph) e `public/sitemap.xml`.

---

## Cuidados de conteúdo (importantes)

O site **não** faz alegações médicas ou psicológicas. Não afirma tratar, prevenir ou curar
nada, não substitui acompanhamento profissional e não usa linguagem de marketing agressivo.
A seção de Setembro Amarelo é de conscientização e traz orientação clara para buscar ajuda
profissional (CVV 188, SAMU 192), separada da apresentação do programa.

Ao editar textos, mantenha esse cuidado.
