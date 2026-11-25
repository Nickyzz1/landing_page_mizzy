export interface Product {
  id: number;
  cat: 'frota' | 'conectividade' | 'temperatura' | 'seguranca';
  name: string;
  version: string | null;
  acompanha: string | null;
  obs: string | null;
  tags: string[];
  desc: string;
}

export interface ProductCategory {
  id: string;
  label: string;
  icon: string;
}

export interface EngineeringCapability {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export const siteMeta = {
  title: 'Niatron | Equipamentos Eletro-Eletrônicos e Soluções Industriais',
  description: 'Fabricante brasileira de hardware embarcado automotivo, teclados de macros ANTT, identificadores de motorista RFID, triplicadores RS-232 e sensores para frotas industriais desde 2005.',
  siteUrl: 'https://niatron.com.br',
  locale: 'pt_BR',
};

export const company = {
  tradeName: 'Niatron',
  corporateName: 'Niatron Indústria e Comércio de Equipamentos Eletrônicos Ltda.',
  foundedYear: 2005,
  tagline: 'Equipamentos Eletro-Eletrônicos e Soluções Industriais',
  address: {
    street: 'Rua Prof. Francisco Zardo, 340',
    neighborhood: 'Santa Felicidade',
    city: 'Curitiba',
    state: 'PR',
    postalCode: '82015-000',
    country: 'Brasil',
    formatted: 'Rua Prof. Francisco Zardo, 340 - Santa Felicidade, Curitiba - PR, CEP 82015-000',
  },
  phone: '(41) 3027-5711',
  phoneClean: '4130275711',
  email: 'niatron@niatron.com.br',
  whatsapp: '554130275711',
  whatsappMessage: 'Olá! Gostaria de mais informações sobre os equipamentos da Niatron.',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.0935824968846!2d-49.3404764!3d-25.3995834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce14467008cf9%3A0xe96350f968fc2230!2sR.%20Prof.%20Francisco%20Zardo%2C%20340%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082015-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
};

export const navigationLinks = [
  { label: 'Anatomia', href: '#anatomia' },
  { label: 'Componentes', href: '#componentes' },
  { label: 'Engenharia & Fábrica', href: '#engenharia' },
  { label: 'Contato', href: '#contato' },
  { label: 'Produtos', href: '/produtos' },
];

export const productCategories: Record<string, ProductCategory> = {
  frota: {
    id: 'frota',
    label: 'Frotas & Cabine',
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 13h2M11 13h2M15 13h2M7 17h10"/>',
  },
  conectividade: {
    id: 'conectividade',
    label: 'Conectividade Serial',
    icon: '<path d="M6 9l6 6 6-6M6 15l6 6 6-6"/><circle cx="12" cy="5" r="2"/>',
  },
  temperatura: {
    id: 'temperatura',
    label: 'Temperatura & Umidade',
    icon: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><circle cx="11.5" cy="17.5" r="1.5" fill="currentColor"/>',
  },
  seguranca: {
    id: 'seguranca',
    label: 'Segurança & Sensores',
    icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
  },
};

export const products: Product[] = [
  {
    id: 1,
    cat: 'frota',
    name: 'Identificador de Motorista',
    version: 'RFID Versões 13,56Mhz e 125Khz',
    acompanha: '01 cartão e 01 Chicote',
    obs: 'Bivolt automático (12V / 24V)',
    tags: ['RFID', 'RS-232', '1-Wire', 'TTL'],
    desc: 'Entrada para sinal Pós-Chave, solicita identificação após ligar e/ou desligar a ignição do veículo. Sinalização sonora por buzzer interno. Possui saída para bloqueio da ignição. Comunicação RS-232, 1-Wire, TTL.',
  },
  {
    id: 2,
    cat: 'frota',
    name: 'Teclado de Macros',
    version: 'Com RFID Versões 13,56Mhz e 125Khz ou sem RFID',
    acompanha: '01 cartão e 01 Suporte',
    obs: 'Bivolt automático (12V/24V)',
    tags: ['LCD', 'RS-232', '1-Wire', 'TTL'],
    desc: 'Macros configuráveis, uso em Jornada de Trabalho, ANTT, Checklist, envia e recebe mensagens no display. Com teclado de membrana, display em LCD e sinalização sonora; comunicação RS-232, 1-Wire, TTL; possui saída para bloqueio da ignição.',
  },
  {
    id: 3,
    cat: 'frota',
    name: 'Teclado LITE',
    version: null,
    acompanha: 'Com chicote de 02 metros',
    obs: 'Bivolt automático (12V/24V).',
    tags: ['RS-232', 'Teclado de membrana'],
    desc: 'Identificação do Motorista através de digitação do ID. Com teclado de membrana, sinalização sonora por buzzer interno, tamanho de fácil manipulação; possui saída para bloqueio da ignição. Comunicação RS-232, protocolo configurável.',
  },
  {
    id: 4,
    cat: 'conectividade',
    name: 'Triplicador RS-232',
    version: null,
    acompanha: 'Acompanha 01 Chicote',
    obs: 'Bivolt Automático (12V/24V).',
    tags: ['RS-232', '3 periféricos'],
    desc: 'Comunicação Serial RS-232. Permite ligar até 03 periféricos na porta RS-232 do rastreador. Aceita qualquer baud rate.',
  },
  {
    id: 5,
    cat: 'conectividade',
    name: 'Triplicador Smart RS-232',
    version: null,
    acompanha: 'Acompanha 01 Chicote',
    obs: 'Bivolt Automático (12V/24V).',
    tags: ['RS-232', '3 periféricos', 'Baud rate configurável'],
    desc: 'Comunicação Serial RS-232. Permite ligar até 03 periféricos na porta RS-232 do rastreador. Baud rate configurável em cada porta. Permite conversão de protocolo e funções customizadas.',
  },
  {
    id: 6,
    cat: 'seguranca',
    name: 'Block Power Bivolt',
    version: null,
    acompanha: 'Acompanha 01 Chicote',
    obs: 'Bivolt automático (12V / 24V).',
    tags: ['Contatos NA/NF', 'Corte na ignição'],
    desc: 'De um tamanho compacto e versátil em formato de relé automotivo, facilitando a instalação em qualquer tipo de veículo. Construção mecânica e elétrica robusta, protegido contra inversão de polaridade, curto e surtos elétricos, projetado para desempenhar a função de corte a seco na ignição, possui contatos NA/NF.',
  },
  {
    id: 7,
    cat: 'seguranca',
    name: 'Buzzer Bivolt',
    version: null,
    acompanha: null,
    obs: 'Tensão (07V - 30V).',
    tags: ['07V a 30V'],
    desc: 'Ideal para sinalização automotiva, alimentação de 07V até 30V, tamanho reduzido para facilitar a instalação.',
  },
  {
    id: 8,
    cat: 'seguranca',
    name: 'Sensor de Desengate Eletrônico',
    version: 'de 01 ou 02 ramais',
    acompanha: null,
    obs: 'Bivolt automático (12V / 24V).',
    tags: ['10A', 'LED ou incandescente'],
    desc: 'Identifica e sinaliza o engate e desengate de carreta ou semi-reboque ao veículo, através dos circuitos elétricos das setas do veículo. Proporciona melhor controle da frota pelo sistema de rastreamento; suporta corrente de 10A no circuito das setas. Proteção contra surtos elétricos, curto-circuito e inversão de polaridade. Compatível com lâmpadas LED ou incandescentes.',
  },
  {
    id: 9,
    cat: 'seguranca',
    name: 'Trava-Baú',
    version: null,
    acompanha: null,
    obs: 'Bivolt automático (08V - 32V).',
    tags: ['RS-232', 'Nível lógico', 'Pulsos'],
    desc: 'Trava motorizada para porta do baú do caminhão e veículos em geral. Alta robustez mecânica, possui proteções elétricas. Sinal de acionamento por nível lógico, RS-232 ou pulsos. Possui indicação de pino travado por sinal negativo.',
  },
  {
    id: 10,
    cat: 'temperatura',
    name: 'Sensor de Temperatura',
    version: null,
    acompanha: 'Cabo padrão de 07 metros de comprimento',
    obs: 'Comprimento do cabo pode ser alterado conforme a sua necessidade.',
    tags: ['-40°C a 120°C', '±2°C'],
    desc: 'Sensor de temperatura de alta qualidade com chip eletrônico; bulbo em alumínio, resinado para proteção contra umidade. Precisão de ±2°C e medindo temperaturas de -40°C até 120°C.',
  },
  {
    id: 11,
    cat: 'temperatura',
    name: 'Sensor de Umidade',
    version: null,
    acompanha: 'Cabo padrão de 07 metros de comprimento',
    obs: 'Cabo pode ser alterado o tamanho conforme a sua necessidade.',
    tags: ['0 a 100% RH', '±2% RH', 'Aço inox'],
    desc: 'Sensor de umidade com gabinete de aço inox, permite instalação em ambientes limpos (alimentos/hospitalar). Possui proteção contra umidade. Precisão de ±2% RH, faixa de medição de 0 a 100% RH.',
  },
  {
    id: 12,
    cat: 'temperatura',
    name: 'Transmissor de Temperatura',
    version: null,
    acompanha: 'Acompanha 01 chicote',
    obs: 'Bivolt automático (12V/24V).',
    tags: ['RS-232', 'RS-485', 'Bluetooth'],
    desc: 'Transmissor de temperatura e transmissor de temperatura/umidade. Comunicação por RS-232, RS-485 ou Bluetooth. Possui entradas para ligar até 04 sensores de temperatura e/ou umidade. Proteção contra umidade. Saída de alarme configurável individualmente para cada sensor. Possui ajuste de Offset.',
  },
  {
    id: 13,
    cat: 'temperatura',
    name: 'Sensor de Temperatura e Umidade com Display',
    version: null,
    acompanha: null,
    obs: 'Bivolt automático (12V / 24V).',
    tags: ['RS-485', 'Até 128 sensores', 'Aço inox'],
    desc: 'Gabinete de aço inox permite instalação em ambientes limpos (alimentos/hospitalar). Display indicativo da temperatura e umidade; placa eletrônica com proteção contra a umidade. Precisão de medição de ±2°C e ±2% RH; faixa de medição: -40°C a +120°C, 0% RH a 100% RH; comunicação RS-485 endereçável, até 128 sensores na mesma rede. Possui gerenciador de comunicação específico, com interface RS-232 para ligar no rastreador.',
  },
  {
    id: 14,
    cat: 'frota',
    name: 'Indicador de Velocidade',
    version: null,
    acompanha: 'Cabo padrão de 02 metros de comprimento',
    obs: 'Bivolt automático (12V/24V).',
    tags: ['RS-232', 'LCD', 'Cercas eletrônicas'],
    desc: 'Comunicação RS-232 com o rastreador. Indicador de velocidade com display LCD, com aviso de limite de velocidade excedido em pista seca e com chuva. Capacidade de reconhecimento de cercas eletrônicas com limites de velocidade específicos. Sinalização sonora por buzzer interno.',
  },
  {
    id: 15,
    cat: 'seguranca',
    name: 'Sensor RPM',
    version: null,
    acompanha: 'Acompanha 01 chicote',
    obs: 'Bivolt Automático (12V-24V).',
    tags: ['RS-232', 'Sinal W do alternador'],
    desc: 'Pode ser ligado ao sinal W do alternador ou pulsos do Módulo Eletrônico de Controle do Motor; configurável por RS-232 ou por pulso de sinal de comando negativo; emite alerta sonoro e sinalização por saída negativa para ligar ao rastreador; tempo de envio do valor de RPM configurável. Ao ultrapassar o limite máximo, o valor de RPM é enviado imediatamente pela RS-232; proteção contra surtos elétricos, curto-circuito e inversão de polaridade.',
  },
  {
    id: 16,
    cat: 'seguranca',
    name: 'Sensor de Porta NA/NF',
    version: 'Contato NA/NF.',
    acompanha: 'Opção com suporte em aço inox para instalação em porta de baú',
    obs: null,
    tags: ['Contato NA/NF', 'GAP até 50mm'],
    desc: 'Permite monitorar a abertura das portas do veículo, abertura do painel e portas do baú. Construção robusta e resinado, resistente à umidade. Ímã forte com alcance (GAP) de até 50mm.',
  },
  {
    id: 17,
    cat: 'conectividade',
    name: 'Fonte Conversora',
    version: null,
    acompanha: 'Pode ser fornecido com conector Micro-USB para o rastreador Spot',
    obs: null,
    tags: ['12V-24V Bivolt', 'Até 1,5A', '48V → 12V'],
    desc: 'Conversor de tensão de entrada Bivolt (12V-24V). Várias opções de saída de tensão: 5V, 9V, 12V, etc. Possui entrada e saída de pós-chave. Pode ser configurado para veículos elétricos, conversão 48V - 12V. Proteções contra inversão de polaridade, surtos elétricos e curto-circuito. Capacidade de até 1,5A.',
  },
  {
    id: 18,
    cat: 'conectividade',
    name: 'Expansor IOS',
    version: null,
    acompanha: 'Acompanha 01 chicote',
    obs: 'Bivolt (12V-24V).',
    tags: ['3x RS-232', '6 ent. digitais', '2 ent. analógicas'],
    desc: 'Possui 03 portas RS-232, permite interligar até 02 periféricos RS-232 na porta de comunicação do rastreador; funções inteligentes de conversão de protocolo e baud-rate. Possui 06 entradas digitais, 02 entradas analógicas, 02 saídas digitais. Fácil integração com plataformas de gestão, através de protocolo transparente ou hexadecimal. Proteções elétricas contra surtos, curto-circuito e inversão de polaridade.',
  },
];

export const featuredProducts: Product[] = [
  products[4],
  products[1],
  products[0],
  products[9],
  products[5],
  products[2],
];

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    number: '01',
    title: 'Firmware & Microcontroladores',
    description: 'Código bare-metal em C/C++ otimizado para tolerância a falhas, drivers de periféricos seriais e máquinas de estado robustas.',
    technologies: ['C/C++', 'STM32', 'ESP32', 'Microchip PIC'],
  },
  {
    number: '02',
    title: 'Layout de PCB & Integridade de Sinal',
    description: 'Desenvolvimento em multicamadas com plano de terra blindado, trilhas dimensionadas para surtos e testes de emissão EMC/EMI.',
    technologies: ['Altium Designer', 'KiCad', 'EMC/EMI', 'Multilayer'],
  },
  {
    number: '03',
    title: 'Montagem SMT & Burn-In Industrial',
    description: 'Linha própria de montagem com insuladores térmicos, resina protetora de grau automotivo e testes de bancada de 100% dos lotes.',
    technologies: ['SMD / SMT', 'Resinagem PU', 'Testes Funcionais', 'Lotes Seriais'],
  },
  {
    number: '04',
    title: 'Projetos Mecânicos & Injeção Plástica',
    description: 'Gabinete automotivo com guias de fixação rápida, chicotes padronizados com travas mecânicas e tolerância UV.',
    technologies: ['Injeção ABS/PC', 'Chicotes Automotivos', 'Grau IP65/IP67', 'Presilhas DIN'],
  },
];
