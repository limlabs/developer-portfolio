"use client"

import { PropsWithChildren, useRef } from "react"

import { useFade } from "@/hooks/useFade"
import { cn } from "@/utilities"

export const SetupMessage = ({ children }: PropsWithChildren) => {
  const ref = useRef(null)
  const fade = useFade(ref, { translate: false, duration: "duration-700" })

  return (
    <p
      ref={ref}
      className={cn("text-lg delay-200", fade.onScreen ? fade.classes.fade : fade.classes.init)}
    >
      {children}
    </p>
  )
}
