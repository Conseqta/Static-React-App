import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Grid, Column, Theme } from '@carbon/react'
import { LogoLinkedin, LogoTwitter, Email } from '@carbon/icons-react'
import { blogPosts } from '@/data/blogs'
import { formatDate } from '@/utils'
import styles from './BlogDetail.module.css'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  usePageMeta({
    title: post ? `${post.title} | Conseqta` : 'Article Not Found | Conseqta',
    description: post?.excerpt,
  })

  if (!post) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Article Not Found</h1>
        <Link to="/blogs" style={{ color: '#0f62fe' }}>← Back to Articles</Link>
      </div>
    )
  }

  const published = formatDate(post.publishedAt)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)

  const shareUrl = `https://conseqta.com/blogs/${post.slug}`

  return (
    <Theme theme="g10">
      <article className={styles.page}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <Grid fullWidth className={styles.heroGrid}>
            <Column xlg={8} lg={8} md={4} sm={4} className={styles.heroTextCol}>
              {post.category && <p className={styles.heroCategory}>{post.category}</p>}
              <h1 className={styles.heroHeading}>{post.title}</h1>
            </Column>

            <Column xlg={8} lg={8} md={4} sm={4} className={styles.heroImageCol}>
              <div className={styles.heroImageWrapper}>
                {post.heroImageUrl ? (
                  <img src={post.heroImageUrl} alt={post.title} className={styles.heroImage} />
                ) : (
                  <div className={styles.heroImagePlaceholder} />
                )}
              </div>
            </Column>
          </Grid>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.contentSection}>
          <Grid fullWidth className={styles.contentGrid}>
            {/* Main article */}
            <Column xlg={12} lg={12} md={8} sm={4} className={styles.articleCol}>
              <h2 className={styles.articleTitle}>{post.articleTitle || post.title}</h2>

              <p className={styles.articleMetaMobile}>
                {published}
                {post.readTime && ` • ${post.readTime}`}
                {post.author && ` • ${post.author}`}
              </p>

              <p className={styles.excerpt}>{post.excerpt}</p>

              {/* Body image placeholder */}
              <div className={styles.bodyImageWrapper}>
                <div className={styles.bodyImagePlaceholder} />
              </div>

              <div className={styles.body}>
                {post.body.split('\n\n').map((para, idx) => {
                  if (para.startsWith('## ')) {
                    return <h3 key={idx} style={{ fontSize: '1.5rem', fontWeight: 600, margin: '2rem 0 1rem', color: '#161616' }}>{para.replace('## ', '')}</h3>
                  }
                  if (para.match(/^\*\*[^*]+\*\*$/)) {
                    return <h4 key={idx} style={{ fontSize: '1.125rem', fontWeight: 600, margin: '1.5rem 0 0.75rem', color: '#161616' }}>{para.replace(/\*\*/g, '')}</h4>
                  }
                  return <p key={idx}>{para}</p>
                })}
              </div>
            </Column>

            {/* Meta sidebar */}
            <Column xlg={4} lg={4} md={8} sm={4} className={styles.metaCol}>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Date</div>
                <div className={styles.metaValue}>{published}</div>
              </div>

              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Read time</div>
                <div className={styles.metaValue}>{post.readTime}</div>
              </div>

              {post.author && (
                <div className={styles.metaBlock}>
                  <div className={styles.metaLabel}>Authors</div>
                  <div className={styles.authorChip}>{post.author}</div>
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className={styles.metaBlock}>
                  <div className={styles.metaLabel}>Topics</div>
                  <div className={styles.tags}>
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Share</div>
                <div className={styles.shareIcons}>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
                    className={styles.shareLink}
                    aria-label="Share via email"
                  >
                    <Email size={32} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareLink}
                    aria-label="Share on LinkedIn"
                  >
                    <LogoLinkedin size={32} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareLink}
                    aria-label="Share on X"
                  >
                    <LogoTwitter size={32} />
                  </a>
                </div>
              </div>
            </Column>
          </Grid>
        </section>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <Grid fullWidth className={styles.relatedGrid}>
              <Column xlg={16} lg={16} md={8} sm={4}>
                <h3 className={styles.relatedHeading}>Related Articles</h3>
              </Column>
              {relatedPosts.map((r, idx) => (
                <Column key={idx} xlg={4} lg={4} md={4} sm={4} className={styles.relatedCol}>
                  <Link to={`/blogs/${r.slug}`} className={styles.relatedLink}>
                    <article className={styles.relatedCard}>
                      <div className={styles.relatedImageWrapper}>
                        <div className={styles.relatedImagePlaceholder} />
                      </div>
                      <div className={styles.relatedBody}>
                        <h4 className={styles.relatedTitle}>{r.title}</h4>
                        {r.author && <p className={styles.relatedAuthor}>{r.author}</p>}
                        <p className={styles.relatedDate}>{formatDate(r.publishedAt)}</p>
                        {r.tags && r.tags.length > 0 && (
                          <div className={styles.relatedTags}>
                            {r.tags.slice(0, 2).map((tag, tidx) => (
                              <span key={tidx} className={styles.relatedTag}>{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                </Column>
              ))}
            </Grid>
          </section>
        )}
      </article>
    </Theme>
  )
}
