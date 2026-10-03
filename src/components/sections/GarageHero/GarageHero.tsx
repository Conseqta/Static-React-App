import { Link as CarbonLink, Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { GarageHeroData } from '@/types'
import styles from './GarageHero.module.css'

interface Props {
  data: GarageHeroData
}

export function GarageHero({ data }: Props) {
  return (
    <section className={styles.heroSection}>
      {/* Row 1: Full-width title */}
      <Grid fullWidth className={styles.titleRow}>
        <Column xlg={16} lg={16} md={8} sm={4} className={styles.titleCol}>
          <h1 className={styles.heading}>{data.heading}</h1>
        </Column>
      </Grid>

      {/* Row 2: Content left + image/placeholder right */}
      <Grid fullWidth className={styles.contentRow}>
        <Column xlg={6} lg={6} md={4} sm={4} className={styles.contentCol}>
          <div className={styles.contentInner}>
            {data.eyebrow && <p className={styles.contentTop}>{data.eyebrow}</p>}
            <p className={styles.contentBottom}>{data.body}</p>
            <div className={styles.linksRow}>
              <CarbonLink href={data.ctaUrl} className={styles.textLink}>
                {data.ctaLabel}
                <ArrowRight className={styles.arrowIcon} size={16} />
              </CarbonLink>
              <CarbonLink href="/contact" className={styles.textLink}>
                Talk to a Conseqta expert
                <ArrowRight className={styles.arrowIcon} size={16} />
              </CarbonLink>
            </div>
          </div>
        </Column>

        <Column xlg={10} lg={10} md={4} sm={4} className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder} />
          </div>
        </Column>
      </Grid>
    </section>
  )
}
