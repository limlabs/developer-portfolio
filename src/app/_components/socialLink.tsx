import Link from 'next/link'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

export const SocialLink = ({ icon, href }: SocialLinkProps) => {
  return <Link href={href}>{icon}</Link>
}
