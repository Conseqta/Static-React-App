import type { FooterData } from '@/types'

export const footerData: FooterData = {
  brandName: 'Conseqta',
  groups: [
    {
      title: 'Services',
      links: [
        { label: 'Cloud Engineering', url: '/capabilities#cloud' },
        { label: 'AI & Machine Learning', url: '/capabilities#ai' },
        { label: 'Legacy Modernization', url: '/capabilities#legacy' },
        { label: 'Data Services', url: '/capabilities#data' },
        { label: 'Cybersecurity', url: '/capabilities#security' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Difference', url: '/difference' },
        { label: 'Our Clients', url: '/clients' },
        { label: 'Our Team', url: '/team' },
        { label: 'Accelerators', url: '/accelerators' },
        { label: 'Careers', url: '/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blogs', url: '/blogs' },
        { label: 'Strategic Partners', url: '/partners' },
        { label: 'Case Studies', url: '/clients' },
        { label: 'Contact Us', url: '/contact' },
      ],
    },
  ],
  bottomLeftLinks: [
    { label: 'Contact Conseqta', url: '/contact' },
    { label: 'Privacy Policy', url: '/privacy' },
  ],
  bottomRightLinks: [
    { label: 'Terms of Use', url: '/terms' },
    { label: 'Accessibility', url: '/accessibility' },
    { label: 'Cookie Preferences', url: '/cookies' },
  ],
}
