import { cn } from '@/utils/cn'
import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlighted' | 'outlined'
  children: ReactNode
}

const variants = {
  default: 'bg-white shadow-sm',
  highlighted: 'bg-brand-50 border border-brand-200 shadow-sm',
  outlined: 'bg-white border border-gray-200',
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div className={cn('rounded-xl p-4', variants[variant], className)} {...props}>
      {children}
    </div>
  )
}
