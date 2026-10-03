import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { KnowledgeBandCard } from '@/data/accelerators'
import styles from './KnowledgeBand.module.css'

interface Props {
  heading?: string
  body?: string
  cards: KnowledgeBandCard[]
}

export function KnowledgeBand({
  heading = 'Knowledge is power. Be powerful.',
  body = 'Conseqta delivers trusted, technology-based insights that help enterprise leaders make smarter decisions and more informed technology investments—and inspires them to act.',
  cards = [],
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!heading && !cards.length) return null

  return (
    <section className={styles.section} aria-labelledby="knowledge-heading">
      <Grid fullWidth className={styles.grid}>
        {/* Top row: text left + image right */}
        <Column xlg={10} lg={10} md={8} sm={4} className={styles.leftCol}>
          <h1 id="knowledge-heading" className={styles.heading}>
            {heading}
          </h1>
          <p className={styles.body}>{body}</p>
        </Column>

        <Column xlg={6} lg={6} md={8} sm={4} className={styles.rightCol}>
          <div className={styles.imageWrapper}>
            {/* Image placeholder that changes with selected card */}
            <div
              className={styles.image}
              style={{
                background: `linear-gradient(135deg, hsl(${(selectedIndex * 40) + 220}, 80%, 55%) 0%, hsl(${(selectedIndex * 40) + 240}, 90%, 35%) 100%)`,
              }}
            />
          </div>
        </Column>

        {/* Bottom row: article cards */}
        <Column xlg={16} lg={16} md={8} sm={4} className={styles.cardsRow}>
          <div className={styles.cardsGrid}>
            {cards.map((card, idx) => {
              const active = selectedIndex === idx

              return (
                <Link
                  key={idx}
                  to={card.ctaUrl}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  className={styles.cardLink}
                  onClick={() => setSelectedIndex(idx)}
                >
                  <article
                    className={`${styles.card} ${active ? styles.cardActive : ''} ${styles.cardClickable}`}
                  >
                    <div className={styles.cardCategory}>{card.category}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    {card.description && (
                      <p className={styles.cardDesc}>{card.description}</p>
                    )}
                    <div className={`${styles.cardCtaRow} ${!active ? styles.cardCtaHidden : ''}`}>
                      <span className={styles.cardCtaLabel}>{card.ctaLabel}</span>
                      <ArrowRight size={16} className={styles.cardCtaIcon} />
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </Column>
      </Grid>
    </section>
  )
}
