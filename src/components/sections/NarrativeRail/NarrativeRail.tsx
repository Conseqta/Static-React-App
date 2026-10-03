import { Link as CarbonLink, Grid, Column, UnorderedList, ListItem } from '@carbon/react'
import { ArrowRight, Launch } from '@carbon/icons-react'
import type { NarrativeRailData } from '@/types'
import styles from './NarrativeRail.module.css'

interface Props {
  data: NarrativeRailData
}

export function NarrativeRail({ data }: Props) {
  if (!data.heading && !data.introTop && !data.bullets?.length && !data.introBottom) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        {/* Left: main content (xlg=12) */}
        <Column xlg={12} lg={12} md={8} sm={4} className={styles.leftCol}>
          {data.heading && <h1 className={styles.heading}>{data.heading}</h1>}
          {data.introTop && <p className={styles.paragraph}>{data.introTop}</p>}

          {data.bullets && data.bullets.length > 0 && (
            <UnorderedList className={styles.list}>
              {data.bullets.map((b, i) => (
                <ListItem key={i} className={styles.listItem}>
                  {b}
                </ListItem>
              ))}
            </UnorderedList>
          )}

          {data.introBottom && <p className={styles.paragraph}>{data.introBottom}</p>}
        </Column>

        {/* Right rail (xlg=4) */}
        <Column xlg={4} lg={4} md={8} sm={4} className={styles.railCol}>
          <div className={styles.railInner}>
            {data.railTitle && <h4 className={styles.railTitle}>{data.railTitle}</h4>}
            <ul className={styles.railList}>
              {(data.railLinks ?? []).map((l, i) => {
                const Icon = l.isExternal ? Launch : ArrowRight
                return (
                  <li key={i} className={styles.railItem}>
                    <CarbonLink
                      href={l.url}
                      inline
                      className={styles.railLink}
                      target={l.isExternal ? '_blank' : undefined}
                      rel={l.isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {l.label}
                      <Icon size={18} className={styles.railIcon} />
                    </CarbonLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </Column>
      </Grid>
    </section>
  )
}
