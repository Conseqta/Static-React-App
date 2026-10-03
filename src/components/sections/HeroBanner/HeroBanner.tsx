import { Link } from 'react-router-dom'
import { Grid, Column, Button, Theme } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import type { HeroBannerData } from '@/types'
import { isExternalUrl } from '@/utils'
import styles from './HeroBanner.module.css'

interface HeroBannerProps {
  data: HeroBannerData
}

export function HeroBanner({ data }: HeroBannerProps) {
  const { title, content, image, buttons = [] } = data

  return (
    <Theme theme="g100">
      <div className={styles.heroBannerWrapper}>
        {/* Background */}
        {image?.url ? (
          <div className={styles.heroBackgroundImageContainer}>
            <img
              src={image.url}
              alt={image.alt}
              className={styles.heroBackgroundImage}
            />
            <div className={styles.heroOverlay} />
          </div>
        ) : (
          <div className={styles.heroBackgroundImageContainer}>
            <div className={styles.heroPlaceholderBackground} />
            <div className={styles.heroOverlay} />
          </div>
        )}

        {/* Title (top-left absolute) */}
        <div className={styles.heroContentPositioner}>
          <Grid fullWidth>
            <Column sm={4} md={8} lg={8} className={styles.heroContent}>
              <h1 className="cds--display-03">{title}</h1>
            </Column>
            <Column sm={4} md={8} lg={8} className={styles.heroTextContent}>
              <p className="cds--body-long-02">{content}</p>

              {buttons.length > 0 && (
                <div className={styles.cdsBtnSet}>
                  {buttons.map((btn, index) => {
                    const external = btn.isExternal ?? isExternalUrl(btn.url)
                    return (
                      <Link
                        key={index}
                        to={btn.url}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className={styles.cdsBtnLink}
                      >
                        <Button
                          as="span"
                          kind={btn.kind ?? (index === 0 ? 'primary' : 'secondary')}
                        >
                          <span>{btn.label}</span>
                          <span className={styles.buttonIcon}>
                            <ArrowRight size={16} />
                          </span>
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              )}
            </Column>
          </Grid>
        </div>
      </div>
    </Theme>
  )
}
