import type { HeroBannerData, TeamMember } from '@/types'

export const teamHero: HeroBannerData = {
  title: 'Our Leadership Team',
  content:
    "Meet the practitioners, engineers, and strategists who lead Conseqta. Each brings decades of enterprise technology experience and a shared commitment to client outcomes.",
}

export const teamHeading = 'Leadership'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandra Chen',
    title: 'Chief Executive Officer',
    bio: 'Alexandra co-founded Conseqta after 20 years leading technology transformation programs at McKinsey and IBM. She has personally overseen $2B+ in technology investments across financial services, healthcare, and telecommunications. Alexandra holds a Ph.D. in Computer Science from MIT and an MBA from Wharton.',
    order: 1,
    featured: true,
    email: 'a.chen@conseqta.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'David Okonkwo',
    title: 'Chief Technology Officer',
    bio: 'David is a distributed systems architect with 18 years of experience scaling enterprise platforms. Before Conseqta, he served as VP of Engineering at a Tier 1 telecommunications provider where he led a 500-person engineering organization through a cloud-native transformation. He is a CNCF Ambassador and active contributor to the Kubernetes project.',
    order: 2,
    featured: true,
    email: 'd.okonkwo@conseqta.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Sophia Martinez',
    title: 'Chief Data Officer',
    bio: 'Sophia leads Conseqta\'s data and AI practice. With a background in applied mathematics and 15 years building enterprise ML systems, she has pioneered Conseqta\'s approach to production AI.',
    order: 3,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'James Liu',
    title: 'VP, Cloud Engineering',
    bio: 'James leads our cloud engineering practice and holds AWS, Azure, and GCP Professional certifications.',
    order: 4,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '5',
    name: 'Amara Nwosu',
    title: 'VP, Cybersecurity',
    bio: 'Amara brings 17 years of cybersecurity leadership across defense, finance, and critical infrastructure.',
    order: 5,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '6',
    name: 'Robert Eriksson',
    title: 'VP, Client Success',
    bio: 'Robert ensures that every Conseqta client realizes the business value they were promised.',
    order: 6,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '7',
    name: 'Nisha Kapoor',
    title: 'VP, People & Culture',
    bio: 'Nisha has built the talent programs, learning culture, and inclusive workplace that makes Conseqta one of the most sought-after employers in enterprise technology consulting.',
    order: 7,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '8',
    name: 'Carlos Mendez',
    title: 'Principal Architect, AI/ML',
    bio: 'Carlos is one of the most recognized applied AI practitioners in the consulting space.',
    order: 8,
    featured: false,
    linkedin: 'https://linkedin.com',
  },
]
