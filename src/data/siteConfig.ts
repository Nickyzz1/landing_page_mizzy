export const siteConfig = {
  brand: {
    name: 'MIZZY',
    subtitle: 'Edição & Pós-Produção de Vídeo',
    editorName: 'Mizzy',
    legalName: 'Mizzy Studio Audiovisual MEI',
    cnpj: '12.345.678/0001-90',
    location: 'Curitiba - PR · Atendimento Remoto no Brasil & Exterior',
    postalCode: '80000-000',
    tagline: 'Criando histórias visuais impactantes por meio da edição de vídeo.',
  },
  contact: {
    whatsappNumber: '5541997744814',
    whatsappDisplay: '+55 (41) 99774-4814',
    whatsappDefaultMessage:
      'Olá! Vi o estúdio MIZZY e gostaria de solicitar uma amostra grátis de edição / conversar sobre um projeto.',
    email: 'contato@mizzystudio.com',
  },
  navigation: [
    { label: 'O Que Faço', href: '#engenharia' },
    { label: 'Obras', href: '#portfolio' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Dúvidas', href: '#faq' },
  ],
  hero: {
    eyebrow: 'ESTÚDIO DE EDIÇÃO DE ALTA RETENÇÃO PARA CRIADORES & MARCAS',
    titleLine1: 'Transforme gravações brutas em',
    titleHighlight: 'ativos que prendem a atenção.',
    titleLine2: 'Sem microgerenciar editores.',
    description:
      'Engenharia visual para Reels, Shorts e vídeos de autoridade. Cortes de precisão milimétrica, motion graphics proprietário e sound design de estúdio — entregues em até 48 horas.',
    primaryCta: 'Pedir Amostra Grátis de 30s',
    secondaryCta: 'Agendar Call de 15 Min',
    badges: ['Entrega em 48h', 'Fluxo Assíncrono (Zero Reuniões)'],
  },
  engineeringPillars: [
    {
      code: '01 / 0-3 SEGUNDOS',
      metric: '+74% Stop-Rate',
      title: 'Arquitetura de Hook Visual',
      description:
        'Quebra de padrão imediata nos primeiros 2 segundos. Usamos zoom dinâmico, enquadramento cirúrgico e títulos em movimento para travar o dedo de quem está rolando o feed.',
    },
    {
      code: '02 / RITMO & FLUIDEZ',
      metric: '-32% Abandono de Vídeo',
      title: 'Jump-Cuts Invisíveis (Zero Silêncio)',
      description:
        "Remoção cirúrgica de respirações longas, hesitações ('é...', 'hm...') e pausas mortas. O ritmo da fala fica magnético sem parecer artificial ou robótico.",
    },
    {
      code: '03 / IDENTIDADE VISUAL',
      metric: '85% Assistem sem Som',
      title: 'Tipografia Cinética & Motion',
      description:
        'Esqueça legendas genéricas de aplicativos automáticos. Criamos animações de texto, gráficos e callouts com a tipografia e as cores exatas da sua marca.',
    },
    {
      code: '04 / IMERSÃO DE ESTÚDIO',
      metric: '2.4x Valor Percebido',
      title: 'Sound Design & Color Grading',
      description:
        'Camadas sutis de efeitos sonoros (risers, whooshes, hits), mixagem de voz cristalina e correção de cor de cinema (Rec.709) que fazem um vídeo de celular parecer produção de R$ 20 mil.',
    },
  ],
  portfolioSelected: [
    {
      title: 'Edição Narrativa & Ritmo de Retenção',
      category: 'Vídeo Longo YouTube',
      aspect: '16:9 · Horizontal',
      description:
        'Decupagem limpa, eliminação cirúrgica de pausas, inserção de B-rolls contextuais e desenho de som que sustenta a atenção do primeiro ao último minuto.',
      videoPreview:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
    },
    {
      title: 'Reels & Shorts Magnéticos de Alta Retenção',
      category: 'Shorts & Reels',
      aspect: '9:16 · Vertical',
      description:
        'Ganchos visuais nos 3 primeiros segundos, legendas dinâmicas personalizadas e cortes ágeis na batida para travar o scroll das redes sociais.',
      videoPreview:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=85',
    },
    {
      title: 'VSL & Criativo de Alta Conversão',
      category: 'Comercial & VSL',
      aspect: '16:9 & 9:16 · Ads',
      description:
        'Construção focada em conversão e persuasão comercial: cada corte, elemento gráfico e acento sonoro reforça a autoridade e o roteiro para gerar vendas.',
      videoPreview:
        'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=85',
    },
  ],
  process48h: {
    title: 'Você grava. Nós fazemos todo o resto em 48h.',
    subtitle:
      'Desenhado para fundadores e criadores ocupados que não têm tempo para reuniões de alinhamento ou mensagens infinitas no WhatsApp.',
    steps: [
      {
        number: '01',
        tag: '2 Minutos do Seu Tempo',
        title: 'Suba os Arquivos Brutos',
        description:
          'Grave do celular ou câmera e solte na sua pasta exclusiva do Google Drive ou Frame.io. Não precisa escrever roteiro de edição.',
        stepFooter: 'STEP 01 // KINETIC OS',
      },
      {
        number: '02',
        tag: 'SLA Garantido em Contrato',
        title: 'Engenharia em 48 Horas',
        description:
          'Nossa direção de arte corta o vídeo, aplica a identidade da sua marca, cria animações, corrige a cor e masteriza o áudio.',
        stepFooter: 'STEP 02 // KINETIC OS',
      },
      {
        number: '03',
        tag: 'Revisões Ilimitadas',
        title: 'Aprovação em 1 Clique',
        description:
          'Você recebe o link, assiste no celular e aprova na hora — ou clica no segundo exato do vídeo para pedir qualquer ajuste fino.',
        stepFooter: 'STEP 03 // KINETIC OS',
      },
    ],
  },
  faqs: [
    {
      question: 'Como faço para enviar os vídeos brutos gravados?',
      answer:
        'É simples e leva menos de 2 minutos: você recebe acesso a uma pasta exclusiva compartilhada no Google Drive ou Frame.io. Basta subir os arquivos brutos do celular ou câmera quando terminar de gravar, sem burocracia.',
    },
    {
      question: 'Qual é o prazo de entrega dos vídeos prontos?',
      answer:
        'Nosso SLA padrão é de até 48 horas úteis para a primeira versão finalizada de vídeos curtos (Reels, TikToks e Shorts) e criativos. Para vídeos longos de YouTube ou demandas de alta complexidade, combinamos prazos fixos transparentes.',
    },
    {
      question: 'E se eu precisar de alterações ou ajustes finos?',
      answer:
        'Você conta com rodadas de revisão para garantir que o corte fique 100% alinhado com o seu estilo. Você pode apontar detalhes no segundo exato do vídeo e nós ajustamos rapidamente.',
    },
    {
      question: 'Como funciona o contrato e você emite Nota Fiscal MEI?',
      answer:
        'Sim! Possuo empresa formalizada com CNPJ ativo como Microempreendedor Individual (MEI) e emito Nota Fiscal de Serviços Eletrônica mensal para pessoas físicas ou jurídicas em todo o Brasil.',
    },
  ],
};

