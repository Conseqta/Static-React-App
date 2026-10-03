import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenu,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react'
import { Search } from '@carbon/icons-react'
import { navigationMenu, siteTitle } from '@/data/navigation'
import type { MenuItem } from '@/types'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const isActive = (url: string) => {
    if (url === '/' && location.pathname === '/') return true
    if (url !== '/' && location.pathname.startsWith(url)) return true
    return false
  }

  const handleMobileNavClick = (url: string) => {
    setIsMobileMenuOpen(false)
    navigate(url)
  }

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded)
    if (!isSearchExpanded) setSearchQuery('')
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchExpanded(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      <CarbonHeader aria-label={siteTitle}>
        {/* Mobile brand toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <HeaderName prefix="">{siteTitle}</HeaderName>
        </div>

        {/* Desktop brand */}
        <HeaderName href="/" prefix="" className="desktop-only-header-name">
          {siteTitle}
        </HeaderName>

        {!isSearchExpanded ? (
          <HeaderNavigation aria-label="Primary navigation">
            {navigationMenu.map((item: MenuItem, idx: number) => {
              if (item.subItems && item.subItems.length > 0) {
                return (
                  <HeaderMenu aria-label={item.label} menuLinkName={item.label} key={idx}>
                    {item.subItems.map((sub, subIdx) => (
                      <HeaderMenuItem key={subIdx} href={sub.url}>
                        {sub.label}
                      </HeaderMenuItem>
                    ))}
                  </HeaderMenu>
                )
              }
              return (
                <HeaderMenuItem key={idx} href={item.url} isCurrentPage={isActive(item.url)}>
                  {item.label}
                </HeaderMenuItem>
              )
            })}
          </HeaderNavigation>
        ) : (
          <div
            style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 1rem' }}
          >
            <form onSubmit={handleSearchSubmit} style={{ flex: 1, display: 'flex' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search…"
                autoFocus
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderBottom: '2px solid #0f62fe',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            </form>
          </div>
        )}

        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={handleSearchToggle}>
            <Search size={20} />
          </HeaderGlobalAction>
          {!isSearchExpanded && (
            <HeaderGlobalAction
              aria-label="Consult Conseqta"
              onClick={() => navigate('/contact')}
              className="consult-conseqta-button"
            >
              Consult
            </HeaderGlobalAction>
          )}
        </HeaderGlobalBar>
      </CarbonHeader>

      {/* Mobile Side Nav */}
      <SideNav
        isRail={false}
        expanded={isMobileMenuOpen}
        onOverlayClick={() => setIsMobileMenuOpen(false)}
        aria-label="Mobile navigation"
        className="mobile-side-nav"
      >
        <SideNavItems>
          <SideNavLink
            href="/"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              handleMobileNavClick('/')
            }}
            isActive={location.pathname === '/'}
          >
            {siteTitle}
          </SideNavLink>

          {navigationMenu.map((item: MenuItem, idx: number) => {
            if (item.subItems && item.subItems.length > 0) {
              return (
                <SideNavMenu key={idx} title={item.label}>
                  {item.subItems.map((sub, subIdx) => (
                    <SideNavMenuItem
                      key={subIdx}
                      href={sub.url}
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        handleMobileNavClick(sub.url)
                      }}
                    >
                      {sub.label}
                    </SideNavMenuItem>
                  ))}
                </SideNavMenu>
              )
            }
            return (
              <SideNavLink
                key={idx}
                href={item.url}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  handleMobileNavClick(item.url)
                }}
                isActive={isActive(item.url)}
              >
                {item.label}
              </SideNavLink>
            )
          })}
        </SideNavItems>
      </SideNav>
    </>
  )
}
