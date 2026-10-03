import { Link } from 'react-router-dom'
import { Grid, Column, Theme } from '@carbon/react'
import { ArrowRight, Launch } from '@carbon/icons-react'
import { contactData } from '@/data/contact'
import styles from './ContactForm.module.css'

export function ContactForm() {
  const {
    heroHeading,
    subscriptionTiles,
    promoEyebrow,
    promoHeading,
    promoCtaLabel,
    promoCtaUrl,
    contactHeading,
    contactBlocks,
    articles,
  } = contactData

  return (
    <Theme theme="g10">
      <main className={styles.page}>
        {/* ===== TOP HERO / CONFIRMATION SECTION ===== */}
        <section className={styles.heroSection} aria-labelledby="hero-heading">
          <Grid fullWidth className={styles.heroGrid}>
            {/* Left: heading + background decoration */}
            <Column xlg={8} lg={8} md={8} sm={4} className={styles.heroLeftCol}>
              <div className={styles.heroBackgroundWrapper} aria-hidden="true">
                <div className={styles.heroBackgroundDecor} />
              </div>
              <h1 id="hero-heading" className={styles.heroHeading}>
                {heroHeading}
              </h1>
            </Column>

            {/* Right: subscription tiles + promo */}
            <Column xlg={8} lg={8} md={8} sm={4} className={styles.heroRightCol}>
              {/* 2×2 tile grid */}
              <div className={styles.tilesRow}>
                {subscriptionTiles.map((tile, idx) => (
                  <article key={idx} className={styles.tileCard}>
                    <div className={styles.tileIconWrapper} aria-hidden="true">
                      <div className={styles.tileIconPlaceholder} />
                    </div>
                    <h2 className={styles.tileTitle}>{tile.title}</h2>
                    <p className={styles.tileBody}>{tile.body}</p>
                    {tile.ctaLabel && tile.ctaUrl && (
                      <Link to={tile.ctaUrl} className={styles.tileCta}>
                        <span>{tile.ctaLabel}</span>
                        <ArrowRight size={16} className={styles.tileCtaIcon} />
                      </Link>
                    )}
                  </article>
                ))}
              </div>

              {/* Promo section */}
              {promoHeading && (
                <div className={styles.promoSection}>
                  <div className={styles.promoImageWrapper}>
                    <div className={styles.promoImagePlaceholder} />
                  </div>
                  <div className={styles.promoContent}>
                    {promoEyebrow && (
                      <div className={styles.promoEyebrow}>{promoEyebrow}</div>
                    )}
                    <h2 className={styles.promoHeading}>{promoHeading}</h2>
                    {promoCtaLabel && promoCtaUrl && (
                      <Link to={promoCtaUrl} className={styles.promoCta}>
                        <span>{promoCtaLabel}</span>
                        <ArrowRight size={16} className={styles.promoCtaIcon} />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </Column>
          </Grid>
        </section>

        {/* ===== CONTACT + ARTICLES SECTION ===== */}
        <section className={styles.bottomSection} aria-labelledby="contact-heading">
          <Grid fullWidth className={styles.bottomGrid}>
            {/* Left: contact information */}
            <Column xlg={12} lg={12} md={8} sm={4} className={styles.contactCol}>
              <h2 id="contact-heading" className={styles.contactHeading}>
                {contactHeading}
              </h2>

              <div className={styles.contactBlocks}>
                {contactBlocks.map((block, idx) => (
                  <div key={idx} className={styles.contactBlock}>
                    {/* Icon placeholder — original has transform: scale(1.5) icon */}
                    <div className={styles.contactIconAndHeading}>
                      <div className={styles.contactIcon} aria-hidden="true">
                        <div className={styles.contactIconInner} />
                      </div>
                    </div>

                    <div className={styles.contactBlockHeading}>{block.heading}</div>

                    {block.lines && block.lines.length > 0 && (
                      <div className={styles.contactLines}>
                        {block.lines.map((line, lineIdx) => {
                          const colonIndex = line.indexOf(':')
                          const hasKey = colonIndex > 0
                          return (
                            <div key={lineIdx} className={styles.contactLine}>
                              {hasKey ? (
                                <>
                                  <span className={styles.contactLineKey}>
                                    {line.substring(0, colonIndex + 1)}
                                  </span>{' '}
                                  {line.substring(colonIndex + 1)}
                                </>
                              ) : (
                                line
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {block.socialLinks && block.socialLinks.length > 0 && (
                      <div className={styles.socialLinks}>
                        {block.socialLinks.map((social, socialIdx) => (
                          <a
                            key={socialIdx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label={social.platform}
                          >
                            <span className={styles.socialPlatform}>{social.platform}</span>
                            <Launch size={16} className={styles.socialIcon} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Column>

            {/* Right: recommended articles */}
            <Column xlg={4} lg={4} md={8} sm={4} className={styles.articlesCol}>
              <div className={styles.articlesList}>
                {articles.map((article, idx) => (
                  <div key={idx} className={styles.articleItem}>
                    <h6 className={styles.articlesHeading}>News</h6>
                    <div className={styles.articleTitle}>{article.title}</div>
                    <div className={styles.articleMeta}>{article.author}</div>
                  </div>
                ))}
              </div>
            </Column>
          </Grid>
        </section>
      </main>
    </Theme>
  )
}
