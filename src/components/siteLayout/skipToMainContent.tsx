import { FC } from "react"

import { Button } from "@/components/ui/button"

export const SkipToMainContentLink: FC = () => {
  return (
    <a
      href="#main-content"
      className={
        "text-primary-content absolute top-0 z-10 m-3 -translate-y-56 bg-primary p-3 focus:translate-y-0"
      }
    >
      <Button> Skip to Main Content</Button>
    </a>
  )
}
