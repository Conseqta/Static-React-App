import { Grid, Column, Link as CarbonLink } from '@carbon/react'
import { footerData } from '@/data/footer'
import styles from './Footer.module.css'

export function Footer() {
  const { brandName, groups, bottomLeftLinks, bottomRightLinks } = footerData

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Grid fullWidth className={styles.topRow}>
          {/* Brand column */}
          <Column xlg={4} lg={4} md={8} sm={4} className={styles.brandCol}>
            <div className={styles.brandWrap}>
              <span className={styles.brandText}>{brandName}</span>
            </div>
          </Column>

          {/* Link groups (max 3) */}
          {groups.slice(0, 3).map((group, i) => (
            <Column key={i} xlg={4} lg={4} md={8} sm={4} className={styles.groupCol}>
              <div className={styles.group}>
                <h4 className={styles.groupTitle}>{group.title}</h4>
                <ul className={styles.linkList}>
                  {group.links.map((link, j) => (
                    <li key={j} className={styles.linkItem}>
                      <CarbonLink href={link.url} className={styles.link} inline>
                        {link.label}
                      </CarbonLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Column>
          ))}
        </Grid>

        <hr className={styles.divider} />

        <Grid fullWidth className={styles.bottomRow}>
          {/* Empty — aligns with Brand column */}
          <Column xlg={4} lg={4} md={8} sm={4} className={styles.bottomCol}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} {brandName}
            </span>
          </Column>

          {/* Left links */}
          <Column xlg={4} lg={4} md={8} sm={4} className={styles.bottomCol}>
            <div className={styles.bottomLinks}>
              {bottomLeftLinks.map((l, i) => (
                <CarbonLink key={i} href={l.url} className={styles.bottomLink} inline>
                  {l.label}
                </CarbonLink>
              ))}
            </div>
          </Column>

          {/* Right links col 1 */}
          <Column xlg={4} lg={4} md={8} sm={4} className={styles.bottomCol}>
            <div className={styles.bottomLinks}>
              {bottomRightLinks.slice(0, 2).map((l, i) => (
                <CarbonLink key={i} href={l.url} className={styles.bottomLink} inline>
                  {l.label}
                </CarbonLink>
              ))}
            </div>
          </Column>

          {/* Right links col 2 */}
          <Column xlg={4} lg={4} md={8} sm={4} className={styles.bottomCol}>
            <div className={styles.bottomLinks}>
              {bottomRightLinks.slice(2).map((l, i) => (
                <CarbonLink key={i} href={l.url} className={styles.bottomLink} inline>
                  {l.label}
                </CarbonLink>
              ))}
            </div>
          </Column>
        </Grid>
      </div>
    </footer>
  )
}
