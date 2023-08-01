import Image from 'next/image'
import Link from 'next/link'

interface SocialLinkProps {
  src: string
  altText: string
  width: number
  height: number
  href: string
}

export const SocialLink = ({ src, altText, width, height, href }: SocialLinkProps) => {
  return (
    <Link href={href}>
      <Image src={src} alt={altText} width={width} height={height} />
    </Link>
  )
}
