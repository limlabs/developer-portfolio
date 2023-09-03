import { FC } from 'react'

import { Project, Technology } from '../../../../payload-types'

export interface TechnologiesUsedProps {
  technologies: Project['technologiesUsed']
}

export const TechnologiesUsed: FC<TechnologiesUsedProps> = ({ technologies }) => {
  return (
    <div>
      <div className="flex justify-start w-full text-lg lg:text-xl">
        <h4>Technologies Used</h4>
      </div>
      <ul className="flex gap-5 text-xl flex-wrap mt-5 mb-4 lg:mb-6 w-full max-w-[532px]">
        {technologies.map(technology => (
          <li
            className="border border-foreground px-5 py-2 rounded-md "
            key={(technology as Technology).id}
          >
            {(technology as Technology).name}
          </li>
        ))}
      </ul>
    </div>
  )
}
