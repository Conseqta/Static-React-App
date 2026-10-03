// ─── Navigation ──────────────────────────────────────────────────────────────

export interface SubMenuItem {
  label: string
  url: string
}

export interface MenuItem {
  label: string
  url: string
  subItems?: SubMenuItem[]
}

// ─── Common ───────────────────────────────────────────────────────────────────

export interface Button {
  label: string
  url: string
  isExternal?: boolean
  kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
}

export interface Media {
  url: string
  alt: string
}

// ─── Hero Banner ─────────────────────────────────────────────────────────────

export interface HeroBannerData {
  title: string
  content: string
  image?: Media
  buttons?: Button[]
}

// ─── Landing Page ─────────────────────────────────────────────────────────────

export interface ConsultingInfoData {
  title: string
  contentTop: string
  contentBottom: string
}

export interface ConsultingService {
  id: string
  title: string
  eyebrow: string
  description: string
  url: string
  image?: Media
}

export interface GarageHeroData {
  heading: string
  eyebrow?: string
  body: string
  ctaLabel: string
  ctaUrl: string
  secondaryCtaLabel?: string
  secondaryCtaUrl?: string
}

export interface Benefit {
  metric: string
  description: string
}

export interface BenefitsBandData {
  heading: string
  benefits: Benefit[]
}

export interface Industry {
  id: string
  label: string
  url: string
  imageUrl?: string
  description?: string
}

export interface IndustriesData {
  heading: string
  industries: Industry[]
}

// ─── Capabilities ─────────────────────────────────────────────────────────────

export interface ContentLink {
  title: string
  url: string
  isExternal?: boolean
  newCapability?: boolean
}

export interface ContentLinksBandData {
  heading: string
  introTop?: string
  introBottom?: string
  links: ContentLink[]
}

export interface Capability {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  url: string
  ctaLabel?: string
  isExternal?: boolean
}

export interface CaseStudy {
  id: string
  client: string
  title: string
  excerpt: string
  imageUrl?: string
  url: string
  tags: string[]
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface Partner {
  id: string
  name: string
  description: string
  logoUrl?: string
  ctaLabel?: string
  ctaUrl?: string
  isExternal?: boolean
}

export interface NarrativeRailLink {
  label: string
  url: string
  isExternal?: boolean
}

export interface NarrativeRailData {
  heading: string
  introTop?: string
  bullets?: string[]
  introBottom?: string
  railTitle?: string
  railLinks?: NarrativeRailLink[]
}

export interface TelecomTrendItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  ctaUrl: string
}

export interface OpsLink {
  label: string
  url: string
  isExternal?: boolean
  isVideo?: boolean
  duration?: string
}

export interface OpsHeadlineLinksData {
  heading: string
  description?: string
  links: OpsLink[]
}

export interface NextStepCta {
  label: string
  url: string
  kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  isExternal?: boolean
}

export interface NextStepExploreLink {
  label: string
  url: string
  isExternal?: boolean
}

export interface NextStepData {
  heading: string
  subheading?: string
  primaryCtas?: NextStepCta[]
  exploreHeading?: string
  exploreLinks?: NextStepExploreLink[]
}

// ─── Our Difference ───────────────────────────────────────────────────────────

export interface Insight {
  id: string
  title: string
  description: string
  url?: string
  linkText?: string
  isExternal?: boolean
  imageUrl?: string
}

export interface PartnerStudy {
  id: string
  publishDate: string
  title: string
  linkText: string
  url: string
  logoUrl?: string
}

// ─── Clients ──────────────────────────────────────────────────────────────────

export interface ClientCase {
  id: string
  slug: string
  clientName: string
  logoUrl?: string
  heroImageUrl?: string
  excerpt: string
  industry: string
  services: string[]
  results: string[]
  content: string
  featured?: boolean
}

export interface GraniteBandFeature {
  title: string
  body: string
}

export interface GraniteBandData {
  heading: string
  intro?: string
  features?: GraniteBandFeature[]
  ctaLabel?: string
  ctaUrl?: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  photoUrl?: string
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  photoUrl?: string
  hiResPhotoUrl?: string
  order: number
  featured?: boolean
  email?: string
  linkedin?: string
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  articleTitle?: string
  category: string
  excerpt: string
  heroImageUrl?: string
  publishedAt: string
  author: string
  readTime: string
  tags: string[]
  body: string
  shareUrl: string
  featured?: boolean
}

export interface BlogHeroBanner {
  heading: string
  subheading: string
  ctaLabel?: string
  ctaUrl?: string
}

// ─── Careers ──────────────────────────────────────────────────────────────────

export interface Story {
  id: string
  category: string
  title: string
  description: string
  imageUrl?: string
  ctaUrl?: string
}

export interface Job {
  id: string
  slug: string
  category: string
  title: string
  level: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  featured?: boolean
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave?: string[]
}

// ─── Accelerators ────────────────────────────────────────────────────────────

export interface KnowledgeResource {
  id: string
  title: string
  category: string
  description: string
  url: string
  date: string
  type: 'report' | 'whitepaper' | 'webinar' | 'tool'
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string
  url: string
}

export interface FooterGroup {
  title: string
  links: FooterLink[]
}

export interface FooterData {
  brandName: string
  brandLogoUrl?: string
  groups: FooterGroup[]
  bottomLeftLinks: FooterLink[]
  bottomRightLinks: FooterLink[]
}
