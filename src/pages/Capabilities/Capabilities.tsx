import { usePageMeta } from '@/hooks/usePageMeta'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { ContentLinksBand } from '@/components/sections/ContentLinksBand/ContentLinksBand'
import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid/CapabilitiesGrid'
import { CaseStudiesBand } from '@/components/sections/CaseStudiesBand/CaseStudiesBand'
import { capabilitiesHero, contentLinksBandData, capabilities, caseStudies } from '@/data/capabilities'

export default function Capabilities() {
  usePageMeta({
    title: 'Capabilities | Conseqta',
    description:
      "Explore Conseqta's service capabilities: cloud engineering, AI & ML, legacy modernization, data services, cybersecurity, and DevOps & SRE.",
  })

  return (
    <>
      <HeroBanner data={capabilitiesHero} />
      <ContentLinksBand data={contentLinksBandData} />
      <CapabilitiesGrid capabilities={capabilities} />
      <CaseStudiesBand caseStudies={caseStudies} />
    </>
  )
}
