"use client";

import { useRef, forwardRef, type HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utilities'
import { useFade } from '@/hooks/useFade'

const blockVariants = cva('flex col-span-6 justify-center lg:justify-start', {
  variants: {
    size: {
      oneThird: 'lg:col-span-2',
      half: 'lg:col-span-3',
      twoThirds: 'lg:col-span-4',
      full: 'lg:col-span-6',
    },
  },
  defaultVariants: {
    size: 'full',
  },
})

export interface BlockProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blockVariants> {
  size?: 'oneThird' | 'twoThirds' | 'half' | 'full'
  fadeIn?: boolean
}

const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({ children, className, size, fadeIn = true, ...props }) => {
    const ref = useRef(null);
    const fade = fadeIn ? useFade(ref) : null;

    return (
      <div className={cn(blockVariants({ size, className }))} ref={ref}>
        {children}
      </div>
    );
});

Block.displayName = 'Block';

export { Block, blockVariants }
