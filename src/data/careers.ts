import type { HeroBannerData, Story, Testimonial, Job } from '@/types'

export const careersHero: HeroBannerData = {
  title: 'Build the Future of Enterprise Technology',
  content:
    'Join a team of engineers, architects, and strategists who are passionate about solving the hardest problems in enterprise technology — and who invest in each other\'s growth every day.',
  buttons: [
    { label: 'View Open Roles', url: '/careers/jobs', kind: 'primary' },
    { label: 'Learn About Our Culture', url: '/difference', kind: 'secondary' },
  ],
}

export const whoWeAreHeading = 'Who We Are'

export const stories: Story[] = [
  {
    id: '1',
    category: 'Our Culture',
    title: 'Practitioners Who Never Stop Learning',
    description:
      'At Conseqta, we invest in continuous learning — every consultant has a dedicated learning budget, access to cloud labs, and time for professional certifications. Our engineers hold 500+ combined industry certifications.',
    ctaUrl: '/difference',
  },
  {
    id: '2',
    category: 'Career Growth',
    title: 'A Clear Path from Engineer to Principal Architect',
    description:
      'We\'ve built structured career ladders with transparent promotion criteria. From junior engineer to principal architect, you\'ll always know what\'s expected and what support you\'ll get to get there.',
    ctaUrl: '/team',
  },
  {
    id: '3',
    category: 'Client Impact',
    title: 'Work That Actually Matters',
    description:
      'Our consultants work on systems that process billions of transactions, protect millions of patient records, and power critical infrastructure. The work has real stakes — and real satisfaction.',
    ctaUrl: '/clients',
  },
  {
    id: '4',
    category: 'Flexibility',
    title: 'Remote-First, Outcome-Focused',
    description:
      'We are a remote-first organization that believes in measuring outcomes, not hours. Our consultants work across 20+ countries and have the flexibility to structure their work in ways that serve their best thinking.',
  },
  {
    id: '5',
    category: 'Inclusion',
    title: 'A Team That Reflects the World',
    description:
      'Diversity of background, perspective, and experience makes us better consultants and better problem-solvers. We have active programs to recruit, develop, and promote underrepresented talent in technology.',
  },
  {
    id: '6',
    category: 'Benefits',
    title: 'Comprehensive Benefits Built for Engineers',
    description:
      'Competitive salary, annual bonus, equity participation, 100% health coverage, $5,000 annual learning budget, 30 days PTO, and a $2,000 home office setup allowance.',
  },
]

export const careersTestimonial: Testimonial = {
  quote:
    'I\'ve worked at hyperscalers and startups, but Conseqta is where I\'ve grown the most. The complexity of enterprise problems, the caliber of my colleagues, and the culture of learning — it\'s unlike anywhere I\'ve worked. I\'ve gone from senior engineer to principal architect in 3 years.',
  name: 'Yuki Tanaka',
  role: 'Principal Cloud Architect',
  company: 'Conseqta',
}

export const jobsHeading = 'Open Positions'
export const allJobsCtaLabel = 'View All Open Positions'

