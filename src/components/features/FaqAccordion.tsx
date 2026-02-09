import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { FaqItem } from '@/types'

interface FaqAccordionProps {
  item: FaqItem
}

export function FaqAccordion({ item }: FaqAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <span className="text-[15px] font-medium text-gray-900">Q. {item.question}</span>
        {open ? (
          <ChevronUp size={20} className="shrink-0 text-gray-400" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-gray-400" />
        )}
      </button>
      <div
        className={cn(
          'grid transition-all duration-200',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-sm leading-relaxed text-gray-500">
            A. {item.answer}
          </div>
        </div>
      </div>
    </div>
  )
}
