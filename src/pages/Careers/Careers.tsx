import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight, Bookmark } from '@carbon/icons-react'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import {
  careersHero,
  stories,
  careersTestimonial,
  jobs,
  whoWeAreHeading,
  jobsHeading,
  allJobsCtaLabel,
} from '@/data/careers'
import styles from './Careers.module.css'

export default function Careers() {
  usePageMeta({
    title: 'Careers | Conseqta',
    description:
      'Join Conseqta — a team of practitioners building enterprise technology that matters. Explore open roles in cloud, AI, data, and consulting.',
  })

  const featuredJobs = jobs.filter((j) => j.featured)

  return (
    <>
      <HeroBanner data={careersHero} />

      <main className={styles.page}>
        {/* ===== WHO WE ARE ===== */}
        <section className={styles.whoSection} aria-labelledby="who-heading">
          <Grid fullWidth className={styles.whoGrid}>
            <Column xlg={16} lg={16} md={8} sm={4} className={styles.whoGridHeadingCol}>
              <h2 id="who-heading" className={styles.whoHeading}>
                {whoWeAreHeading}
              </h2>
            </Column>

            {/* Story cards: 3 per row */}
            {stories.slice(0, 6).map((story, idx) => {
              const hasLink = Boolean(story.ctaUrl)

              const card = (
                <article className={styles.storyCard}>
                  <div className={styles.storyImageWrapper}>
                    <div className={styles.storyImagePlaceholder} />
                  </div>
                  <div className={styles.storyBody}>
                    <div className={styles.storyCategory}>{story.category}</div>
                    <h3 className={styles.storyTitle}>{story.title}</h3>
                    <p className={styles.storyDesc}>{story.description}</p>
                  </div>
                  <div className={styles.storyFooter}>
                    <button type="button" className={styles.bookmarkButton} aria-label="Save story">
                      <Bookmark size={24} />
                    </button>
                    <ArrowRight size={24} className={styles.storyArrow} />
                  </div>
                </article>
              )

              return (
                <Column key={idx} xlg={5} lg={5} md={4} sm={4} className={styles.storyCol}>
                  {hasLink ? (
                    <Link to={story.ctaUrl!} className={styles.storyLink}>
                      {card}
                    </Link>
                  ) : (
                    <div className={styles.storyLink}>{card}</div>
                  )}
                </Column>
              )
            })}

            {/* Testimonial row */}
            <Column xlg={16} lg={16} md={8} sm={4} className={styles.testimonialRow}>
              <div className={styles.testimonialLayout}>
                <div className={styles.testimonialPhotoCol}>
                  <div className={styles.testimonialPhotoWrapper}>
                    <div className={styles.testimonialPhotoPlaceholder}>
                      <span className={styles.testimonialInitial}>
                        {careersTestimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className={styles.testimonialNameRole}>
                    <div className={styles.testimonialName}>{careersTestimonial.name}</div>
                    <div className={styles.testimonialRole}>{careersTestimonial.role}</div>
                  </div>
                </div>
                <div className={styles.testimonialQuoteCol}>
                  <p className={styles.testimonialQuote}>{careersTestimonial.quote}</p>
                </div>
              </div>
            </Column>
          </Grid>
        </section>

        {/* ===== FEATURED JOBS ===== */}
        <section className={styles.jobsSection} aria-labelledby="jobs-heading">
          <Grid fullWidth className={styles.jobsGrid}>
            <Column xlg={16} lg={16} md={8} sm={4} className={styles.jobsHeadingCol}>
              <h2 id="jobs-heading" className={styles.jobsHeading}>
                {jobsHeading}
              </h2>
            </Column>

            {featuredJobs.map((job, idx) => {
              const href = `/careers/jobs/${job.slug}`
              return (
                <Column key={idx} xlg={5} lg={5} md={4} sm={4} className={styles.jobCol}>
                  <Link to={href} className={styles.jobLink}>
                    <article className={styles.jobCard}>
                      <div className={styles.jobCategory}>{job.category}</div>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.jobMetaLine}>{job.level}</div>
                      <div className={styles.jobMetaLine}>{job.location}</div>
                      <div className={styles.jobArrowWrap}>
                        <ArrowRight size={24} className={styles.jobArrow} />
                      </div>
                    </article>
                  </Link>
                </Column>
              )
            })}

            <Column xlg={16} lg={16} md={8} sm={4} className={styles.jobsCtaRow}>
              <Link to="/careers/jobs" className={styles.jobsCtaBar}>
                <span>{allJobsCtaLabel}</span>
                <ArrowRight size={16} className={styles.jobsCtaIcon} />
              </Link>
            </Column>
          </Grid>
        </section>
      </main>
    </>
  )
}
