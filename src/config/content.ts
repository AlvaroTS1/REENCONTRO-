/* =============================================================
   TEXTOS DO SITE
   Todo o conteúdo editorial fica reunido aqui.
   ============================================================= */

export const navegacao = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'setembro-amarelo', rotulo: 'Setembro Amarelo' },
  { id: 'reencontro', rotulo: 'Reencontro' },
  { id: 'como-funciona', rotulo: 'Como funciona' },
  { id: 'cristina', rotulo: 'Cristina' },
  { id: 'access-bars', rotulo: 'Access Bars' },
  { id: 'faq', rotulo: 'Perguntas' },
] as const

export const hero = {
  eyebrow: 'Setembro Amarelo',
  titulo: 'Talvez esteja na hora de voltar a olhar para você.',
  subtitulo:
    'Um espaço de acolhimento, escuta e cuidado para desacelerar, se ouvir e abrir espaço para novas escolhas.',
  ctaPrimario: 'Entre em contato',
  ctaSecundario: 'Conheça o Reencontro',
}

export const setembroAmarelo = {
  eyebrow: 'Setembro Amarelo',
  titulo: 'Você não precisa dar conta de tudo sozinho.',
  paragrafos: [
    'O Setembro Amarelo nos lembra de algo simples e, ao mesmo tempo, difícil de praticar: falar sobre o que sentimos, ouvir com atenção e permitir que alguém nos escute de verdade.',
    'Às vezes, cuidar começa simplesmente por parar, conversar e permitir-se ser ouvido. Não é preciso ter todas as respostas — nem estar no limite — para procurar um espaço de acolhimento.',
  ],
  aviso: {
    titulo: 'Se você está passando por um momento difícil',
    texto:
      'Situações de sofrimento intenso pedem apoio profissional. Procure um psicólogo, um psiquiatra ou um serviço de saúde. Em caso de emergência ou risco à vida, ligue 192 (SAMU). O CVV — Centro de Valorização da Vida — atende gratuitamente pelo 188, 24 horas por dia, todos os dias.',
  },
}

export const reencontro = {
  titulo: 'Reencontro',
  subtitulo: '4 encontros para voltar a olhar para você.',
  introducao:
    'O Reencontro nasceu de uma pergunta que aparece, de formas diferentes, em quase toda conversa sincera: como eu estou vivendo a minha vida — e onde eu estou dentro dela? Não é um pacote de sessões. É uma jornada de cuidado, conversa e reconexão, conduzida em quatro momentos.',
  ctaTexto: 'Quero conhecer o Reencontro',
  encontros: [
    {
      numero: '01',
      nome: 'Pausar',
      frase:
        'Antes de mudar qualquer coisa, precisamos conseguir ouvir o que está acontecendo dentro de nós.',
      descricao:
        'O primeiro encontro é de acolhimento e escuta. Conversamos sobre o momento atual, sobre aquilo que está pesando, o que tem ocupado os pensamentos e o que fez você perceber que precisa cuidar mais de si.',
      intencao: 'Sair do automático.',
    },
    {
      numero: '02',
      nome: 'Olhar',
      frase: 'Aquilo que não olhamos, muitas vezes continua conduzindo nossas escolhas.',
      descricao:
        'Um espaço para olhar para padrões, cobranças, pensamentos e situações que podem estar influenciando a maneira como você vive e se relaciona consigo mesma.',
      intencao:
        'Perceber o que precisa ser compreendido, ressignificado ou simplesmente deixado de carregar.',
    },
    {
      numero: '03',
      nome: 'Escolher',
      frase: 'Nem toda escolha precisa agradar o mundo. Algumas precisam fazer sentido para você.',
      descricao:
        'O que você quer? O que você não quer mais? Onde você tem se colocado em segundo plano? Que espaço você deseja ocupar na sua própria vida?',
      intencao: 'Recuperar consciência sobre suas escolhas.',
    },
    {
      numero: '04',
      nome: 'Recomeçar',
      frase:
        'Recomeçar não significa apagar quem você foi. Significa escolher com mais consciência quem você quer ser daqui para frente.',
      descricao:
        'Um momento para integrar o processo e olhar para os próximos passos. Não para dizer que tudo está resolvido, mas para reconhecer o caminho percorrido e aquilo que você deseja construir.',
      intencao: 'Sair do encontro com uma nova perspectiva sobre si mesma.',
    },
  ],
}

