import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { DataServicesBandData } from '@/data/accelerators'
import styles from './DataServicesBand.module.css'

interface Props {
  data: DataServicesBandData
}

export function DataServicesBand({ data }: Props) {
  const {
    heading,
    intro,
    primaryCtaLabel = 'Explore services →',
    primaryCtaUrl,
    services = [],
  } = data

  return (
    <section className={styles.section} aria-labelledby={`ds-heading-${heading}`}>
      <div className={styles.container}>
        <Grid fullWidth className={styles.topGrid}>
          <Column xlg={8} lg={8} md={4} sm={4} className={styles.leftCol}>
            <h2 id={`ds-heading-${heading}`} className={styles.heading}>
              {heading}
            </h2>
          </Column>
          <Column xlg={8} lg={8} md={4} sm={4} className={styles.rightCol}>
            <h2 className={styles.intro}>{intro}</h2>
            {primaryCtaUrl && (
              <Link to={primaryCtaUrl} className={styles.primaryCtaButton}>
                <span>{primaryCtaLabel}</span>
                <ArrowRight size={16} className={styles.primaryCtaIcon} />
              </Link>
            )}
          </Column>
        </Grid>

        <Grid fullWidth className={styles.servicesGrid}>
          {services.slice(0, 4).map((svc, idx) => (
            <Column xlg={4} lg={4} md={4} sm={4} key={idx}>
              {svc.ctaUrl ? (
                <Link to={svc.ctaUrl} className={styles.serviceLink}>
                  <article className={styles.serviceCard}>
                    <h3 className={styles.serviceTitle}>{svc.title}</h3>
                    <p className={styles.serviceDesc}>{svc.description}</p>
                    {svc.ctaLabel && (
                      <div className={styles.serviceCtaRow}>
                        <span className={styles.serviceCtaLabel}>{svc.ctaLabel}</span>
                        <ArrowRight size={16} className={styles.serviceCtaIcon} />
                      </div>
                    )}
                  </article>
                </Link>
              ) : (
                <article className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.description}</p>
                </article>
              )}
            </Column>
          ))}
        </Grid>
      </div>
    </section>
  )
}
