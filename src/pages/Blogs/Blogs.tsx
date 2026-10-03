import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import { BlogGrid } from '@/components/sections/BlogGrid/BlogGrid'
import { blogHeroBanner, blogPosts } from '@/data/blogs'
import styles from './Blogs.module.css'

export default function Blogs() {
  usePageMeta({
    title: 'Thought Leadership | Conseqta',
    description:
      'Insights from Conseqta practitioners on enterprise AI, cloud engineering, cybersecurity, and digital transformation.',
  })

  return (
    <section className={styles.page} aria-labelledby="ibv-blog-heading">
      {/* Hero — light blue bg (#dff0ff), two columns */}
      {blogHeroBanner && (
        <div className={styles.hero}>
          <Grid fullWidth className={styles.heroGrid}>
            <Column xlg={8} lg={8} md={4} sm={4} className={styles.heroTextCol}>
              <h1 id="ibv-blog-heading" className={styles.heroHeading}>
                {blogHeroBanner.heading.split('\n').map((line, idx, arr) => (
                  <span key={idx}>
                    {line}
                    {idx < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <div className={styles.subSection}>
                <p className={styles.heroSubheading}>{blogHeroBanner.subheading}</p>

                {blogHeroBanner.ctaUrl && blogHeroBanner.ctaLabel && (
                  <Link to={blogHeroBanner.ctaUrl} className={styles.heroButton}>
                    <span className={styles.buttonInner}>
                      <span>{blogHeroBanner.ctaLabel}</span>
                      <ArrowRight size={16} className={styles.buttonIcon} />
                    </span>
                  </Link>
                )}
              </div>
            </Column>

            <Column xlg={8} lg={8} md={4} sm={4} className={styles.heroImageCol}>
              <div className={styles.heroImageWrapper}>
                <div className={styles.heroImagePlaceholder} />
              </div>
            </Column>
          </Grid>
        </div>
      )}

      {/* Cards grid */}
      <BlogGrid posts={blogPosts} />
    </section>
  )
}
