import { usePageMeta } from '@/hooks/usePageMeta'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { GraniteBand } from '@/components/sections/GraniteBand/GraniteBand'
import { ClientCaseStudies } from '@/components/sections/ClientCaseStudies/ClientCaseStudies'
import { TestimonialBand } from '@/components/sections/TestimonialBand/TestimonialBand'
import { TelecomTrends } from '@/components/sections/TelecomTrends/TelecomTrends'
import { clientsHero, clients, testimonials, clientTelecomTrends, graniteBandData } from '@/data/clients'

export default function Clients() {
  usePageMeta({
    title: 'Our Clients | Conseqta',
    description:
      'Conseqta client partnerships across telecommunications, financial services, healthcare, retail, and energy.',
  })

  return (
    <>
      <HeroBanner data={clientsHero} />
      <GraniteBand data={graniteBandData} />
      <ClientCaseStudies clients={clients} />
      <TestimonialBand testimonials={testimonials} />
      {/* Clients TelecomTrends uses xlg=4, 4/page, 320px image, #161616 colors */}
      <TelecomTrends
        items={clientTelecomTrends}
        heading="Trends in telecommunication services"
        variant="clients"
      />
    </>
  )
}
