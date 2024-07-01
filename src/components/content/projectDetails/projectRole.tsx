import { FC } from 'react'

import { Project } from '@/payload-types'

interface ProjectRolesProps {
  roles: Project['role']
}
export const ProjectRoles: FC<ProjectRolesProps> = ({ roles }) => {
  return (
    <h4 className="pt-3 font-medium leading-tight text-primary lg:text-2xl">
      {roles
        .map(
          role =>
            ({
              uiUxDesigner: 'Lead UI/UX Designer',
              frontEndDeveloper: 'Front-End Developer',
              backEndDeveloper: 'Back-End Developer',
            })[role] ?? '',
        )
        .join(', ')}
    </h4>
  )
}
