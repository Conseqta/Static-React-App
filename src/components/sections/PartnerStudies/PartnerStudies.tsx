import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { PartnerStudy } from '@/types'
import styles from './PartnerStudies.module.css'

interface Props {
  studies: PartnerStudy[]
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function PartnerStudies({ studies }: Props) {
  if (studies.length === 0) return null

  return (
    <section className={styles.sectionContainer}>
      <Grid>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <h1 className={styles.mainHeading}>IBV + Partners</h1>
        </Column>

        <Column xlg={16} lg={16} md={8} sm={4}>
          <Grid className={styles.cardsGrid}>
            {studies.map((study) => (
              <Column xlg={4} lg={4} md={4} sm={4} key={study.id} className={styles.cardColumn}>
                <article className={styles.card}>
                  {/* Logo area */}
                  <div className={styles.logoWrapper}>
                    {study.logoUrl ? (
                      <img
                        src={study.logoUrl}
                        alt="Partner logo"
                        className={styles.partnerLogo}
                      />
                    ) : (
                      <div className={styles.logoPlaceholder} />
                    )}
                  </div>

                  <div className={styles.content}>
                    <p className={styles.date}>{formatDate(study.publishDate)}</p>
                    <h4 className={styles.title}>{study.title}</h4>
                    {study.url && (
                      <Link
                        to={study.url}
                        className={styles.ctaAnchor}
                      >
                        <span>{study.linkText || 'Learn more'}</span>
                        <ArrowRight className={styles.ctaIcon} size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              </Column>
            ))}
          </Grid>
        </Column>

        <Column xlg={16} lg={16} md={8} sm={4} className={styles.viewAllColumn}>
          <Link to="/contact" className={styles.viewAllButton}>
            <span>View all partner studies</span>
            <ArrowRight className={styles.ctaIcon} size={16} />
          </Link>
        </Column>
      </Grid>
    </section>
  )
}
