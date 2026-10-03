import type { HeroBannerData, Insight, PartnerStudy, Partner } from '@/types'

export const differenceHero: HeroBannerData = {
  title: 'The Conseqta Difference',
  content:
    "What sets us apart isn't a methodology — it's a culture of accountability, technical depth, and relentless focus on outcomes that you can measure.",
  buttons: [{ label: 'Meet Our Team', url: '/team', kind: 'primary' }],
}

export const insights: Insight[] = [
  {
    id: '1',
    title: 'Practitioners, Not Theorists',
    description:
      'Every Conseqta consultant has built and operated enterprise systems at scale. Our senior architects average 15+ years of hands-on engineering experience — not slide-deck strategy.',
    url: '/team',
    linkText: 'Meet our team',
  },
  {
    id: '2',
    title: 'Transparent Delivery',
    description:
      'No hidden complexity, no scope creep surprises. We baseline rigorously, communicate proactively, and track progress against outcomes you can see in real time.',
    url: '/contact',
    linkText: 'Talk to us',
  },
  {
    id: '3',
    title: 'Knowledge Transfer by Design',
    description:
      "We build delivery teams that work alongside your engineers. Every engagement includes structured knowledge transfer so your teams own the outcome at the finish line.",
    url: '/difference',
    linkText: 'Learn more',
  },
  {
    id: '4',
    title: 'Accelerated Time-to-Value',
    description:
      'Our library of enterprise accelerators, reference architectures, and proven tooling compresses the early phases of every project so you see working software in weeks, not quarters.',
    url: '/accelerators',
    linkText: 'View accelerators',
  },
]

export const partnerStudies: PartnerStudy[] = [
  {
    id: '1',
    publishDate: '2025-06-15',
    title: 'The State of Enterprise AI Adoption 2025',
    linkText: 'Download Report',
    url: '/contact',
  },
  {
    id: '2',
    publishDate: '2025-04-22',
    title: 'Cloud Cost Optimization: Benchmarks for Mid-Market Enterprises',
    linkText: 'Read Study',
    url: '/contact',
  },
  {
    id: '3',
    publishDate: '2025-02-10',
    title: 'Zero Trust Architecture in Financial Services',
    linkText: 'Access Whitepaper',
    url: '/contact',
  },
  {
    id: '4',
    publishDate: '2024-11-05',
    title: 'Data Mesh in Practice: From Theory to Enterprise Scale',
    linkText: 'Read Research',
    url: '/contact',
  },
]

export const differencePartners: Partner[] = [
  {
    id: 'ibm',
    name: 'IBM Institute for Business Value',
    description: 'Research and thought leadership partnership across AI and quantum computing domains.',
    ctaLabel: 'View research',
    ctaUrl: 'https://ibm.com/ibv',
    isExternal: true,
  },
  {
    id: 'mit',
    name: 'MIT CSAIL',
    description: 'Academic collaboration on applied AI research and enterprise deployment methodologies.',
    ctaLabel: 'Learn more',
    ctaUrl: 'https://csail.mit.edu',
    isExternal: true,
  },
  {
    id: 'linux',
    name: 'Linux Foundation',
    description: 'Open source governance partner supporting CNCF, OpenSSF, and LF AI projects.',
    ctaLabel: 'Learn more',
    ctaUrl: 'https://linuxfoundation.org',
    isExternal: true,
  },
  {
    id: 'gartner',
    name: 'Gartner Research',
    description: 'Research partnership providing access to enterprise technology benchmarks and market analysis.',
    ctaLabel: 'View reports',
    ctaUrl: 'https://gartner.com',
    isExternal: true,
  },
]
