import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className="bg-background text-foreground w-full flex justify-evenly lg:justify-between items-center py-4 px-8 cursor-pointer">
      <div className="hidden lg:flex">
        <Image
          src="/headshot.png"
          className="rounded-full  "
          alt="headshot of developer"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="flex lg:gap-8 w-full lg:w-auto justify-evenly text-base">
        <Link href="*">Linkedin</Link>
        <Link href="*">Dribble</Link>
        <Link href="*">Instagram</Link>
      </div>
    </div>
  )
}
