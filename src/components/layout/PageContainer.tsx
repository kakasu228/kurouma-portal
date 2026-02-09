import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <main className={cn('px-4 pb-24 pt-4', className)}>{children}</main>
}
