import { Grid, Column } from '@carbon/react'
import { Email, LogoLinkedin } from '@carbon/icons-react'
import type { TeamMember } from '@/types'
import styles from './TeamGrid.module.css'

interface Props {
  members: TeamMember[]
  heading?: string
}

export function TeamGrid({ members, heading = 'Leadership' }: Props) {
  const sorted = [...members].sort((a, b) => a.order - b.order)
  const featuredLeaders = sorted.filter((m) => m.featured)
  const otherLeaders = sorted.filter((m) => !m.featured)

  return (
    <section className={styles.section} aria-labelledby="leadership-heading">
      <Grid fullWidth className={styles.grid}>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <h1 id="leadership-heading" className={styles.pageHeading}>
            {heading}
          </h1>
        </Column>

        {/* Featured leaders — full-width rows */}
        {featuredLeaders.map((leader) => (
          <Column key={leader.id} xlg={16} lg={16} md={8} sm={4} className={styles.featuredRow}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredPhotoCol}>
                <div className={styles.featuredPhotoWrapper}>
                  {leader.photoUrl ? (
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className={styles.featuredPhoto}
                    />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.photoInitials}>
                        {leader.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                  )}
                </div>
                {leader.hiResPhotoUrl && (
                  <a
                    href={leader.hiResPhotoUrl}
                    className={styles.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download high‑resolution photo
                  </a>
                )}
              </div>

              <div className={styles.featuredContentCol}>
                <h2 className={styles.leaderName}>{leader.name}</h2>
                <div className={styles.leaderTitle}>{leader.title}</div>

                <div className={styles.iconRow}>
                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className={styles.iconLink}
                      aria-label={`Email ${leader.name}`}
                    >
                      <Email size={32} />
                    </a>
                  )}
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      className={styles.iconLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <LogoLinkedin size={32} />
                    </a>
                  )}
                </div>

                {leader.bio && <p className={styles.bio}>{leader.bio}</p>}
              </div>
            </div>
          </Column>
        ))}

        {/* Gallery — smaller cards */}
        {otherLeaders.length > 0 && (
          <Column xlg={16} lg={16} md={8} sm={4} className={styles.galleryRow}>
            <div className={styles.galleryGrid}>
              {otherLeaders.map((leader) => (
                <article key={leader.id} className={styles.galleryCard}>
                  <div className={styles.galleryPhotoWrapper}>
                    {leader.photoUrl ? (
                      <img
                        src={leader.photoUrl}
                        alt={leader.name}
                        className={styles.galleryPhoto}
                      />
                    ) : (
                      <div className={styles.galleryPlaceholder}>
                        <span className={styles.galleryInitials}>
                          {leader.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={styles.galleryInfo}>
                    <div className={styles.galleryName}>{leader.name}</div>
                    <div className={styles.galleryTitle}>{leader.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </Column>
        )}
      </Grid>
    </section>
  )
}
