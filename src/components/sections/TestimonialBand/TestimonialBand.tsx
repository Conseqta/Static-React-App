import type { Testimonial } from '@/types'
import styles from './TestimonialBand.module.css'

interface Props {
  testimonials: Testimonial[]
}

export function TestimonialBand({ testimonials }: Props) {
  const t = testimonials[0]
  if (!t) return null

  return (
    <section className={styles.section} aria-label="Customer testimonial">
      <div className={styles.rule} />
      <div className={styles.content}>
        <p className={styles.quote}>{t.quote}</p>
        <div className={styles.authorBlock}>
          <div className={styles.authorName}>{t.name}</div>
          <div className={styles.authorMeta}>{t.role}</div>
          <div className={styles.authorMeta}>{t.company}</div>
        </div>
      </div>
      <div className={styles.rule} />
    </section>
  )
}
