import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Button, Theme } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageMeta({ title: '404 — Page Not Found | Conseqta' })

  return (
    <Theme theme="g10">
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.errorCode} aria-hidden="true">404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.body}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.ctaLink}>
              <Button kind="primary" size="lg" renderIcon={ArrowRight}>Back to Home</Button>
            </Link>
            <Link to="/contact" className={styles.secondaryLink}>Contact Our Team</Link>
          </div>
        </div>
      </div>
    </Theme>
  )
}
