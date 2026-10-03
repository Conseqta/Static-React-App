import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactForm } from '@/components/sections/ContactForm/ContactForm'

export default function Contact() {
  usePageMeta({
    title: 'Contact Us | Conseqta',
    description:
      'Get in touch with Conseqta. Talk to our team about cloud, AI/ML, legacy modernization, data services, and cybersecurity engagements.',
  })

  return <ContactForm />
}
