import { Grid, Column } from '@carbon/react'
import styles from './ConsultingBand.module.css'

interface Props {
  heading?: string
  bodyTop?: string
  bodyBottom?: string
  videoUrl?: string
  videoCaption?: string
}

export function ConsultingBand({
  heading = 'The Conseqta Garage™',
  bodyTop = 'Our innovation lab where we prototype, validate, and accelerate emerging technology solutions for enterprise clients.',
  bodyBottom = 'From quantum computing to generative AI proof-of-concepts, the Garage gives clients first-mover advantage.',
  videoCaption,
}: Props) {
  if (!heading) return null

  return (
    <section className={styles.section} aria-labelledby="consulting-heading">
      <Grid fullWidth className={styles.grid}>
        {/* Left: heading + body */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.leftCol}>
          <h2 id="consulting-heading" className={styles.heading}>
            {heading}
          </h2>
          {bodyTop && <p className={styles.bodyTop}>{bodyTop}</p>}
          {bodyBottom && <p className={styles.bodyBottom}>{bodyBottom}</p>}
        </Column>

        {/* Right: image collage + play button */}
        <Column xlg={8} lg={8} md={8} sm={4} className={styles.rightCol}>
          <div className={styles.collage}>
            {/* Main tall tile */}
            <div className={styles.mainTile}>
              <div className={styles.tileBg} style={{ background: 'linear-gradient(135deg, #0f62fe 0%, #002d9c 100%)' }} />
            </div>

            {/* Right two stacked tiles */}
            <div className={styles.rightTiles}>
              <div className={styles.rightTopTile}>
                <div className={styles.tileBg} style={{ background: 'linear-gradient(135deg, #0043ce 0%, #0f62fe 100%)' }} />
              </div>
              <div className={styles.rightBottomTile}>
                <div className={styles.tileBg} style={{ background: 'linear-gradient(135deg, #393939 0%, #262626 100%)' }} />
              </div>
            </div>

            {/* Bottom row: image + swatches */}
            <div className={styles.bottomRow}>
              <div className={styles.bottomLeftTile}>
                <div className={styles.tileBg} style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #c8dcff 100%)' }} />
              </div>
              <div className={styles.swatches}>
                <div className={styles.swatch} style={{ backgroundColor: '#0f62fe' }} />
                <div className={styles.swatch} style={{ backgroundColor: '#08bdbd' }} />
              </div>
            </div>

            {/* Play button overlay */}
            <div className={styles.playOverlay} aria-hidden="true">
              <div className={styles.playCircle} />
              <div className={styles.playTriangle} />
            </div>
          </div>

          {videoCaption && <p className={styles.videoCaption}>{videoCaption}</p>}
        </Column>
      </Grid>
    </section>
  )
}
