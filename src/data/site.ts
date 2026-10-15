import type { Site } from '../types/site'; // placeholder removed below

// Central content source. Everything rendered comes from here.
export const site = {
  name: 'BELLA Salon & Spa',
  shortName: 'BELLA',
  handle: '@bellasalonespa',
  url: 'https://bellasalonespa.com.br',
  description:
    'Salão e spa urbano premium em Fortaleza. Cabelos, rosto & olhar, dia da noiva e spa. Agende seu horário nas unidades Meireles e Aldeota.',
  phone: '(85) 3512-4067',
  whatsappHref: 'https://linktr.ee/bellasalonespa',
  instagramHref: 'https://www.instagram.com/bellasalonespa',
  hours: 'Segunda a sábado, 8h às 19h',
  units: [
    {
      name: 'Meireles',
      address: 'Rua José Vilar, 1681, Meireles, Fortaleza, CE',
      routeHref:
        'https://www.waze.com/pt-PT/live-map/directions/br/ce/bella-salon-and-spa-jose-vilar?to=place.ChIJ52RlqfxJxwcRB9EHguqyVTg',
    },
    {
      name: 'Aldeota',
      address: 'Av. Senador Virgílio Távora, 2201, Loja 02, Aldeota, Fortaleza, CE',
      routeHref: 'https://maps.google.com/?q=Av.+Senador+Virgilio+Tavora+2201+Aldeota+Fortaleza',
    },
  ],
  hero: {
    eyebrow: 'Bella Salon & Spa · Fortaleza',
    headline: 'Você já se sentiu Bella hoje?',
    lede:
      'Salão e spa urbano onde técnica de precisão encontra acolhimento. Cabelos de assinatura, rosto & olhar, dia da noiva e momentos de spa para quem cobra presença do próprio reflexo.',
    cta: 'Agendar meu horário',
    ctaSecondary: 'Conhecer os rituais',
  },
  pillars: [
    {
      title: 'Consultoria personalizada',
      body: 'Cada atendimento começa com escuta: formato, estilo de vida e manutenção, para um resultado que vive além do salão.',
    },
    {
      title: 'Técnica de assinatura',
      body: 'Loiros desenhados fio a fio, mechas de precisão e tratamentos que respeitam a fibra do cabelo.',
    },
    {
      title: 'Ambiente sensorial',
      body: 'Cimento queimado suave, madeira clara, espelhos orgânicos e luz quente: um espaço feito para desacelerar.',
    },
  ],
  services: [
    {
      title: 'Cabelos',
      subtitle: 'Rituais de cor e luz',
      items: ['Loiros de assinatura', 'Mechas e balayage', 'Coloração e descoloração', 'Tratamentos e reconstrução'],
    },
    {
      title: 'Rosto & Olhar',
      subtitle: 'Precisão milimétrica',
      items: ['Micropigmentação', 'Brow lamination', 'Design de sobrancelhas', 'Acabamento e tintura'],
    },
    {
      title: 'Dia da Noiva',
      subtitle: 'Atendimento exclusivo',
      items: ['Sala privativa', 'Produção completa', 'Cronograma dedicado', 'Assessoria de imagem'],
    },
    {
      title: 'Spa Urbano',
      subtitle: 'Beleza que restaura',
      items: ['Estética facial', 'Cuidados com a pele', 'Rituais de relaxamento', 'Tratamentos corporais'],
    },
  ],
  proof: {
    title: 'Presença que se constrói',
    lines: [
      'Participação em eventos de destaque da beleza, como o Miss Brasil.',
      'Resultados documentados em antes e depois, com o consentimento de cada cliente.',
      'Produtos profissionais selecionados para a realidade do clima de Fortaleza.',
    ],
    note: 'Depoimentos e galerias de clientes são publicados à medida que são autorizados.',
  },
  seoTitle: 'BELLA Salon & Spa · Salão e spa urbano em Fortaleza',
};