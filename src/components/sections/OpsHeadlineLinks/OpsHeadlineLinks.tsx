import { Link as CarbonLink, Grid, Column } from '@carbon/react'
import { ArrowRight, Launch, PlayFilledAlt } from '@carbon/icons-react'
import type { OpsHeadlineLinksData } from '@/types'
import styles from './OpsHeadlineLinks.module.css'

interface Props {
  data: OpsHeadlineLinksData
}

export function OpsHeadlineLinks({ data }: Props) {
  if (!data.heading && !data.description) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        {/* Left: multi-line blue headline — xlg=8 */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.leftCol}>
          <h1 className={styles.heading}>{data.heading}</h1>
        </Column>

        {/* Right: description + links — xlg=8 */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.rightCol}>
          {data.description && <p className={styles.description}>{data.description}</p>}

          <ul className={styles.linkList}>
            {data.links.map((l, i) => {
              const Icon = l.isExternal ? Launch : l.isVideo ? PlayFilledAlt : ArrowRight
              const suffix = l.isVideo && l.duration ? ` (${l.duration})` : ''
              return (
                <li key={i} className={styles.linkItem}>
                  <div className={styles.linkWrapper}>
                    <CarbonLink
                      href={l.url}
                      inline
                      className={styles.link}
                      target={l.isExternal ? '_blank' : undefined}
                      rel={l.isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {l.label}{suffix}
                    </CarbonLink>
                    <Icon size={20} className={styles.linkIcon} />
                  </div>
                </li>
              )
            })}
          </ul>
        </Column>
      </Grid>
    </section>
  )
}
