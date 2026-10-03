import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Grid, Column, Theme } from '@carbon/react'
import { ArrowRight } from '@carbon/icons-react'
import { HeroBanner } from '@/components/sections/HeroBanner/HeroBanner'
import { TelecomTrends } from '@/components/sections/TelecomTrends/TelecomTrends'
import { clients, clientTelecomTrends } from '@/data/clients'
import styles from './ClientDetail.module.css'

export default function ClientDetail() {
  const { slug } = useParams<{ slug: string }>()
  const client = clients.find((c) => c.slug === slug)

  usePageMeta({
    title: client ? `${client.clientName} — Case Study | Conseqta` : 'Client Not Found | Conseqta',
    description: client?.excerpt,
  })

  if (!client) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Client Not Found</h1>
        <Link to="/clients" style={{ color: '#0f62fe' }}>← Back to Clients</Link>
      </div>
    )
  }

  const heroData = {
    title: client.clientName,
    content: client.excerpt,
  }

  // Map results → benefits, services → capabilities
  const benefits = client.results.map((result) => ({
    title: result,
    description: 'Delivered through our practitioner-led engagement model.',
  }))

  const capabilities = client.services.map((service) => ({
    title: service,
    description: `Deep expertise in ${service.toLowerCase()} delivered by certified practitioners with enterprise-scale experience.`,
    links: [{ linkText: 'Learn more about this capability', linkUrl: '/capabilities' }],
  }))

  return (
    <Theme theme="white">
      <article className={styles.page}>
        <HeroBanner data={heroData} />

        {/* CLIENT OVERVIEW SECTION */}
        <section className={styles.overviewSection}>
          <Grid fullWidth>
            <Column xlg={12} lg={12} md={5} sm={4} className={styles.overviewTextCol}>
              <h2 className={styles.overviewHeading}>
                {client.clientName}: {client.industry} Transformation
              </h2>
              {client.content.split('\n\n').map((para, idx) => (
                <p key={idx} className={styles.overviewDescription}>{para}</p>
              ))}
            </Column>
            <Column xlg={4} lg={4} md={3} sm={4} className={styles.overviewRightCol}>
              <div className={styles.clientLogoBox}>
                <div className={styles.clientLogoPlaceholder}>
                  <span className={styles.clientLogoInitials}>
                    {client.clientName.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className={styles.metricsBox}>
                <p className={styles.metricsText}>Key Results</p>
                {client.results.slice(0, 2).map((r, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', color: '#161616', lineHeight: 1.6 }}>{r}</p>
                ))}
              </div>
            </Column>
          </Grid>
        </section>

        {/* BENEFITS SECTION */}
        {benefits.length > 0 && (
          <section className={styles.benefitsSection}>
            <Grid fullWidth>
              <Column xlg={16} lg={16} md={8} sm={4}>
                <h2 className={styles.sectionHeading}>Measurable Results</h2>
              </Column>
              {benefits.map((benefit, idx) => (
                <Column key={idx} xlg={5} lg={5} md={4} sm={4} className={styles.benefitCol}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <span style={{ fontSize: '2rem', color: '#0f62fe' }}>✓</span>
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </Column>
              ))}
            </Grid>
          </section>
        )}

        {/* CAPABILITIES SECTION */}
        {capabilities.length > 0 && (
          <section className={styles.capabilitiesSection}>
            <Grid fullWidth>
              <Column xlg={16} lg={16} md={8} sm={4}>
                <h2 className={styles.sectionHeading}>Services Delivered</h2>
              </Column>
              {capabilities.map((capability, idx) => (
                <Column key={idx} xlg={5} lg={5} md={4} sm={4} className={styles.capabilityCol}>
                  <div className={styles.capabilityCard}>
                    <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                    <p className={styles.capabilityDescription}>{capability.description}</p>
                    <div className={styles.capabilityLinks}>
                      {capability.links.map((link, linkIdx) => (
                        <Link key={linkIdx} to={link.linkUrl} className={styles.capabilityLink}>
                          <span>{link.linkText}</span>
                          <ArrowRight size={20} className={styles.linkIcon} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Column>
              ))}
            </Grid>
          </section>
        )}
      </article>

      {/* TelecomTrends appears at bottom of each client detail page */}
      <TelecomTrends
        items={clientTelecomTrends}
        heading="Trends in telecommunication services"
        variant="clients"
      />
    </Theme>
  )
}
