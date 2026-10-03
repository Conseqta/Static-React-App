import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { Insight } from '@/types'
import styles from './InsightsGrid.module.css'

interface Props {
  insights: Insight[]
  heading?: string
}

interface CardData {
  title: string
  description: string
  linkText: string
  url: string
  isExternal: boolean
}

const LargeImageCard = ({ data }: { data: CardData }) => (
  <article className={styles.largeCard}>
    <div className={styles.largeImageWrapper}>
      <div className={styles.imagePlaceholderLarge} />
      <div className={styles.largeCardOverlay}>
        <p className={styles.largeCategory}>{data.title}</p>
        <h4 className={styles.largeTitle}>{data.description}</h4>
        <Link
          to={data.url}
          target={data.isExternal ? '_blank' : undefined}
          rel={data.isExternal ? 'noopener noreferrer' : undefined}
          className={styles.largeCtaAnchor}
        >
          <span>{data.linkText}</span>
          <ArrowRight className={styles.ctaIcon} size={16} />
        </Link>
      </div>
    </div>
  </article>
)

const MediumSplitCard = ({ data }: { data: CardData }) => (
  <article className={styles.mediumCard}>
    <div className={styles.mediumImageWrapper}>
      <div className={styles.imagePlaceholderMedium} />
    </div>
    <div className={styles.mediumContent}>
      <p className={styles.mediumCategory}>{data.title}</p>
      <h4 className={styles.mediumTitle}>{data.description}</h4>
      <Link
        to={data.url}
        target={data.isExternal ? '_blank' : undefined}
        rel={data.isExternal ? 'noopener noreferrer' : undefined}
        className={styles.mediumCtaAnchor}
      >
        <span>{data.linkText}</span>
        <ArrowRight className={styles.ctaIcon} size={16} />
      </Link>
    </div>
  </article>
)

const SmallCard = ({ data, borderRight }: { data: CardData; borderRight?: boolean }) => (
  <article className={`${styles.smallCard} ${borderRight ? styles.smallCardBorderRight : ''}`}>
    <div className={styles.smallImageWrapper}>
      <div className={styles.imagePlaceholderSmall} />
    </div>
    <div className={styles.smallContent}>
      <p className={styles.smallCategory}>{data.title}</p>
      <h4 className={styles.smallTitle}>{data.description}</h4>
      <Link
        to={data.url}
        target={data.isExternal ? '_blank' : undefined}
        rel={data.isExternal ? 'noopener noreferrer' : undefined}
        className={styles.smallCtaAnchor}
      >
        <span>{data.linkText}</span>
        <ArrowRight className={styles.ctaIcon} size={16} />
      </Link>
    </div>
  </article>
)

export function InsightsGrid({ insights, heading = 'Insights' }: Props) {
  if (insights.length === 0) return null

  const cards: CardData[] = insights.map((i) => ({
    title: i.title,
    description: i.description,
    linkText: i.linkText ?? 'Read more',
    url: i.url ?? '#',
    isExternal: i.isExternal ?? false,
  }))

  // Fill to 4 if needed
  while (cards.length < 4) {
    cards.push(cards[cards.length % cards.length])
  }

  const [leftCard, topRightCard, bottomLeftCard, bottomRightCard] = cards

  return (
    <section className={styles.insightsSection}>
      <h1 className={styles.heading}>{heading}</h1>
      <Grid className={styles.insightsGrid} fullWidth>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <Grid condensed className={styles.cardsGrid}>
            <Column xlg={8} lg={8} md={4} sm={4} className={styles.leftColumn}>
              <LargeImageCard data={leftCard} />
            </Column>

            <Column xlg={8} lg={8} md={4} sm={4} className={styles.rightColumnWrapper}>
              <div className={styles.rightColumn}>
                <div className={styles.topRightCard}>
                  <MediumSplitCard data={topRightCard} />
                </div>
                <div className={styles.bottomRightCards}>
                  <div className={styles.bottomCardWrapper}>
                    <SmallCard data={bottomLeftCard} borderRight />
                  </div>
                  <div className={styles.bottomCardWrapper}>
                    <SmallCard data={bottomRightCard} />
                  </div>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </section>
  )
}
