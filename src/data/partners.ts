import type {
  HeroBannerData,
  Partner,
  NarrativeRailData,
  TelecomTrendItem,
  OpsHeadlineLinksData,
  NextStepData,
} from '@/types'

export const partnersHero: HeroBannerData = {
  title: 'Strategic Partners',
  content:
    "We work with the world's leading technology providers to deliver integrated solutions that combine best-in-class platforms with deep consulting expertise.",
  buttons: [{ label: 'Become a Partner', url: '/contact', kind: 'primary' }],
}

export const partners: Partner[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    description:
      'AWS Premier Tier Services Partner with specializations in Migration, DevOps, and Machine Learning.',
    ctaLabel: 'Visit AWS',
    ctaUrl: 'https://aws.amazon.com',
    isExternal: true,
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    description:
      'Microsoft Gold Partner with competencies in Cloud Platform, Data Analytics, and AI + Machine Learning.',
    ctaLabel: 'Visit Azure',
    ctaUrl: 'https://azure.microsoft.com',
    isExternal: true,
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    description:
      'Google Cloud Premier Partner specializing in data analytics, Kubernetes, and generative AI solutions.',
    ctaLabel: 'Visit Google Cloud',
    ctaUrl: 'https://cloud.google.com',
    isExternal: true,
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    description: 'Snowflake Elite Partner delivering data cloud implementations and migration services.',
    ctaLabel: 'Visit Snowflake',
    ctaUrl: 'https://snowflake.com',
    isExternal: true,
  },
  {
    id: 'databricks',
    name: 'Databricks',
    description: 'Certified Databricks partner for lakehouse architecture and ML platform implementations.',
    ctaLabel: 'Visit Databricks',
    ctaUrl: 'https://databricks.com',
    isExternal: true,
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    description:
      'HashiCorp Technology Partner delivering Terraform, Vault, and Consul enterprise implementations.',
    ctaLabel: 'Visit HashiCorp',
    ctaUrl: 'https://hashicorp.com',
    isExternal: true,
  },
  {
    id: 'ibm',
    name: 'IBM',
    description:
      'IBM Business Partner delivering hybrid cloud, AI, and data platform solutions across enterprise accounts.',
    ctaLabel: 'Visit IBM',
    ctaUrl: 'https://ibm.com',
    isExternal: true,
  },
  {
    id: 'redhat',
    name: 'Red Hat',
    description:
      'Red Hat Premier Business Partner specializing in OpenShift, Ansible, and enterprise open source.',
    ctaLabel: 'Visit Red Hat',
    ctaUrl: 'https://redhat.com',
    isExternal: true,
  },
]

export const narrativeRailData: NarrativeRailData = {
  heading: 'Technology Partnerships\nGrounded in Outcomes',
  introTop:
    "We don't partner with vendors for logo recognition. Every strategic alliance is chosen because their technology directly enables better, faster, and more resilient outcomes for our clients.",
  bullets: [
    'Our architects are certified practitioners, not just trained on slide decks',
    'We participate in Early Access Programs and beta testing with key partners',
    'Joint go-to-market programs give our clients access to emerging capabilities first',
  ],
  introBottom:
    "This gives our clients a first-mover advantage that compounds over time.",
  railTitle: 'Partner Resources',
  railLinks: [
    { label: 'Partner Portal', url: '/partners/portal' },
    { label: 'Joint Case Studies', url: '/clients' },
    { label: 'Technical Enablement', url: '/accelerators' },
    { label: 'Partner Events', url: '/contact' },
  ],
}

export const telecomTrends: TelecomTrendItem[] = [
  {
    id: '1',
    title: '5G Network Slicing: Enterprise Use Cases Coming of Age',
    description: 'How network slicing is enabling new B2B service models for telecom operators.',
    ctaUrl: '/blogs/5g-network-slicing',
  },
  {
    id: '2',
    title: 'FinOps at Scale: Governing Cloud Spend Across 50+ Teams',
    description: 'A practical framework for implementing FinOps in large, distributed engineering organizations.',
    ctaUrl: '/blogs/finops-at-scale',
  },
  {
    id: '3',
    title: 'The GenAI Readiness Checklist for Enterprise IT Leaders',
    description: 'What your infrastructure, data, and governance must look like before deploying generative AI at scale.',
    ctaUrl: '/blogs/genai-enterprise-readiness',
  },
  {
    id: '4',
    title: 'Open RAN: Promise vs. Reality for Tier 2 Operators',
    description: 'An honest assessment of Open RAN deployment challenges and what it takes to succeed.',
    ctaUrl: '/blogs/open-ran-assessment',
  },
]

export const opsHeadlineLinksData: OpsHeadlineLinksData = {
  heading: 'Building Together.\nDelivering Value.',
  description:
    'Our ecosystem of technology partnerships is built on mutual accountability and shared client outcomes. We bring the deep engineering expertise; our partners bring world-class platforms.',
  links: [
    { label: 'View our capabilities', url: '/capabilities' },
    { label: 'Client success stories', url: '/clients' },
    { label: 'Accelerators & tools', url: '/accelerators' },
    { label: 'Become a partner', url: '/contact' },
  ],
}

export const nextStepData: NextStepData = {
  heading: 'Ready to Build Something Together?',
  subheading:
    "Whether you're a technology vendor looking for a trusted implementation partner or an enterprise evaluating platform options, we'd love to start a conversation.",
  primaryCtas: [
    { label: 'Get in Touch', url: '/contact', kind: 'primary' },
    { label: 'View Capabilities', url: '/capabilities', kind: 'secondary' },
  ],
  exploreHeading: 'Explore more',
  exploreLinks: [
    { label: 'Our Difference', url: '/difference' },
    { label: 'Client Stories', url: '/clients' },
    { label: 'Accelerators', url: '/accelerators' },
    { label: 'Our Team', url: '/team' },
    { label: 'Careers', url: '/careers' },
  ],
}
