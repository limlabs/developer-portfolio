import { FC } from 'react'

import { Project, Technology } from '@/payload-types'

export interface TechnologiesUsedProps {
  technologies: Project['technologiesUsed']
}

export const TechnologiesUsed: FC<TechnologiesUsedProps> = ({ technologies }) => {
  return (
    <div>
      <div className="flex w-full justify-start font-medium lg:text-xl">
        <h4>Technologies Used</h4>
      </div>
      <ul className="mb-4 mt-5 flex w-full max-w-[532px] flex-wrap gap-5 text-primary lg:mb-6 lg:text-xl">
        {technologies.map(technology => (
          <li
            className="rounded-md border border-primary px-5 py-1 dark:border-foreground lg:py-2"
            key={(technology as Technology).id}
          >
            {(technology as Technology).name}
          </li>
        ))}
      </ul>
    </div>
  )
}
