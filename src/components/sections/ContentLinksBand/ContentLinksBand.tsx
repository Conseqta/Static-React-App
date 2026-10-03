import { Link as CarbonLink, Tag, Grid, Column } from '@carbon/react'
import { ArrowRight, Launch } from '@carbon/icons-react'
import type { ContentLinksBandData } from '@/types'
import styles from './ContentLinksBand.module.css'

interface Props {
  data: ContentLinksBandData
}

export function ContentLinksBand({ data }: Props) {
  if (!data.heading && !data.links.length) return null

  return (
    <section className={styles.section}>
      <Grid fullWidth className={styles.grid}>
        {/* Left: heading + intro — xlg=12 */}
        <Column xlg={12} lg={12} md={8} sm={4} className={styles.leftCol}>
          <h1 className={styles.heading}>{data.heading}</h1>
          {data.introTop && <p className={styles.introTop}>{data.introTop}</p>}
          {data.introBottom && <p className={styles.introBottom}>{data.introBottom}</p>}
        </Column>

        {/* Right: vertical link list — xlg=4 */}
        <Column xlg={4} lg={4} md={8} sm={4} className={styles.rightCol}>
          <ul className={styles.linkList}>
            {data.links.map((item, i) => {
              const Icon = item.isExternal ? Launch : ArrowRight
              return (
                <li key={i} className={styles.linkItem}>
                  <div className={styles.linkMeta}>
                    {item.newCapability && (
                      <Tag type="green" size="md" className={styles.newTag}>
                        New
                      </Tag>
                    )}
                  </div>
                  <div className={styles.linkRow}>
                    <CarbonLink
                      href={item.url}
                      inline
                      className={styles.link}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {item.title}
                    </CarbonLink>
                    <Icon className={styles.linkIcon} size={20} />
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
