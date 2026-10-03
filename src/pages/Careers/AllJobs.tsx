import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react'
import { jobs } from '@/data/careers'
import styles from './AllJobs.module.css'

const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30, 50]

export default function AllJobs() {
  usePageMeta({
    title: 'Open Positions | Conseqta',
    description: 'View all open positions at Conseqta in cloud, AI/ML, data, cybersecurity, and consulting.',
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(30)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = jobs.filter((job) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      job.title.toLowerCase().includes(q) ||
      job.category.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
    )
  })

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPageNumbers = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    return pages
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackgroundImageContainer}>
          <div className={styles.heroPlaceholderBackground} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContentPositioner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>Open Positions</h1>
            <p className={styles.heroBody}>
              Join a team of practitioners building enterprise technology that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 12.5L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
            aria-label="Search jobs"
          />
        </div>
      </div>

      {/* Jobs grid */}
      <div className={styles.jobsSection}>
        <div className={styles.jobsContainer}>
          <div className={styles.jobsGrid}>
            {paginated.length > 0 ? (
              paginated.map((job, idx) => (
                <Link key={idx} to={`/careers/jobs/${job.slug}`} className={styles.jobCard}>
                  <div className={styles.jobCategory}>{job.category}</div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <div className={styles.jobMetaLine}>{job.level}</div>
                    <div className={styles.jobMetaLine}>{job.location}</div>
                  </div>
                  <div className={styles.jobArrowWrap}>
                    <ArrowRight size={20} className={styles.jobArrow} />
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.noResults}>No jobs found matching your search.</div>
            )}
          </div>

          {/* Pagination */}
          {filtered.length > 0 && (
            <div className={styles.pagination}>
              <div className={styles.paginationLeft}>
                <label htmlFor="items-per-page" className={styles.paginationLabel}>
                  Items per page:
                </label>
                <select
                  id="items-per-page"
                  className={styles.itemsPerPageSelect}
                  value={itemsPerPage}
                  onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1) }}
                >
                  {ITEMS_PER_PAGE_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span className={styles.paginationInfo}>
                  {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filtered.length)} of {filtered.length} items
                </span>
              </div>
              <div className={styles.paginationControls}>
                <button className={styles.paginationButton} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous page">
                  <ChevronLeft size={20} />
                </button>
                {renderPageNumbers().map((page, idx) =>
                  page === '...' ? (
                    <span key={`e-${idx}`} className={styles.paginationEllipsis}>...</span>
                  ) : (
                    <button
                      key={page}
                      className={`${styles.paginationNumber} ${page === currentPage ? styles.paginationNumberActive : ''}`}
                      onClick={() => handlePageChange(page as number)}
                      aria-label={`Page ${page}`}
                      aria-current={page === currentPage ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  )
                )}
                <button className={styles.paginationButton} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next page">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
