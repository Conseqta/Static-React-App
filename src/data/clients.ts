import type { HeroBannerData, ClientCase, Testimonial, TelecomTrendItem, GraniteBandData } from '@/types'

export const clientsHero: HeroBannerData = {
  title: 'Our Clients',
  content:
    "We partner with enterprises across industries to solve their most complex technology challenges. Here are some of the organizations we've had the privilege to serve.",
  buttons: [{ label: 'Start a Conversation', url: '/contact', kind: 'primary' }],
}

export const clients: ClientCase[] = [
  {
    id: '1',
    slug: 'globaltel',
    clientName: 'GlobalTel',
    excerpt:
      'Migrated 200+ microservices to Kubernetes, achieving 40% infrastructure cost reduction and 3x deployment frequency.',
    industry: 'Telecommunications',
    services: ['Cloud Engineering', 'DevOps & SRE'],
    results: [
      '40% reduction in infrastructure costs',
      '3x increase in deployment frequency',
      '99.99% uptime SLA achieved',
    ],
    content:
      "GlobalTel, one of North America's largest regional telecommunications providers, faced mounting infrastructure costs and slow release cycles. Conseqta led a phased migration of GlobalTel's entire microservices portfolio from on-premise bare metal to a managed Kubernetes platform on AWS EKS.\n\nOver 14 months, our team containerized 200+ services, implemented a GitOps deployment model, and built a comprehensive observability platform. The result: 40% infrastructure cost reduction and 3x deployment frequency.",
    featured: true,
  },
  {
    id: '2',
    slug: 'finsecure',
    clientName: 'FinSecure Bank',
    excerpt:
      'Built a real-time fraud detection ML system processing 50,000 events per second with sub-10ms latency.',
    industry: 'Financial Services',
    services: ['AI & Machine Learning', 'Data Services'],
    results: [
      '99.97% fraud detection accuracy',
      'Sub-10ms transaction scoring latency',
      '$28M in annual fraud losses prevented',
    ],
    content:
      'FinSecure Bank was losing millions annually to sophisticated fraud patterns. Conseqta designed and built a real-time ML inference platform that scores every transaction within milliseconds.\n\nThe system processes 50,000 events per second on a horizontally scalable Kafka + Flink pipeline, with model updates deployed weekly via our custom MLOps framework. In the first year, the system prevented $28M in fraud losses.',
    featured: false,
  },
  {
    id: '3',
    slug: 'healthnet',
    clientName: 'HealthNet Systems',
    excerpt: 'HIPAA-compliant cloud migration completed in 8 months with zero downtime and 25% performance improvement.',
    industry: 'Healthcare',
    services: ['Cloud Engineering', 'Cybersecurity'],
    results: [
      'Full HIPAA compliance on AWS GovCloud',
      'Zero downtime during migration',
      '25% application performance improvement',
    ],
    content:
      "HealthNet Systems needed to migrate their patient data infrastructure to meet new HIPAA requirements without disrupting care delivery systems used by 3,000 clinicians daily.\n\nConseqta architected a HIPAA-compliant AWS GovCloud environment with VPC segmentation, KMS encryption, and automated compliance monitoring, completing the project in 8 months with zero downtime.",
    featured: false,
  },
  {
    id: '4',
    slug: 'retailmax',
    clientName: 'RetailMax',
    excerpt: 'Built an AI-powered demand forecasting platform reducing inventory waste by 32%.',
    industry: 'Retail & E-Commerce',
    services: ['AI & Machine Learning', 'Data Services'],
    results: [
      '32% reduction in inventory waste',
      '18% improvement in stock availability',
      '$15M annual cost savings',
    ],
    content:
      "RetailMax operated 450 retail locations with significant inventory inefficiency. Conseqta built a next-generation demand forecasting platform using XGBoost, LSTM neural networks, and a feature store powered by AWS SageMaker.\n\nThe platform ingests 80+ signals including weather, local events, and competitor pricing to generate location-level daily forecasts.",
    featured: false,
  },
  {
    id: '5',
    slug: 'energyco',
    clientName: 'EnergyCo',
    excerpt: 'Implemented a real-time IoT data platform processing 10M sensor readings per minute across 2,000 sites.',
    industry: 'Energy & Utilities',
    services: ['Data Services', 'Cloud Engineering'],
    results: [
      '10M sensor readings/minute processed',
      '67% reduction in unplanned downtime',
      '2,000+ remote sites connected',
    ],
    content:
      "EnergyCo manages a distributed network of 2,000 energy generation and distribution sites, each generating thousands of IoT sensor readings per minute.\n\nConseqta designed and built a cloud-native IoT data platform on Azure, using Azure IoT Hub, Event Hubs, Stream Analytics, and Azure ML to ingest, process, and analyze 10 million sensor readings per minute in real time.",
    featured: false,
  },
]

export const graniteBandData: GraniteBandData = {
  heading: 'Ready to Transform Your Technology?',
  intro:
    "Whether you're navigating a complex cloud migration, scaling an AI program, or modernizing a legacy platform — our team of practitioner-consultants is ready to partner with you. Every engagement starts with listening.",
  features: [
    {
      title: '200+ Enterprise Engagements',
      body: 'Across cloud, AI, data, and modernization programs in 15+ industries.',
    },
    {
      title: '98% Client Retention',
      body: 'Our clients return because our delivery delivers measurable business outcomes.',
    },
    {
      title: 'Practitioner-Led Teams',
      body: 'Every engagement is led by engineers and architects, not strategy consultants.',
    },
  ],
  ctaLabel: 'Start a Conversation',
  ctaUrl: '/contact',
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Conseqta didn't just deliver a Kubernetes migration — they transformed how our engineering culture thinks about infrastructure. The knowledge transfer was exceptional, and our teams now own the platform completely.",
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'GlobalTel',
  },
  {
    quote:
      "We went from manually reviewing suspicious transactions to an ML system that catches fraud in real time. The ROI was clear within 90 days. Conseqta's team was technically brilliant and great communicators.",
    name: 'Dr. Priya Patel',
    role: 'Chief Risk Officer',
    company: 'FinSecure Bank',
  },
  {
    quote:
      "Migrating 15 years of patient data to the cloud while keeping our clinical systems live was something most vendors said was too risky. Conseqta had the architecture and the nerve to make it happen.",
    name: 'Dr. Rachel Kim',
    role: 'VP of Technology',
    company: 'HealthNet Systems',
  },
]

export const clientTelecomTrends: TelecomTrendItem[] = [
  {
    id: '1',
    title: 'Network Modernization Patterns in the 5G Era',
    description: 'Strategies for telcos navigating legacy infrastructure while building for 5G at the edge.',
    ctaUrl: '/blogs/network-modernization-5g',
  },
  {
    id: '2',
    title: 'Open RAN: Promise vs. Reality for Tier 2 Operators',
    description: 'An honest assessment of Open RAN deployment challenges and what it takes to succeed.',
    ctaUrl: '/blogs/open-ran-assessment',
  },
  {
    id: '3',
    title: 'BSS/OSS Transformation: A Pragmatic Roadmap',
    description: 'How to modernize Business Support Systems without disrupting revenue-generating operations.',
    ctaUrl: '/blogs/bss-oss-transformation',
  },
  {
    id: '4',
    title: 'AI-Driven Network Operations: From Alert to Action',
    description: 'How AIOps is reducing MTTR and enabling proactive network management at scale.',
    ctaUrl: '/blogs/aiops-network-operations',
  },
]
