import { Link } from 'react-router-dom'
import { Grid, Column, Tag } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { ClientCase } from '@/types'
import styles from './ClientCaseStudies.module.css'

interface Props {
  clients: ClientCase[]
}

export function ClientCaseStudies({ clients }: Props) {
  if (clients.length === 0) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <h2 className={styles.heading}>Client Success Stories</h2>
          <p className={styles.subheading}>
            Discover how we&apos;ve helped organizations transform their business through innovation
            and strategic consulting.
          </p>
        </Column>

        {clients.map((client) => (
          <Column key={client.id} xlg={5} lg={5} md={4} sm={4} className={styles.cardCol}>
            <Link to={`/clients/${client.slug}`} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  {client.heroImageUrl ? (
                    <img
                      src={client.heroImageUrl}
                      alt={client.clientName}
                      className={styles.cardImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} />
                  )}
                  {client.featured && (
                    <Tag className={styles.featuredTag} type="blue">
                      Featured
                    </Tag>
                  )}
                </div>

                <div className={styles.cardBody}>
                  {client.logoUrl && (
                    <div className={styles.logoWrapper}>
                      <img
                        src={client.logoUrl}
                        alt={client.clientName}
                        className={styles.clientLogo}
                      />
                    </div>
                  )}

                  <Tag className={styles.industryTag}>{client.industry}</Tag>

                  <h3 className={styles.cardTitle}>{client.clientName}</h3>
                  <p className={styles.cardExcerpt}>{client.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>
                      Read case study
                      <ArrowRight size={16} className={styles.arrow} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
