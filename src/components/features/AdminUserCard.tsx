import { useState } from 'react'
import { CheckCircle2, Circle, ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { User, CompletionRecord } from '@/types'
import { GUIDE_ITEMS, GUIDE_SECTIONS } from '@/data/mock-guides'

interface AdminUserCardProps {
  user: User
  completions: CompletionRecord[]
}

function formatDateShort(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}

export function AdminUserCard({ user, completions }: AdminUserCardProps) {
  const [expanded, setExpanded] = useState(false)
  const completedCount = completions.length
  const totalCount = GUIDE_ITEMS.length
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[14px] font-bold text-gray-600">
          {user.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-medium text-gray-900 truncate">{user.name}</p>
          <p className="text-[11px] text-gray-400">入会: {formatDateShort(user.enrolledAt)}</p>
        </div>
        <span
          className={cn(
            'text-[13px] font-bold',
            percentage === 100
              ? 'text-emerald-600'
              : percentage > 0
                ? 'text-blue-600'
                : 'text-gray-400',
          )}
        >
          {completedCount}/{totalCount}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500',
            percentage === 100 ? 'bg-emerald-500' : 'bg-blue-500',
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 flex w-full items-center justify-center gap-1 py-1 text-[12px] text-gray-400 active:text-gray-600"
      >
        {expanded ? '閉じる' : '詳細を見る'}
        <ChevronDown
          size={14}
          className={cn('transition-transform', expanded && 'rotate-180')}
        />
      </button>

      {/* Expanded: section checklist */}
      {expanded && (
        <div className="mt-2 space-y-3 border-t border-gray-100 pt-3">
          {GUIDE_SECTIONS.map((section) => {
            const sectionItems = GUIDE_ITEMS.filter(
              (g) => g.section === section.key,
            ).sort((a, b) => a.sortOrder - b.sortOrder)

            return (
              <div key={section.key}>
                <p className="mb-1 text-[12px] font-medium text-gray-500">
                  {section.label}
                </p>
                <div className="space-y-1">
                  {sectionItems.map((item) => {
                    const done = completions.some((c) => c.guideId === item.id)
                    const record = completions.find((c) => c.guideId === item.id)
                    return (
                      <div key={item.id} className="flex items-center gap-2 py-0.5">
                        {done ? (
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-emerald-500"
                          />
                        ) : (
                          <Circle size={14} className="shrink-0 text-gray-300" />
                        )}
                        <span
                          className={cn(
                            'flex-1 text-[12px]',
                            done
                              ? 'text-gray-400 line-through'
                              : 'text-gray-700',
                          )}
                        >
                          {item.title}
                        </span>
                        {done && record && (
                          <span className="text-[10px] text-gray-300">
                            {formatDateShort(record.completedAt)}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
