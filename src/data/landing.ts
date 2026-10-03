import type {
  HeroBannerData,
  ConsultingInfoData,
  ConsultingService,
  GarageHeroData,
  BenefitsBandData,
  IndustriesData,
} from '@/types'

export const landingHero: HeroBannerData = {
  title: 'Transforming Enterprise Technology',
  content:
    'Conseqta partners with leading organizations to navigate complex digital transformation journeys — from cloud migration to AI adoption and legacy modernization.',
  buttons: [
    { label: 'Explore Our Services', url: '/capabilities', kind: 'primary' },
    { label: 'Talk to an Expert', url: '/contact', kind: 'secondary' },
  ],
}

export const consultingInfoData: ConsultingInfoData = {
  title: 'Where Strategy Meets Execution',
  contentTop:
    'We combine deep domain expertise with hands-on engineering capability to deliver measurable business outcomes. Our consultants are practitioners first — engineers, architects, and data scientists who have built and scaled enterprise systems.',
  contentBottom:
    'From Fortune 500 enterprises to high-growth technology companies, Conseqta has guided over 200 successful transformations across cloud, AI, data, and application modernization.',
}

export const consultingServices: ConsultingService[] = [
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    eyebrow: 'Infrastructure & Platform',
    description:
      'Architect and migrate enterprise workloads to AWS, Azure, and GCP with zero-downtime strategies and optimized cost structures.',
    url: '/capabilities#cloud',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    eyebrow: 'Intelligent Automation',
    description:
      'Build production-grade AI systems — from LLM integrations to custom ML pipelines — that drive real business value.',
    url: '/capabilities#ai',
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization',
    eyebrow: 'Application Transformation',
    description:
      'Decompose monolithic applications into modern microservices architectures with minimal disruption and maximum velocity.',
    url: '/capabilities#legacy',
  },
  {
    id: 'data',
    title: 'Data Services',
    eyebrow: 'Analytics & Engineering',
    description:
      'Design and implement enterprise data platforms — data lakes, real-time pipelines, and governed analytics ecosystems.',
    url: '/capabilities#data',
  },
]

export const garageHeroData: GarageHeroData = {
  eyebrow: 'The Conseqta Garage',
  heading: 'Where Ideas Become Solutions',
  body: 'Our innovation lab — the Garage — is where our consultants prototype, validate, and accelerate emerging technology solutions. From quantum computing explorations to generative AI proof-of-concepts, the Garage gives our clients a first-mover advantage.',
  ctaLabel: 'Explore Accelerators',
  ctaUrl: '/accelerators',
}

export const benefitsBandData: BenefitsBandData = {
  heading: 'Why Leading Enterprises Choose Conseqta',
  benefits: [
    {
      metric: '>4x',
      description: 'Higher delivery velocity compared to traditional consulting engagements',
    },
    {
      metric: '>35%',
      description: 'Average infrastructure cost reduction across our cloud engineering engagements',
    },
    {
      metric: '98%',
      description: 'Client retention rate — our clients come back because our delivery delivers',
    },
    {
      metric: '200+',
      description: 'Enterprise technology transformations successfully delivered across 15+ industries',
    },
  ],
}

export const industriesData: IndustriesData = {
  heading: 'Industries We Serve',
  industries: [
    { id: 'telecom', label: 'Telecommunications', url: '/clients#telecom' },
    { id: 'finance', label: 'Financial Services', url: '/clients#finance' },
    { id: 'healthcare', label: 'Healthcare', url: '/clients#healthcare' },
    { id: 'retail', label: 'Retail & E-Commerce', url: '/clients#retail' },
    { id: 'energy', label: 'Energy & Utilities', url: '/clients#energy' },
    { id: 'government', label: 'Public Sector', url: '/clients#government' },
  ],
}
