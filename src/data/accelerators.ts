import type { HeroBannerData, KnowledgeResource } from '@/types'

export const acceleratorsHero: HeroBannerData = {
  title: 'Accelerators & Innovation',
  content:
    'Purpose-built tools, reference architectures, and knowledge assets that compress your time-to-value — built from patterns proven across 200+ enterprise engagements.',
  buttons: [{ label: 'Contact Our Team', url: '/contact', kind: 'primary' }],
}

// KnowledgeBand data
export interface KnowledgeBandCard {
  category: string
  title: string
  description?: string
  ctaLabel: string
  ctaUrl: string
  isExternal?: boolean
}

export const knowledgeBandData = {
  heading: 'Knowledge is power. Be powerful.',
  body: 'Conseqta delivers trusted, technology-based insights that help enterprise leaders make smarter decisions and more informed technology investments—and inspires them to act.',
  cards: [
    {
      category: 'Artificial Intelligence',
      title: 'Go further, faster with AI: How governance increases velocity',
      ctaLabel: 'Learn more',
      ctaUrl: '/blogs/genai-enterprise-readiness',
    },
    {
      category: 'Cloud Engineering',
      title: 'FinOps at Scale: Governing Cloud Spend Across 50+ Teams',
      ctaLabel: 'Learn more',
      ctaUrl: '/blogs/finops-at-scale',
    },
    {
      category: 'Data Services',
      title: 'Data Mesh in Practice: From Theory to Enterprise Scale',
      ctaLabel: 'Learn more',
      ctaUrl: '/blogs/data-mesh-enterprise-adoption',
    },
    {
      category: 'Cybersecurity',
      title: 'Zero Trust in Financial Services: What Actually Works',
      ctaLabel: 'Learn more',
      ctaUrl: '/blogs/zero-trust-financial-services',
    },
  ] as KnowledgeBandCard[],
}

// DataServicesBand sections
export interface DataServicesBandService {
  title: string
  description: string
  ctaLabel?: string
  ctaUrl?: string
}

export interface DataServicesBandData {
  eyebrow?: string
  heading: string
  intro: string
  primaryCtaLabel?: string
  primaryCtaUrl?: string
  services: DataServicesBandService[]
}

export const dataServicesBands: DataServicesBandData[] = [
  {
    eyebrow: 'AI & Data',
    heading: 'Accelerate your\nAI journey',
    intro: 'Move AI from pilot to production with our proven MLOps framework, feature store accelerator, and enterprise RAG engine. Our AI practice has deployed ML systems handling billions of predictions daily.',
    primaryCtaLabel: 'Explore AI accelerators',
    primaryCtaUrl: '/contact',
    services: [
      {
        title: 'MLOps Platform Starter',
        description: 'End-to-end MLOps framework: feature store, model registry, drift monitoring, and automated retraining pipelines.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
      {
        title: 'Enterprise RAG Engine',
        description: 'Production-ready Retrieval-Augmented Generation with hybrid search, citation tracking, and hallucination guardrails.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
      {
        title: 'AI Readiness Assessment',
        description: 'Structured assessment covering data, infrastructure, governance, and organizational dimensions for enterprise AI adoption.',
        ctaLabel: 'Start assessment',
        ctaUrl: '/contact',
      },
      {
        title: 'Model Governance Framework',
        description: 'Policy templates, audit trails, and monitoring dashboards for responsible AI deployment in regulated industries.',
        ctaLabel: 'Learn more',
        ctaUrl: '/contact',
      },
    ],
  },
  {
    eyebrow: 'Cloud',
    heading: 'Cloud engineering\nat enterprise scale',
    intro: 'Deploy production-ready cloud infrastructure in days, not months. Our cloud accelerators encode 200+ enterprise migrations into opinionated, battle-tested blueprints.',
    primaryCtaLabel: 'Explore cloud accelerators',
    primaryCtaUrl: '/contact',
    services: [
      {
        title: 'Cloud Landing Zone',
        description: 'Multi-account cloud foundation for AWS, Azure, or GCP with network topology, IAM, security controls, and CI/CD pipelines.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
      {
        title: 'FinOps Governance Kit',
        description: 'Cost allocation framework, tagging policy, budget alert automation, and executive reporting dashboards.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
      {
        title: 'Zero Trust Architecture Kit',
        description: 'Modular Terraform modules for identity federation, micro-segmentation, device trust, and continuous access evaluation.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
      {
        title: 'Data Lakehouse Blueprint',
        description: 'Governed lakehouse architecture with Delta Lake or Apache Iceberg, data catalog, quality monitoring, and dbt layer.',
        ctaLabel: 'Request access',
        ctaUrl: '/contact',
      },
    ],
  },
]

export const knowledgeResources: KnowledgeResource[] = [
  {
    id: '1',
    title: 'Enterprise Cloud Architecture Playbook 2025',
    category: 'Cloud Engineering',
    description: 'A comprehensive guide to multi-cloud architecture patterns, cost optimization frameworks, and migration strategies.',
    url: '/contact',
    date: '2025-07-01',
    type: 'whitepaper',
  },
  {
    id: '2',
    title: 'MLOps Maturity Model for Enterprise AI Teams',
    category: 'AI & Machine Learning',
    description: 'A self-assessment framework for evaluating your MLOps capability with a structured roadmap to the next maturity level.',
    url: '/contact',
    date: '2025-05-15',
    type: 'report',
  },
  {
    id: '3',
    title: 'The Data Mesh Implementation Guide',
    category: 'Data Services',
    description: 'A step-by-step guide to adopting Data Mesh in enterprise organizations, including governance frameworks.',
    url: '/contact',
    date: '2025-04-10',
    type: 'whitepaper',
  },
  {
    id: '4',
    title: 'Zero Trust for Financial Services: Implementation Workshop',
    category: 'Cybersecurity',
    description: 'A 3-part workshop series on designing and implementing Zero Trust Architecture in regulated financial services.',
    url: '/contact',
    date: '2025-03-22',
    type: 'webinar',
  },
  {
    id: '5',
    title: 'Legacy Modernization ROI Calculator',
    category: 'Legacy Modernization',
    description: 'Interactive tool for estimating ROI of legacy modernization initiatives, including cost reduction and velocity improvement.',
    url: '/contact',
    date: '2025-02-14',
    type: 'tool',
  },
  {
    id: '6',
    title: 'GenAI Enterprise Readiness Assessment',
    category: 'AI & Machine Learning',
    description: 'Structured assessment covering data, infrastructure, governance, and organizational dimensions for generative AI adoption.',
    url: '/contact',
    date: '2025-01-20',
    type: 'tool',
  },
]
