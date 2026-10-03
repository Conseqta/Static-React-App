import { Link as CarbonLink, Grid, Column, Button } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { NextStepData } from '@/types'
import styles from './NextStep.module.css'

interface Props {
  data: NextStepData
}

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  )
}

export function NextStep({ data }: Props) {
  if (!data.heading && !data.subheading) return null

  const exploreChunks = chunk(data.exploreLinks ?? [], 3)

  return (
    <section className={styles.section}>
      <Grid fullWidth>
        <Column xlg={16} lg={16} md={8} sm={4}>
          {data.heading && <h2 className={styles.heading}>{data.heading}</h2>}
          {data.subheading && <p className={styles.subheading}>{data.subheading}</p>}
        </Column>

        {data.primaryCtas && data.primaryCtas.length > 0 && (
          <Column xlg={16} lg={16} md={8} sm={4}>
            <div className={styles.ctaRow}>
              {data.primaryCtas.map((cta, i) => (
                <Button
                  key={i}
                  kind={cta.kind ?? 'primary'}
                  href={cta.url}
                  target={cta.isExternal ? '_blank' : undefined}
                  rel={cta.isExternal ? 'noopener noreferrer' : undefined}
                  className={styles.ctaButton}
                  renderIcon={ArrowRight}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </Column>
        )}

        {data.exploreHeading && (
          <Column xlg={16} lg={16} md={8} sm={4} className={styles.exploreHeadingCol}>
            <h4 className={styles.exploreHeading}>{data.exploreHeading}</h4>
          </Column>
        )}

        {exploreChunks.map((row, rIdx) => (
          row.map((link, idx) => (
            <Column key={`${rIdx}-${idx}`} xlg={5} lg={5} md={4} sm={4} className={styles.linkCol}>
              <div className={styles.linkRow}>
                <CarbonLink
                  href={link.url}
                  inline
                  className={styles.textLink}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </CarbonLink>
                <ArrowRight className={styles.arrowIcon} size={18} />
              </div>
            </Column>
          ))
        ))}
      </Grid>
    </section>
  )
}
