import { faq } from '../config/content'
import { site } from '../config/site'

/**
 * Dados estruturados (schema.org) construídos apenas com informações
 * reais já presentes no site — nada é inventado aqui.
 */
export function injetarDadosEstruturados() {
  const dados = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${site.marca} · ${site.nome}`,
      url: site.url,
      inLanguage: 'pt-BR',
      description: site.seo.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.itens.map((item) => ({
        '@type': 'Question',
        name: item.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: item.resposta },
      })),
    },
  ]

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(dados)
  document.head.appendChild(script)
}
