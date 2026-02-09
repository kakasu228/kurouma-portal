import { cn } from '@/utils/cn'

interface BadgeProps {
  label: string
  variant?: 'info' | 'success' | 'warning' | 'neutral' | 'brand'
  className?: string
}

const variants = {
  info: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  neutral: 'bg-gray-100 text-gray-700',
  brand: 'bg-brand-100 text-brand-800',
}

export function Badge({ label, variant = 'neutral', className }: BadgeProps) {
  return (
    <span className={cn('inline-block rounded-full px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}>
      {label}
    </span>
  )
}
