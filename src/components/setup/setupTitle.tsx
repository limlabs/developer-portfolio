"use client"

import { PropsWithChildren, useRef } from "react"

import { useFade } from "@/hooks/useFade"
import { cn } from "@/utilities"

export const SetupTitle = ({ children }: PropsWithChildren) => {
  const ref = useRef(null)
  const fade = useFade(ref, { translate: false, duration: "duration-700" })

  return (
    <h1
      ref={ref}
      className={cn("text-4xl font-medium", fade.onScreen ? fade.classes.fade : fade.classes.init)}
    >
      {children}
    </h1>
  )
}
