import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { GraniteBandData } from '@/types'
import styles from './GraniteBand.module.css'

interface Props {
  data: GraniteBandData
}

export function GraniteBand({ data }: Props) {
  if (!data.heading && !data.intro && !data.features?.length) return null

  return (
    <section className={styles.section} aria-labelledby="granite-heading">
      <Grid fullWidth className={styles.grid}>
        {/* Left: heading + intro + features + CTA */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.leftCol}>
          <h2 id="granite-heading" className={styles.heading}>
            {data.heading}
          </h2>
          {data.intro && <p className={styles.intro}>{data.intro}</p>}

          {data.features && data.features.length > 0 && (
            <div className={styles.features}>
              {data.features.map((f, idx) => (
                <div key={idx} className={styles.featureRow}>
                  <div className={styles.featureText}>
                    {f.title && <div className={styles.featureTitle}>{f.title}</div>}
                    {f.body && <p className={styles.featureBody}>{f.body}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.ctaUrl && (
            <div className={styles.ctaRow}>
              <Link to={data.ctaUrl} className={styles.ctaLink}>
                {data.ctaLabel || 'Learn more'}
                <ArrowRight size={18} className={styles.ctaIcon} />
              </Link>
            </div>
          )}
        </Column>

        {/* Right: video/image placeholder */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.rightCol}>
          <div className={styles.videoThumbWrapper}>
            <div className={styles.thumbPlaceholder} />
            <div className={styles.playButton} aria-hidden="true">
              <div className={styles.playCircle} />
              <div className={styles.playTriangle} />
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  )
}
