import { usePageMeta } from '@/hooks/usePageMeta'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { ConsultingInfo } from '@/components/sections/ConsultingInfo/ConsultingInfo'
import { ConsultingServices } from '@/components/sections/ConsultingServices/ConsultingServices'
import { GarageHero } from '@/components/sections/GarageHero/GarageHero'
import { BenefitsBand } from '@/components/sections/BenefitsBand/BenefitsBand'
import { Industries } from '@/components/sections/Industries/Industries'
import {
  landingHero,
  consultingInfoData,
  consultingServices,
  garageHeroData,
  benefitsBandData,
  industriesData,
} from '@/data/landing'

export default function Landing() {
  usePageMeta({
    title: 'Conseqta — Enterprise Technology Consulting',
    description:
      'Conseqta partners with leading organizations for cloud engineering, AI/ML, legacy modernization, and data services transformations.',
  })

  return (
    <>
      <HeroBanner data={landingHero} />
      <ConsultingInfo data={consultingInfoData} />
      <ConsultingServices services={consultingServices} />
      <GarageHero data={garageHeroData} />
      <BenefitsBand data={benefitsBandData} />
      <Industries data={industriesData} />
    </>
  )
}
