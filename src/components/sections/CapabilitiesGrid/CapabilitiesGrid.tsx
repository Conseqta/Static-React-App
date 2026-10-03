import { Link as CarbonLink, Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { Capability } from '@/types'
import styles from './CapabilitiesGrid.module.css'

interface Props {
  capabilities: Capability[]
}

export function CapabilitiesGrid({ capabilities }: Props) {
  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        {capabilities.map((cap, i) => (
          <Column key={i} xlg={5} lg={5} md={4} sm={4} className={styles.cardCol}>
            <article className={styles.card}>
              {/* Image placeholder */}
              <div className={styles.imageWrap}>
                <div className={styles.imagePlaceholder} />
              </div>

              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.description}</p>

              {cap.url && (
                <div className={styles.ctaRow}>
                  <CarbonLink
                    href={cap.url}
                    className={styles.ctaLink}
                    inline
                  >
                    {cap.ctaLabel || 'Learn more'}
                    <ArrowRight className={styles.ctaIcon} size={20} />
                  </CarbonLink>
                </div>
              )}
            </article>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
