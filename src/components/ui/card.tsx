import { cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '~/utils'

const cardVariants = cva(
  'rounded-xl border border-neutral-200 bg-card text-card-foreground bg-white',
  {
    variants: {
      variant: {
        default: 'bg-white',
        outline: 'border-neutral-200 bg-white',
        neutral: 'bg-neutral-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'outline' | 'neutral'
  }
>(({ className, variant, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn(cardVariants({ variant }), className)}
    {...properties}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...properties}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...properties }, reference) => (
  <h3
    ref={reference}
    className={cn(
      className,
      'text-2xl leading-none font-semibold tracking-tight'
    )}
    {...properties}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...properties }, reference) => (
  <p
    ref={reference}
    className={cn('text-muted-foreground text-sm', className)}
    {...properties}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, reference) => (
  <div ref={reference} className={cn('px-4 py-5', className)} {...properties} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex items-center p-6 pt-0', className)}
    {...properties}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