export const comoFunciona = {
  eyebrow: 'Como funciona',
  titulo: 'Simples, do primeiro contato ao último encontro.',
  passos: [
    {
      numero: '01',
      titulo: 'Você entra em contato',
      texto: 'Conversamos para entender se o Reencontro faz sentido para você.',
    },
    {
      numero: '02',
      titulo: 'Você realiza os encontros',
      texto: 'Cada encontro possui uma intenção dentro da jornada.',
    },
    {
      numero: '03',
      titulo: 'Você tem um espaço para você',
      texto:
        'A experiência combina conversa, acolhimento e as ferramentas utilizadas pela Cristina, incluindo Access Bars.',
    },
  ],
}

export const paraVoce = {
  titulo: 'Talvez o Reencontro seja para você se...',
  itens: [
    'você sente que está vivendo no automático;',
    'coloca todo mundo antes de si;',
    'sente necessidade de desacelerar;',
    'está diante de escolhas importantes;',
    'gostaria de reservar um espaço para você;',
    'sente que precisa parar um pouco;',
    'quer voltar a ouvir aquilo que realmente importa para você.',
  ],
  fechamento: 'Você não precisa esperar chegar ao seu limite para começar a cuidar de si.',
}

export const cristina = {
  eyebrow: 'Quem conduz',
  titulo: 'Cristina',
  citacao:
    'Eu acredito que, muitas vezes, o primeiro passo para uma mudança é simplesmente ter um espaço onde possamos ser nós mesmos.',
  /* ---------------------------------------------------------
     >>> BIOGRAFIA — PREENCHER <<<
     Nada aqui foi inventado. Substitua os textos abaixo pelas
     informações reais da Cristina (trajetória, formação,
     experiência). Cada item da lista vira um parágrafo.
     --------------------------------------------------------- */
  paragrafos: [
    'Cristina recebe pessoas que sentem necessidade de parar, conversar e olhar para a própria vida com mais calma. Seu trabalho reúne acolhimento, escuta e as ferramentas que utiliza em seus atendimentos, entre elas o Access Bars.',
    '[Espaço reservado para a trajetória da Cristina — como começou, o que a motiva e como conduz os atendimentos.]',
    '[Espaço reservado para formação e experiência, conforme as informações fornecidas por ela.]',
  ],
  /** Deixe a lista vazia enquanto as informações não forem confirmadas. */
  credenciais: [] as string[],
}

export const accessBars = {
  eyebrow: 'A ferramenta',
  titulo: 'O que é Access Bars?',
  paragrafos: [
    'Access Bars é uma prática da abordagem Access Consciousness que utiliza toques suaves em pontos específicos da cabeça. A pessoa permanece deitada e vestida, em um ambiente tranquilo, durante a sessão.',
    'Dentro do Reencontro, o Access Bars é uma das ferramentas utilizadas — não o centro da experiência. O que sustenta a jornada é a conversa, a escuta e o cuidado ao longo dos quatro encontros.',
  ],
  aviso:
    'A experiência oferecida não substitui acompanhamento médico, psicológico ou psiquiátrico quando necessário.',
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  titulo: 'Antes de conversarmos',
  itens: [
    {
      pergunta: 'Preciso conhecer Access Bars?',
      resposta:
        'Não. A experiência pode ser conhecida sem qualquer conhecimento prévio da técnica. Tudo é explicado com calma no primeiro encontro.',
    },
    {
      pergunta: 'Como são os encontros?',
      resposta:
        'São encontros individuais, estruturados dentro da jornada Pausar, Olhar, Escolher e Recomeçar. Cada um tem uma intenção própria dentro do processo.',
    },
    {
      pergunta: 'Preciso saber exatamente o que quero mudar?',
      resposta:
        'Não. O Reencontro também é um espaço para perceber o que está acontecendo antes de decidir quais caminhos seguir.',
    },
    {
      pergunta: 'Access Bars substitui acompanhamento médico ou psicológico?',
      resposta:
        'Não. A experiência não substitui acompanhamento médico, psicológico ou psiquiátrico quando necessário.',
    },
    {
      pergunta: 'Como faço para saber valores e disponibilidade?',
      resposta:
        'Entre em contato diretamente com a Cristina pelo WhatsApp. Ela conversa com você e explica tudo com tranquilidade.',
    },
  ],
}

export const ctaFinal = {
  titulo: 'E se você começasse por você?',
  paragrafos: [
    'Às vezes, o primeiro passo não precisa ser uma grande mudança.',
    'Pode ser simplesmente parar. Respirar. Se ouvir.',
    'E permitir-se olhar novamente para si.',
  ],
  marca: 'Reencontro',
  subtitulo: '4 encontros para voltar a olhar para você.',
  cta: 'Entre em contato',
}
