'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Column, Tile } from '@carbon/react'
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react'
import type { TelecomTrendItem } from '@/types'
import styles from './TelecomTrends.module.css'
import stylesClients from './TelecomTrendsClients.module.css'

interface Props {
  items: TelecomTrendItem[]
  heading?: string
  /** 'clients' uses xlg=4, 4/page, 320px img, #161616 colors
   *  'partners' (default) uses xlg=5, 3/page, 240px img, #000000 colors */
  variant?: 'clients' | 'partners'
}

export function TelecomTrends({ items, heading, variant = 'partners' }: Props) {
  const isClients = variant === 'clients'
  const itemsPerPage = isClients ? 4 : 3
  const colSize = isClients ? 4 : 5
  const s = isClients ? stylesClients : styles

  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(items.length / itemsPerPage)

  if (!items || items.length === 0) return null

  const displayedItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section className={s.section}>
      {/* Header row is OUTSIDE the Grid in the clients version */}
      {heading && (
        <div className={s.headerRow}>
          <h2 className={s.heading}>{heading}</h2>
        </div>
      )}

      <Grid fullWidth className={s.mainGrid}>
        {displayedItems.map((item, i) => (
          <Column key={i} xlg={colSize} lg={colSize} md={4} sm={4} className={s.cardCol}>
            {item.ctaUrl ? (
              <Link to={item.ctaUrl} className={s.tileLink}>
                <Tile className={s.tile}>
                  <article className={s.card}>
                    <div className={s.imageWrap}>
                      <div className={s.imagePlaceholder} />
                    </div>
                    <div className={s.cardInner}>
                      <h3 className={s.cardTitle}>{item.title}</h3>
                      <p className={s.cardDesc}>{item.description}</p>
                      <div className={s.ctaRow}>
                        <ArrowRight className={s.ctaIcon} size={18} />
                      </div>
                    </div>
                  </article>
                </Tile>
              </Link>
            ) : (
              <div className={s.tileLink}>
                <Tile className={s.tile}>
                  <article className={s.card}>
                    <div className={s.imageWrap}>
                      <div className={s.imagePlaceholder} />
                    </div>
                    <div className={s.cardInner}>
                      <h3 className={s.cardTitle}>{item.title}</h3>
                      <p className={s.cardDesc}>{item.description}</p>
                    </div>
                  </article>
                </Tile>
              </div>
            )}
          </Column>
        ))}
      </Grid>

      {totalPages > 1 && (
        <div className={s.paginationControls}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className={s.navButton}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          <span className={s.pageIndicator}>
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className={s.navButton}
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}
