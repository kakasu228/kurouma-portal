import { CheckCircle2 } from 'lucide-react'
import { useCompletions } from '@/hooks/useCompletions'

export function CompletionProgress() {
  const { completedCount, totalCount } = useCompletions()
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  if (completedCount === 0) return null

  return (
    <div className="mx-4 mt-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
        <CheckCircle2 size={20} className="text-emerald-600" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between">
          <p className="text-[14px] font-medium text-gray-900">
            進捗：{completedCount}/{totalCount} 完了
          </p>
          <span className="text-[12px] text-gray-400">{percentage}%</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
