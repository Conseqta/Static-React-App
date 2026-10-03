import { Grid, Column } from '@carbon/react'
import type { BenefitsBandData } from '@/types'
import styles from './BenefitsBand.module.css'

interface Props {
  data: BenefitsBandData
}

export function BenefitsBand({ data }: Props) {
  return (
    <section className={styles.section}>
      {/* Row 1: Title */}
      <Grid fullWidth className={styles.titleRow}>
        <Column xlg={16} lg={16} md={8} sm={4} className={styles.titleCol}>
          <h2 className={styles.heading}>{data.heading}</h2>
        </Column>
      </Grid>

      {/* Row 2: 4 metric columns */}
      <Grid fullWidth className={styles.itemsRow}>
        {data.benefits.map((item, i) => (
          <Column key={i} xlg={4} lg={4} md={4} sm={4} className={styles.itemCol}>
            <div className={styles.itemInner}>
              <div className={styles.metric}>{item.metric}</div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
