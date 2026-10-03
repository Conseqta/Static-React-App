import { Link } from 'react-router-dom'
import { Grid, Column, Tag, Theme } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { Job } from '@/types'
import styles from './JobCard.module.css'

interface Props {
  jobs: Job[]
  heading?: string
  showViewAll?: boolean
}

export function JobCard({ jobs, heading = 'Open Positions', showViewAll = true }: Props) {
  return (
    <Theme theme="g10">
      <section className={styles.section} aria-labelledby="jobs-heading">
        <div className={styles.inner}>
          <h2 id="jobs-heading" className={styles.heading}>
            {heading}
          </h2>

          <Grid fullWidth className={styles.grid}>
            {jobs.map((job) => (
              <Column key={job.id} xlg={8} lg={8} md={4} sm={4} className={styles.col}>
                <Link to={`/careers/jobs/${job.slug}`} className={styles.cardLink}>
                  <article className={styles.card}>
                    <div className={styles.category}>{job.category}</div>
                    <h3 className={styles.title}>{job.title}</h3>
                    <div className={styles.meta}>
                      <Tag type="blue" size="sm">
                        {job.level}
                      </Tag>
                      <Tag type="gray" size="sm">
                        {job.location}
                      </Tag>
                      <Tag type="green" size="sm">
                        {job.type}
                      </Tag>
                    </div>
                    <div className={styles.footer}>
                      <ArrowRight size={20} className={styles.arrow} />
                    </div>
                  </article>
                </Link>
              </Column>
            ))}
          </Grid>

          {showViewAll && (
            <div className={styles.ctaRow}>
              <Link to="/careers/jobs" className={styles.viewAllLink}>
                <span>View all open positions</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </Theme>
  )
}