export const jobs: Job[] = [
  {
    id: '1',
    slug: 'principal-cloud-architect',
    category: 'Cloud Engineering',
    title: 'Principal Cloud Architect',
    level: 'Senior / Principal',
    location: 'Remote (US)',
    type: 'Full-time',
    featured: true,
    description:
      'Lead the architecture and delivery of complex cloud migration and modernization engagements for enterprise clients.',
    responsibilities: [
      'Lead technical architecture for cloud migration and modernization programs',
      'Define cloud landing zone designs across AWS, Azure, and GCP',
      'Mentor senior engineers and establish technical standards',
      'Engage directly with client CTO/VP Engineering stakeholders',
      'Contribute to Conseqta\'s cloud practice development',
    ],
    requirements: [
      '10+ years of enterprise technology experience',
      'Deep expertise in at least two major cloud platforms (AWS, Azure, GCP)',
      'Experience leading multi-year cloud transformation programs',
      'Strong background in network architecture, security, and FinOps',
      'Excellent communication with technical and business stakeholders',
    ],
    niceToHave: [
      'AWS Solutions Architect Professional or equivalent',
      'Experience with Terraform, Pulumi, or CloudFormation at enterprise scale',
      'FinOps Foundation certification',
    ],
  },
  {
    id: '2',
    slug: 'senior-ml-engineer',
    category: 'AI & Machine Learning',
    title: 'Senior ML Engineer',
    level: 'Senior',
    location: 'Remote (Global)',
    type: 'Full-time',
    featured: true,
    description:
      'Design and deploy production ML systems for enterprise clients across financial services, healthcare, and retail.',
    responsibilities: [
      'Build end-to-end ML pipelines from data ingestion to model serving',
      'Implement MLOps frameworks for model versioning, monitoring, and retraining',
      'Architect feature stores and real-time inference platforms',
      'Collaborate with data scientists to productionize research models',
      'Define ML engineering standards within the AI practice',
    ],
    requirements: [
      '6+ years of ML engineering experience',
      'Production experience with SageMaker, Vertex AI, or Azure ML',
      'Strong Python skills with expertise in TensorFlow or PyTorch',
      'Experience with Kafka, Flink, or Spark for real-time ML pipelines',
      'Understanding of model monitoring, drift detection, and A/B testing',
    ],
  },
  {
    id: '3',
    slug: 'data-engineer-senior',
    category: 'Data Services',
    title: 'Senior Data Engineer',
    level: 'Senior',
    location: 'Remote (US / EU)',
    type: 'Full-time',
    featured: true,
    description:
      'Build enterprise-scale data platforms and pipelines that power analytics, ML, and business intelligence.',
    responsibilities: [
      'Design and implement data lake and lakehouse architectures',
      'Build real-time and batch data pipelines using modern data stack tools',
      'Implement data quality frameworks and data contracts',
      'Work with clients to migrate from legacy ETL to modern data platforms',
      'Participate in data governance and metadata management design',
    ],
    requirements: [
      '5+ years of data engineering experience',
      'Strong experience with Spark, dbt, Kafka, or Flink',
      'Hands-on experience with Snowflake, Databricks, or BigQuery',
      'Understanding of data modeling patterns (Kimball, Data Vault)',
      'Experience with data quality tools and data observability',
    ],
  },
  {
    id: '4',
    slug: 'cybersecurity-architect',
    category: 'Cybersecurity',
    title: 'Cybersecurity Architect',
    level: 'Senior / Principal',
    location: 'Remote (US)',
    type: 'Full-time',
    featured: true,
    description:
      'Design and implement Zero Trust architectures, cloud security posture management, and compliance automation for enterprise clients.',
    responsibilities: [
      'Lead security architecture design for cloud and hybrid environments',
      'Implement Zero Trust network access and identity security programs',
      'Design and deliver cloud security posture management frameworks',
      'Support clients through SOC 2, ISO 27001, and FedRAMP compliance programs',
      'Conduct security architecture reviews and threat modeling',
    ],
    requirements: [
      '8+ years of cybersecurity experience',
      'Deep expertise in identity, network security, and cloud security',
      'Experience with CSPM tools (Prisma Cloud, Defender for Cloud, Security Hub)',
      'CISSP, CISM, or equivalent certification',
      'Strong understanding of regulatory frameworks (SOC 2, HIPAA, PCI DSS)',
    ],
  },
  {
    id: '5',
    slug: 'devops-engineer-senior',
    category: 'DevOps & SRE',
    title: 'Senior DevOps / Platform Engineer',
    level: 'Senior',
    location: 'Remote (Global)',
    type: 'Full-time',
    featured: false,
    description:
      'Build and operate developer platforms, CI/CD systems, and observability stacks for enterprise engineering organizations.',
    responsibilities: [
      'Design and implement CI/CD pipelines for enterprise development teams',
      'Build internal developer platforms using Backstage, Port, or custom solutions',
      'Implement observability stacks using OpenTelemetry, Prometheus, and Grafana',
      'Design Kubernetes-based platform services and developer self-service workflows',
      'Establish SRE practices including SLOs, error budgets, and incident management',
    ],
    requirements: [
      '5+ years of DevOps or platform engineering experience',
      'Strong Kubernetes expertise (CKA or CKAD preferred)',
      'Experience with GitHub Actions, GitLab CI, or Tekton',
      'Proficiency in Go, Python, or TypeScript for platform tooling',
      'Understanding of SRE principles and reliability engineering',
    ],
  },
  {
    id: '6',
    slug: 'engagement-manager',
    category: 'Consulting',
    title: 'Engagement Manager',
    level: 'Manager',
    location: 'Remote (US / EU)',
    type: 'Full-time',
    featured: false,
    description:
      'Lead the delivery of multi-workstream consulting engagements, managing client relationships, project economics, and team performance.',
    responsibilities: [
      'Own the end-to-end delivery of technology consulting engagements',
      'Manage project budgets, timelines, and risk escalation',
      'Build and maintain senior client relationships',
      'Lead engagement team of 5-15 consultants and engineers',
      'Identify and develop new opportunities within existing client accounts',
    ],
    requirements: [
      '6+ years of technology consulting or delivery management experience',
      'Experience managing enterprise technology programs ($2M+ scope)',
      'Strong financial acumen and project economics management',
      'Excellent stakeholder management and executive communication skills',
      'Technical background sufficient to credibly engage with CTO-level stakeholders',
    ],
  },
  {
    id: '7',
    slug: 'solution-architect-ai',
    category: 'AI & Machine Learning',
    title: 'AI Solution Architect',
    level: 'Senior',
    location: 'Remote (Global)',
    type: 'Full-time',
    featured: false,
    description:
      'Bridge business requirements and technical implementation for enterprise AI and generative AI programs.',
    responsibilities: [
      'Define solution architectures for LLM-powered enterprise applications',
      'Design RAG systems, fine-tuning pipelines, and AI governance frameworks',
      'Work with clients to identify and scope AI use cases with measurable ROI',
      'Evaluate LLM providers and build vs. buy recommendations',
      'Support pre-sales and proposal development for AI opportunities',
    ],
    requirements: [
      '5+ years of enterprise technology experience',
      'Hands-on experience with OpenAI, Anthropic, or equivalent LLM APIs',
      'Understanding of RAG, vector databases, and prompt engineering',
      'Strong business analysis and requirements definition skills',
      'Ability to communicate complex AI concepts to non-technical audiences',
    ],
  },
  {
    id: '8',
    slug: 'backend-engineer-senior',
    category: 'Engineering',
    title: 'Senior Backend Engineer',
    level: 'Senior',
    location: 'Remote (Global)',
    type: 'Full-time',
    featured: false,
    description:
      'Build high-performance, distributed backend systems as part of client-embedded engineering teams.',
    responsibilities: [
      'Design and implement microservices using Go, Java, or Node.js',
      'Build event-driven architectures using Kafka or similar streaming platforms',
      'Implement API gateways, service meshes, and inter-service communication patterns',
      'Participate in code reviews and establish coding standards',
      'Contribute to client\'s architectural decision records and technical documentation',
    ],
    requirements: [
      '5+ years of backend engineering experience',
      'Strong proficiency in Go, Java, or Node.js/TypeScript',
      'Experience with distributed systems patterns (CQRS, event sourcing, saga)',
      'Hands-on Kubernetes and Docker experience',
      'Understanding of observability practices and production operations',
    ],
  },
]
