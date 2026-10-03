import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from 'react-router-dom'
import { Grid, Column, Tile } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { InsightsGrid } from '@/components/sections/InsightsGrid/InsightsGrid'
import { PartnerStudies } from '@/components/sections/PartnerStudies/PartnerStudies'
import type { Partner } from '@/types'
import { differenceHero, insights, partnerStudies, differencePartners } from '@/data/difference'
import styles from './Difference.module.css'

export default function Difference() {
  usePageMeta({
    title: 'Our Difference | Conseqta',
    description:
      'Practitioner-led delivery, transparent outcomes, embedded knowledge transfer, and accelerated time-to-value.',
  })

  return (
    <>
      <HeroBanner data={differenceHero} />
      <InsightsGrid insights={insights} heading="Insights" />
      <DifferencePartnersBand partners={differencePartners} heading="Strategic partnerships" />
      <PartnerStudies studies={partnerStudies} />
    </>
  )
}

// The Difference page uses xlg=5 with unique CSS (4rem heading, min-height 450px)
function DifferencePartnersBand({
  partners,
  heading,
}: {
  partners: Partner[]
  heading: string
}) {
  if (!partners || partners.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <Grid fullWidth>
        {partners.map((p, i) => {
          const cardContent = (
            <article className={styles.card}>
              <div className={styles.logoWrap}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoInitials}>{p.name.substring(0, 2).toUpperCase()}</span>
                </div>
              </div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>
              {p.ctaLabel && (
                <div className={styles.ctaRow}>
                  <span className={styles.ctaLabel}>{p.ctaLabel}</span>
                  <ArrowRight className={styles.ctaIcon} size={18} />
                </div>
              )}
            </article>
          )

          return (
            <Column key={i} xlg={5} lg={5} md={4} sm={4} className={styles.cardCol}>
              {p.ctaUrl ? (
                <Link
                  to={p.ctaUrl}
                  target={p.isExternal ? '_blank' : undefined}
                  rel={p.isExternal ? 'noopener noreferrer' : undefined}
                  className={styles.tileLink}
                >
                  <Tile className={styles.tile}>{cardContent}</Tile>
                </Link>
              ) : (
                <Tile className={styles.tile}>{cardContent}</Tile>
              )}
            </Column>
          )
        })}
      </Grid>
    </section>
  )
}
