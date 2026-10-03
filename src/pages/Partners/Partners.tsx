import { usePageMeta } from '@/hooks/usePageMeta'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { NarrativeRail } from '@/components/sections/NarrativeRail/NarrativeRail'
import { PartnersBand } from '@/components/sections/PartnersBand/PartnersBand'
import { OpsHeadlineLinks } from '@/components/sections/OpsHeadlineLinks/OpsHeadlineLinks'
import { TelecomTrends } from '@/components/sections/TelecomTrends/TelecomTrends'
import { NextStep } from '@/components/sections/NextStep/NextStep'
import {
  partnersHero,
  partners,
  narrativeRailData,
  telecomTrends,
  opsHeadlineLinksData,
  nextStepData,
} from '@/data/partners'

export default function Partners() {
  usePageMeta({
    title: 'Strategic Partners | Conseqta',
    description:
      "Conseqta's strategic technology partners — AWS, Azure, Google Cloud, Snowflake, Databricks, and more.",
  })

  return (
    <>
      <HeroBanner data={partnersHero} />
      <NarrativeRail data={narrativeRailData} />
      <PartnersBand partners={partners} heading="Our Technology Partners" />
      <OpsHeadlineLinks data={opsHeadlineLinksData} />
      <TelecomTrends items={telecomTrends} heading="Related Insights" />
      <NextStep data={nextStepData} />
    </>
  )
}
