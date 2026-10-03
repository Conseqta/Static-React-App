export interface SubscriptionTile {
  title: string
  body: string
  ctaLabel?: string
  ctaUrl?: string
}

export interface ContactBlock {
  heading: string
  lines: string[]
  socialLinks?: Array<{ platform: string; url: string }>
}

export interface Article {
  title: string
  author: string
}

export const contactData = {
  heroHeading: "Let's Work Together",
  contactHeading: 'Contact Conseqta',

  subscriptionTiles: [
    {
      title: 'Consulting Inquiry',
      body: 'Ready to start a technology transformation? Tell us about your challenge and we\'ll connect you with the right team.',
      ctaLabel: 'Start a conversation',
      ctaUrl: '#contact-form',
    },
    {
      title: 'Partnership Inquiry',
      body: 'Interested in becoming a technology partner? Explore our partner program and co-sell opportunities.',
      ctaLabel: 'Partner with us',
      ctaUrl: '/partners',
    },
    {
      title: 'Careers',
      body: 'Looking for your next role in enterprise technology consulting? View our open positions across cloud, AI, and data.',
      ctaLabel: 'View open roles',
      ctaUrl: '/careers',
    },
    {
      title: 'Press & Media',
      body: 'For media inquiries, speaking requests, or research collaboration, our communications team is here to help.',
      ctaLabel: 'Media contact',
      ctaUrl: 'mailto:press@conseqta.com',
    },
  ] as SubscriptionTile[],

  promoEyebrow: 'New Research',
  promoHeading: 'The Enterprise AI Readiness Report 2025',
  promoCtaLabel: 'Download the report',
  promoCtaUrl: '/contact',

  contactBlocks: [
    {
      heading: 'Global Headquarters',
      lines: [
        '350 Fifth Avenue, Suite 4800',
        'New York, NY 10118',
        'United States',
        'Phone: +1 (212) 555-0100',
        'Email: hello@conseqta.com',
      ],
      socialLinks: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/conseqta' },
        { platform: 'X (Twitter)', url: 'https://x.com/conseqta' },
      ],
    },
    {
      heading: 'European Office',
      lines: [
        '1 Canada Square',
        'Canary Wharf, London E14 5AB',
        'United Kingdom',
        'Phone: +44 20 7946 0100',
        'Email: europe@conseqta.com',
      ],
    },
    {
      heading: 'Asia Pacific Office',
      lines: [
        '8 Marina View, #14-04',
        'Asia Square Tower 1',
        'Singapore 018960',
        'Phone: +65 6812 0100',
        'Email: apac@conseqta.com',
      ],
    },
  ] as ContactBlock[],

  articles: [
    {
      title: 'AI Transformation in the Enterprise: Moving from Pilot to Production',
      author: 'Sophia Martinez · 10 min read',
    },
    {
      title: 'The Strangler Fig Pattern: A Real-World Implementation Guide',
      author: 'David Okonkwo · 9 min read',
    },
    {
      title: 'Zero Trust Architecture in Financial Services: What Actually Works',
      author: 'Amara Nwosu · 12 min read',
    },
  ] as Article[],
}
