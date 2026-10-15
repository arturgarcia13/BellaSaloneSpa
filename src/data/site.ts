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
  whatsappHref: '/#unidades',
  instagramHref: 'https://www.instagram.com/bellasalonespa',
  hours: 'Segunda a sábado, 8h às 19h',
  units: [
    {
      name: 'Meireles',
      address: 'Rua José Vilar, 1681, Meireles, Fortaleza, CE',
      phone: '(85) 3512-4067',
      whatsappHref:
        'https://wa.me/558535142116?text=Ol%C3%A1%21+Vi+o+Instagram+do+sal%C3%A3o+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os.',
      wazeHref:
        'https://www.waze.com/ul?q=Rua%20Jos%C3%A9%20Vilar%201681%20Meireles%20Fortaleza&navigate=yes',
      mapsHref: 'https://maps.google.com/?q=Rua+Jos%C3%A9+Vilar+1681+Meireles+Fortaleza',
    },
    {
      name: 'Aldeota',
      address: 'Av. Senador Virgílio Távora, 2201, Loja 02, Aldeota, Fortaleza, CE',
      phone: '(85) 3512-4067',
      whatsappHref:
        'https://wa.me/558598573936?text=Ol%C3%A1%21+Vi+o+Instagram+do+sal%C3%A3o+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os.',
      wazeHref:
        'https://www.waze.com/ul?q=Av%20Senador%20Virgilio%20Tavora%202201%20Aldeota%20Fortaleza&navigate=yes',
      mapsHref: 'https://maps.google.com/?q=Av.+Senador+Virgilio+Tavora+2201+Aldeota+Fortaleza',
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
      items: ['<span class="kw">Loiros</span> de assinatura', 'Mechas e <span class="kw">balayage</span>', '<span class="kw">Coloração</span> e descoloração', 'Tratamentos e <span class="kw">reconstrução</span>'],
    },
    {
      title: 'Rosto & Olhar',
      subtitle: 'Precisão milimétrica',
      items: ['<span class="kw">Micropigmentação</span>', '<span class="kw">Brow lamination</span>', 'Design de <span class="kw">sobrancelhas</span>', 'Acabamento e <span class="kw">tintura</span>'],
    },
    {
      title: 'Dia da Noiva',
      subtitle: 'Atendimento exclusivo',
      items: ['Sala <span class="kw">privativa</span>', 'Produção <span class="kw">completa</span>', 'Cronograma <span class="kw">dedicado</span>', 'Assessoria de <span class="kw">imagem</span>'],
    },
    {
      title: 'Spa Urbano',
      subtitle: 'Beleza que restaura',
      items: ['Estética <span class="kw">facial</span>', 'Cuidados com a <span class="kw">pele</span>', 'Rituais de <span class="kw">relaxamento</span>', 'Tratamentos <span class="kw">corporais</span>'],
    },
  ],
  proof: {
    title: 'Presença que se constrói',
    lines: [
      'Participação em eventos de destaque da beleza, como o Miss Brasil.',
      'Resultados documentados em antes e depois, com o consentimento de cada cliente.',
      'Produtos profissionais selecionados para a realidade do clima de Fortaleza.',
    ],
  },
  podcasts: [
    {
      name: 'BELLA Conecta',
      platform: 'YouTube',
      channel: '@bellaconecta',
      href: 'https://www.youtube.com/@bellaconecta',
      description: 'Podcast sobre carreira e propósito. Um projeto do BELLA Salon & Spa.',
    },
    {
      name: 'BELLA Conecta',
      platform: 'Spotify',
      channel: 'Bella Conecta',
      href: 'https://open.spotify.com/show/033Y56rbOSedBJmn8ZU2V6',
      description:
        'Podcast com histórias e conversas inspiradoras sobre empreendedorismo, liderança, propósito, carreira e desenvolvimento pessoal. Um espaço para crescer, conectar e gerar impacto.',
    },
  ],

  seoTitle: 'BELLA Salon & Spa · Salão e spa urbano em Fortaleza',
};