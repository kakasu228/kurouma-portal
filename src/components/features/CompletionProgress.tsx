import { Flame, Zap, Trophy, Crown, Star } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useCompletions } from '@/hooks/useCompletions'

/** レベル定義: 完了数に応じてランクアップ */
const LEVELS = [
  { min: 0, label: 'スタート', icon: Star, color: 'text-gray-400', bg: 'bg-gray-100', bar: 'bg-gray-300', ring: 'ring-gray-200' },
  { min: 1, label: 'ビギナー', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-100', bar: 'bg-orange-400', ring: 'ring-orange-200' },
  { min: 3, label: 'ファイター', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-100', bar: 'bg-blue-500', ring: 'ring-blue-200' },
  { min: 6, label: 'エース', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-100', bar: 'bg-purple-500', ring: 'ring-purple-200' },
  { min: 8, label: 'マスター', icon: Crown, color: 'text-amber-500', bg: 'bg-amber-100', bar: 'bg-gradient-to-r from-amber-400 to-amber-500', ring: 'ring-amber-200' },
  { min: 10, label: 'レジェンド', icon: Crown, color: 'text-emerald-500', bg: 'bg-emerald-100', bar: 'bg-gradient-to-r from-emerald-400 to-emerald-500', ring: 'ring-emerald-300' },
]

function getLevel(count: number) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (count >= l.min) level = l
  }
  return level
}

function getNextLevel(count: number) {
  for (const l of LEVELS) {
    if (count < l.min) return l
  }
  return null
}

export function CompletionProgress() {
  const { completedCount, totalCount } = useCompletions()
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const level = getLevel(completedCount)
  const nextLevel = getNextLevel(completedCount)
  const Icon = level.icon
  const isMax = !nextLevel

  // 次のレベルまでの進捗
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
      {/* Level badge + stats */}
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

      {/* XP bar */}
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
