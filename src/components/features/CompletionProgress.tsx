import { cn } from '@/utils/cn'
import { useCompletions } from '@/hooks/useCompletions'
import { getLevel, getNextLevel } from '@/data/levels'

export function CompletionProgress() {
  const { completedCount, totalCount } = useCompletions()
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const level = getLevel(completedCount)
  const nextLevel = getNextLevel(completedCount)
  const Icon = level.icon
  const isMax = !nextLevel

  const currentLevelMin = level.min
  const nextLevelMin = nextLevel ? nextLevel.min : totalCount
  const levelProgress = nextLevelMin > currentLevelMin
    ? Math.round(((completedCount - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100)
    : 100

  return (
    <div className={cn(
      'mx-4 mt-4 rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-500',
      isMax && 'ring-2 ring-emerald-300/60',
    )}>
      <div className="flex items-center gap-3">
        <div className={cn(
          'flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-500',
          level.bg,
        )}>
          <Icon size={24} className={cn(level.color, 'transition-colors duration-500')} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={cn('text-[16px] font-bold transition-colors duration-500', level.color)}>
              {level.label}
            </span>
            {isMax && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                MAX
              </span>
            )}
          </div>
          <p className="text-[12px] text-gray-500">
            {completedCount}/{totalCount} タスク完了
          </p>
        </div>
        <div className="text-right">
          <p className={cn('text-[24px] font-black leading-none transition-colors duration-500', level.color)}>
            {percentage}
            <span className="text-[12px] font-medium text-gray-400">%</span>
          </p>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-gray-400">
            {isMax ? 'ALL CLEAR!' : `次: ${nextLevel!.label}`}
          </span>
          {!isMax && (
            <span className="text-[11px] text-gray-400">
              あと{nextLevel!.min - completedCount}タスク
            </span>
          )}
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-gray-100">
          <div
            className={cn(
              'h-full rounded-full transition-all duration-700 ease-out',
              level.bar,
            )}
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
