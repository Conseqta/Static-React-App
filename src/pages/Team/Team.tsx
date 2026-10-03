import { usePageMeta } from '@/hooks/usePageMeta'
import { TeamGrid } from '@/components/sections/TeamGrid/TeamGrid'
import { teamMembers, teamHeading } from '@/data/team'

export default function Team() {
  usePageMeta({
    title: 'Our Team | Conseqta',
    description:
      "Meet Conseqta's leadership team — practitioners, engineers, and strategists with decades of enterprise technology experience.",
  })

  return (
    <TeamGrid members={teamMembers} heading={teamHeading} />
  )
}
