import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  target?: string
}

export const SocialLink = ({ icon, href, target }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      className="text-primary transition-all hover:-translate-y-1 active:text-primary/50"
      target={target}
    >
      {icon}
    </Link>
  )
}
