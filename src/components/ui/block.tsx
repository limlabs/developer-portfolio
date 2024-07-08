"use client"

import { type HTMLAttributes, useRef } from "react"

import { cva, VariantProps } from "class-variance-authority"

import { useFade } from "@/hooks/useFade"
import { cn } from "@/utilities"

const blockVariants = cva("flex col-span-6 justify-center lg:justify-start", {
  variants: {
    size: {
      oneThird: "lg:col-span-2",
      half: "lg:col-span-3",
      twoThirds: "lg:col-span-4",
      full: "lg:col-span-6",
    },
  },
  defaultVariants: {
    size: "full",
  },
})

export interface BlockProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blockVariants> {
  size?: "oneThird" | "twoThirds" | "half" | "full" | null
  fadeIn?: boolean | null
}

const Block = ({ children, className, size, fadeIn = true, ...props }: BlockProps) => {
  const ref = useRef(null)
  const fade = fadeIn ? useFade(ref) : null

  return (
    <div
      className={cn([blockVariants({ size, className }), [...(fade?.classes.init ?? [])]])}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}

Block.displayName = "Block"

export { Block, blockVariants }
