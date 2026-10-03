import { Grid, Column, ClickableTile } from '@carbon/react'
import type { ConsultingService } from '@/types'
import styles from './ConsultingServices.module.css'

interface Props {
  services: ConsultingService[]
}

export function ConsultingServices({ services }: Props) {
  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.row}>
        {services.map((service) => (
          <Column xlg={4} lg={4} md={4} sm={4} key={service.id}>
            <ClickableTile href={service.url} className={styles.tile}>
              {/* Image on LEFT — placeholder since no real image */}
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder} />
              </div>

              {/* Content on RIGHT */}
              <div className={styles.content}>
                {service.eyebrow && <p className={styles.eyebrow}>{service.eyebrow}</p>}
                {service.description && <p className={styles.body}>{service.description}</p>}
                <div className={styles.header}>
                  <span aria-hidden="true" className={styles.arrow}>→</span>
                </div>
              </div>
            </ClickableTile>
          </Column>
        ))}

        {services.length === 0 && (
          <Column xlg={16} lg={16} md={8} sm={4}>
            <p className={styles.empty}>No consulting services configured yet.</p>
          </Column>
        )}
      </Grid>
    </section>
  )
}
