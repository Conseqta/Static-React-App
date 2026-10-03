import { Grid, Column, ClickableTile } from '@carbon/react'
import { Menu } from '@carbon/icons-react'
import type { IndustriesData } from '@/types'
import styles from './Industries.module.css'

interface Props {
  data: IndustriesData
}

export function Industries({ data }: Props) {
  return (
    <main className={styles.page}>
      {/* Page header */}
      <header className={styles.header}>
        <h1 className={styles.heading}>{data.heading}</h1>
        <p className={styles.subheading}>
          Explore more our top industries pages to see all related solutions
        </p>
      </header>

      {/* Cards */}
      <section className={styles.section} aria-label="Industries cards">
        <Grid fullWidth className={styles.row}>
          {data.industries.map((industry) => (
            <Column xlg={4} lg={4} md={4} sm={4} key={industry.id}>
              <ClickableTile href={industry.url} className={styles.tile}>
                {/* Image placeholder (no real image in static version) */}
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder} />
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.title}>{industry.label}</h3>
                </div>

                {/* Footer — Menu icon only, no arrow */}
                <div className={styles.footer}>
                  <Menu size={20} className={styles.smallIcon} />
                </div>
              </ClickableTile>
            </Column>
          ))}
        </Grid>
      </section>
    </main>
  )
}
