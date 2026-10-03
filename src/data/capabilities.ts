import type { HeroBannerData, ContentLinksBandData, Capability, CaseStudy } from '@/types'

export const capabilitiesHero: HeroBannerData = {
  title: 'Our Capabilities',
  content:
    'From cloud infrastructure to AI-powered automation, our service portfolio is engineered for enterprise scale and built for lasting impact.',
  buttons: [{ label: 'Talk to an Expert', url: '/contact', kind: 'primary' }],
}

export const contentLinksBandData: ContentLinksBandData = {
  heading: 'Navigating Complexity.\nOrchestrating Experiences.\nAccelerating Value.',
  introTop:
    'Our capabilities span the full technology stack — from foundational cloud infrastructure to intelligent automation and data-driven decision making.',
  introBottom:
    'Every service area is staffed by practitioners with deep hands-on expertise, not generalist consultants.',
  links: [
    { title: 'Cloud Engineering', url: '/capabilities#cloud' },
    { title: 'AI & Machine Learning', url: '/capabilities#ai', newCapability: true },
    { title: 'Legacy Modernization', url: '/capabilities#legacy' },
    { title: 'Data Services', url: '/capabilities#data' },
    { title: 'Cybersecurity', url: '/capabilities#security' },
    { title: 'DevOps & Site Reliability', url: '/capabilities#devops' },
  ],
}

export const capabilities: Capability[] = [
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description:
      'Architect and migrate enterprise workloads to AWS, Azure, and GCP with zero-downtime strategies and optimized cost structures.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'FinOps'],
    url: '/contact',
    ctaLabel: 'Discuss Cloud Engineering',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Build production-grade AI systems — from LLM integrations to custom ML pipelines — that drive real business value from day one of deployment.',
    tags: ['LLMs', 'MLOps', 'Computer Vision', 'NLP', 'GenAI'],
    url: '/contact',
    ctaLabel: 'Discuss AI & ML',
  },
  {
    id: 'legacy',
    title: 'Legacy Modernization',
    description:
      'Systematically transform monolithic applications into scalable, cloud-native microservices. Our Strangler Fig patterns keep production live throughout every migration phase.',
    tags: ['Microservices', 'API Gateway', 'Event-Driven', 'CQRS', 'DDD'],
    url: '/contact',
    ctaLabel: 'Discuss Modernization',
  },
  {
    id: 'data',
    title: 'Data Services',
    description:
      'Build the data infrastructure your organization needs to compete. From real-time streaming pipelines to governed data lakes and enterprise analytics platforms.',
    tags: ['Data Lake', 'Kafka', 'Spark', 'dbt', 'Snowflake'],
    url: '/contact',
    ctaLabel: 'Discuss Data Services',
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description:
      'Embed security into every layer of your technology stack. Zero Trust implementations, cloud security posture management, and compliance automation that protect without sacrificing agility.',
    tags: ['Zero Trust', 'CSPM', 'SOC 2', 'ISO 27001', 'Pen Testing'],
    url: '/contact',
    ctaLabel: 'Discuss Cybersecurity',
  },
  {
    id: 'devops',
    title: 'DevOps & Site Reliability',
    description:
      'Accelerate software delivery with battle-tested DevOps practices. End-to-end CI/CD pipelines, observability platforms, and SRE frameworks that give your teams confidence to ship faster.',
    tags: ['CI/CD', 'GitOps', 'OpenTelemetry', 'SLOs', 'Chaos Engineering'],
    url: '/contact',
    ctaLabel: 'Discuss DevOps & SRE',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'GlobalTel',
    title: '40% Cost Reduction Through Kubernetes Migration',
    excerpt:
      'Migrated 200+ microservices from on-premise bare metal to a managed Kubernetes platform, achieving 40% infrastructure cost reduction and 3x deployment frequency.',
    tags: ['Cloud Engineering', 'Kubernetes'],
    url: '/clients/globaltel',
  },
  {
    id: '2',
    client: 'FinSecure Bank',
    title: 'Real-Time Fraud Detection with ML at 99.97% Accuracy',
    excerpt:
      'Built and deployed a real-time transaction scoring system processing 50,000 events per second with sub-10ms latency and 99.97% fraud detection accuracy.',
    tags: ['AI & ML', 'Data Services'],
    url: '/clients/finsecure',
  },
  {
    id: '3',
    client: 'HealthNet Systems',
    title: 'HIPAA-Compliant Cloud Migration in 8 Months',
    excerpt:
      "Migrated HealthNet's entire patient data infrastructure to AWS GovCloud with full HIPAA compliance, zero downtime, and 25% performance improvement.",
    tags: ['Cloud Engineering', 'Cybersecurity'],
    url: '/clients/healthnet',
  },
]
