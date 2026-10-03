import { Link } from 'react-router-dom'
import { Grid, Column } from '@carbon/react'
import { ArrowRight, Bookmark } from '@carbon/icons-react'
import type { BlogPost } from '@/types'
import styles from './BlogGrid.module.css'

interface Props {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: Props) {
  return (
    <div className={styles.cardsSection}>
      <Grid fullWidth className={styles.cardsGrid}>
        {posts.map((post) => (
          <Column key={post.id} xlg={4} lg={4} md={4} sm={4} className={styles.cardCol}>
            <Link to={`/blogs/${post.slug}`} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  {post.heroImageUrl ? (
                    <img
                      src={post.heroImageUrl}
                      alt={post.title}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.cardImagePlaceholder} />
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>
                    <h2>{post.title}</h2>
                  </div>
                  <div className={styles.cardExcerpt}>
                    <p>{post.excerpt}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    className={styles.bookmarkButton}
                    aria-label="Save article"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Bookmark size={24} />
                  </button>
                  <ArrowRight size={24} className={styles.cardArrow} />
                </div>
              </article>
            </Link>
          </Column>
        ))}
      </Grid>
    </div>
  )
}
