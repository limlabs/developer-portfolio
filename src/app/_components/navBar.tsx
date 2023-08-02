import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className="bg-black text-white h-auto w-full flex justify-evenly items-center py-4 px-8 cursor-pointer mb-12">
      <Link href="*">Linkedin</Link>
      <Link href="*">Dribble</Link>
      <Link href="*">Instagram</Link>
    </div>
  )
}
