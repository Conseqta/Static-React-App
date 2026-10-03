import { Link } from 'react-router-dom'
import { Grid, Column, Tile } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { Partner } from '@/types'
import styles from './PartnersBand.module.css'

interface Props {
  partners: Partner[]
  heading?: string
}

export function PartnersBand({ partners, heading }: Props) {
  if (!partners || partners.length === 0) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth>
        {heading && (
          <Column xlg={16} lg={16} md={8} sm={4}>
            <h2 className={styles.heading}>{heading}</h2>
          </Column>
        )}

        {partners.map((p, i) => {
          const cardContent = (
            <article className={styles.card}>
              {/* Logo area */}
              <div className={styles.logoWrap}>
                {p.logoUrl ? (
                  <img src={p.logoUrl} alt={p.name} className={styles.logo} />
                ) : (
                  <div className={styles.logoPlaceholder}>
                    <span className={styles.logoInitials}>
                      {p.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
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
            <Column key={i} xlg={4} lg={4} md={4} sm={4} className={styles.cardCol}>
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
