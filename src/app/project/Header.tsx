import Image from 'next/image'

import { SocialIcons } from '../_components/socialIcons'

export const Header = () => {
  return (
    <header className="p-4 mx-6 md:flex lg:flex lg:w-full  justify-between items-center bg-muted text-muted-foreground  mt-8 rounded-lg">
      <div className="flex justify-evenly lg:justify-start items-center gap-4 md:gap-0 w-full">
        <div>
          <Image
            src="/headshot.png"
            className="rounded-full  "
            alt="headshot of developer"
            width={90}
            height={90}
            priority
          />
        </div>
        <div>
          <h1 className="font-bold lg:text-xl">Samantha Smith</h1>
          <h4 className="text-base">UI/UX Designer</h4>
        </div>
      </div>
      <SocialIcons />
    </header>
  )
}
