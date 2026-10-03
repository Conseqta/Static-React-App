import { usePageMeta } from '@/hooks/usePageMeta'
import { KnowledgeBand } from '@/components/sections/KnowledgeBand/KnowledgeBand'
import { ConsultingBand } from '@/components/sections/ConsultingBand/ConsultingBand'
import { DataServicesBand } from '@/components/sections/DataServicesBand/DataServicesBand'
import { PartnersBand } from '@/components/sections/PartnersBand/PartnersBand'
import { knowledgeBandData, dataServicesBands } from '@/data/accelerators'
import { partners } from '@/data/partners'

export default function Accelerators() {
  usePageMeta({
    title: 'Accelerators | Conseqta',
    description:
      'Conseqta accelerators — purpose-built tools, reference architectures, and knowledge resources that compress your time-to-value.',
  })

  return (
    <>
      <KnowledgeBand
        heading={knowledgeBandData.heading}
        body={knowledgeBandData.body}
        cards={knowledgeBandData.cards}
      />
      <ConsultingBand
        heading="Helping businesses accelerate their cloud and AI journeys"
        bodyTop="Change isn't constrained to business or industry. It's happening throughout the world, every moment of every day. For enterprise leaders, the complexity of decision making has never been greater. To compete and win requires a trusted partner with the experience and skills to bring opportunity into focus and operationalize positive change quickly."
        bodyBottom="Conseqta consulting teams are working with global clients and partners to co-create what's next in AI. Diverse, global experts can help you quickly and confidently design and scale cutting-edge AI solutions and automation across your business."
        videoCaption="The Science of Consulting (1:31 min)"
      />
      {dataServicesBands.map((band, idx) => (
        <DataServicesBand key={idx} data={band} />
      ))}
      <PartnersBand partners={partners} heading="Strategic partnerships" />
    </>
  )
}
