import { ClickableTile, Tile, Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { CaseStudy } from '@/types'
import styles from './CaseStudiesBand.module.css'

interface Props {
  caseStudies: CaseStudy[]
  heading?: string
}

export function CaseStudiesBand({ caseStudies, heading = 'Case studies' }: Props) {
  if (caseStudies.length === 0) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <h2 className={styles.heading}>{heading}</h2>
        </Column>

        {caseStudies.map((cs, i) => {
          const CardSurface = cs.url ? ClickableTile : Tile
          return (
            <Column key={i} xlg={4} lg={4} md={4} sm={4} className={styles.cardCol}>
              <CardSurface className={styles.card} href={cs.url}>
                {/* Image placeholder */}
                <div className={styles.imageWrap}>
                  <div className={styles.imagePlaceholder} />
                </div>

                {cs.client && <div className={styles.eyebrow}>{cs.client}</div>}

                <h3 className={styles.title}>{cs.title}</h3>

                <div>
                  <p className={styles.description}>{cs.excerpt}</p>
                </div>

                {cs.url && (
                  <div className={styles.ctaRow}>
                    <span className={styles.ctaLink}>
                      <ArrowRight size={18} className={styles.ctaIcon} />
                    </span>
                  </div>
                )}
              </CardSurface>
            </Column>
          )
        })}
      </Grid>
    </section>
  )
}
