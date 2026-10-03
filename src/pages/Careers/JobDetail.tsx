import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Grid, Column, Theme } from '@carbon/react'
import { jobs } from '@/data/careers'
import styles from './JobDetail.module.css'

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>()
  const job = jobs.find((j) => j.slug === slug)

  usePageMeta({
    title: job ? `${job.title} | Careers | Conseqta` : 'Job Not Found | Conseqta',
    description: job?.description,
  })

  if (!job) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Job Not Found</h1>
        <Link to="/careers/jobs" style={{ color: '#0f62fe' }}>← Back to All Jobs</Link>
      </div>
    )
  }

  return (
    <Theme theme="g10">
      <main className={styles.page}>
        {/* Header Section */}
        <section className={styles.headerSection}>
          <Grid fullWidth>
            <Column xlg={16} lg={16} md={8} sm={4} className={styles.headerCol}>
              <Link to="/careers/jobs" className={styles.backLink}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Back to search results</span>
              </Link>

              <h1 className={styles.jobTitle}>{job.title}</h1>

              <div className={styles.jobMetaRow}>
                <div className={styles.jobMeta}>
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </div>

              <Link to="/contact" className={styles.applyButton}>
                Apply now
              </Link>
            </Column>
          </Grid>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <Grid fullWidth>
            {/* Left: description */}
            <Column xlg={12} lg={12} md={5} sm={4} className={styles.descriptionCol}>
              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>Introduction</h2>
                <p>{job.description}</p>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>Your role and responsibilities</h2>
                <ul>
                  {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>

              <div className={styles.contentBlock}>
                <h2 className={styles.sectionHeading}>Required technical and professional expertise</h2>
                <ul>
                  {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <div className={styles.contentBlock}>
                  <h2 className={styles.sectionHeading}>Preferred technical and professional experience</h2>
                  <ul>
                    {job.niceToHave.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
            </Column>

            {/* Right: sidebar */}
            <Column xlg={4} lg={4} md={3} sm={4} className={styles.sidebarCol}>
              <div className={styles.sidebar}>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Job Title</div>
                  <div className={styles.detailValue}>{job.title}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Category</div>
                  <div className={styles.detailValue}>{job.category}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Level</div>
                  <div className={styles.detailValue}>{job.level}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Location</div>
                  <div className={styles.detailValue}>{job.location}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Employment type</div>
                  <div className={styles.detailValue}>{job.type}</div>
                </div>

                <Link to="/contact" className={styles.applyButtonSidebar}>
                  Apply now
                </Link>
              </div>
            </Column>
          </Grid>
        </section>
      </main>
    </Theme>
  )
}
