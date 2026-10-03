import type { ConsultingInfoData } from '@/types'
import styles from './ConsultingInfo.module.css'

interface Props {
  data: ConsultingInfoData
}

export function ConsultingInfo({ data }: Props) {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBannerInner}>
        <div className={styles.heroBannerLeft}>
          <h1>{data.title}</h1>
        </div>
        <div className={styles.heroBannerRight}>
          <p>{data.contentTop}</p>
          <p>{data.contentBottom}</p>
        </div>
      </div>
    </section>
  )
}
