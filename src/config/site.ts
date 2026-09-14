/* =============================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   Altere aqui: WhatsApp, nome, links e dados de contato.
   Nenhum outro arquivo precisa ser editado para isso.
   ============================================================= */

/* -------------------------------------------------------------
   >>> WHATSAPP — PREENCHER <<<
   Formato internacional, apenas dígitos:
   55 (Brasil) + DDD + número.  Ex.: '5511987654321'
   Enquanto estiver vazio, os botões mostram um aviso discreto
   em vez de abrirem um link inválido.
   ------------------------------------------------------------- */
export const WHATSAPP_NUMERO = '5554999562169' // 55 + DDD 54 + 99956-2169

/** Mensagem que já vem escrita quando a pessoa abre a conversa. */
export const WHATSAPP_MENSAGEM =
  'Olá, Cristina! Conheci o Programa Reencontro e gostaria de saber mais.'

export const site = {
  nome: 'Cristina Vedana',
  /** Nome completo — preencher quando informado. */
  nomeCompleto: 'Cristina Vedana',
  marca: 'Reencontro',
  tagline: '4 encontros para voltar a olhar para você.',

  /** URL de produção (ajuste ao publicar em domínio próprio). */
  url: 'https://reencontro-cristina.vercel.app',

  seo: {
    title: 'Reencontro · Cristina Vedana — 4 encontros para voltar a olhar para você',
    description:
      'Um espaço de acolhimento, escuta e cuidado para desacelerar, se ouvir e abrir espaço para novas escolhas. Conheça o Programa Reencontro com Cristina Vedana.',
    ogImage: '/og-image.jpg',
  },

  /** Links opcionais. Deixe vazio ('') para ocultar automaticamente. */
  links: {
    instagram: '', // ex.: 'https://instagram.com/usuario'
    email: '', // ex.: 'contato@exemplo.com'
  },

  /** Localização — opcional. Deixe vazio para ocultar. */
  local: {
    cidade: '', // ex.: 'São Paulo, SP'
    observacao: '', // ex.: 'Atendimentos presenciais e online'
  },
} as const

/* -------------------------------------------------------------
   Fotografias da Cristina
   Coloque os quatro arquivos em:  public/cristina/
   mantendo exatamente estes nomes.
   ------------------------------------------------------------- */
export const fotos = {
  hero: {
    src: '/cristina/cristina-hero.jpg',
    alt: 'Cristina, sorrindo, em um ambiente claro e tranquilo, junto a uma janela.',
  },
  sobre: {
    src: '/cristina/cristina-sobre.jpg',
    alt: 'Cristina em pé, sorrindo, em uma sala clara com poltronas e almofadas em tons de bege.',
  },
  editorial: {
    src: '/cristina/cristina-editorial.jpg',
    alt: 'Retrato em preto e branco de Cristina, com a mão apoiada no rosto, em um momento de reflexão.',
  },
  final: {
    src: '/cristina/cristina-final.jpg',
    alt: 'Retrato em preto e branco de Cristina, de braços cruzados, com expressão serena.',
  },
  closeup: {
    src: '/cristina/cristina-closeup.jpg',
    alt: 'Retrato close-up de Cristina Vedana, com um olhar acolhedor e sorriso suave.',
  },
  logo: {
    src: '/cristina/logo-vedana.png',
    alt: 'Cristina Vedana — Terapias Alternativas',
  },
} as const

/** Monta o link do WhatsApp. Retorna null se o número não foi configurado. */
export function whatsappHref(mensagem: string = WHATSAPP_MENSAGEM): string | null {
  const digitos = WHATSAPP_NUMERO.replace(/\D/g, '')
  if (digitos.length < 10) return null
  return `https://wa.me/${digitos}?text=${encodeURIComponent(mensagem)}`
}
