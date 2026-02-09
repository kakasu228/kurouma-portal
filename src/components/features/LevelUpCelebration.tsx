import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import { useCompletions } from '@/hooks/useCompletions'

export function LevelUpCelebration() {
  const { pendingLevelUp, clearLevelUp } = useCompletions()
  const [animating, setAnimating] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pendingLevelUp) {
      setVisible(true)
      // 少し遅延してからアニメーション開始（マウント後にtransitionが効くように）
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
    }
  }, [pendingLevelUp])

  function handleClose() {
    setAnimating(false)
    setTimeout(() => {
      setVisible(false)
      clearLevelUp()
    }, 300)
  }

  if (!visible || !pendingLevelUp) return null

  const { level } = pendingLevelUp
  const Icon = level.icon

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300',
        animating ? 'bg-black/60' : 'bg-black/0',
      )}
      onClick={handleClose}
    >
      {/* Particles */}
      <div className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500',
        animating ? 'opacity-100' : 'opacity-0',
      )}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-[confetti_1.5s_ease-out_forwards]"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: '50%',
              animationDelay: `${Math.random() * 0.5}s`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ['--tx' as any]: `${(Math.random() - 0.5) * 200}px`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ['--ty' as any]: `${-150 - Math.random() * 300}px`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ['--rot' as any]: `${Math.random() * 720}deg`,
            }}
          >
            <div
              className="h-2.5 w-2.5 rounded-sm"
              style={{
                backgroundColor: [
                  '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981',
                  '#ef4444', '#ec4899', '#f97316', '#06b6d4',
                ][i % 8],
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal card */}
      <div
        className={cn(
          'relative mx-6 w-full max-w-[320px] rounded-3xl bg-white p-8 text-center shadow-2xl transition-all duration-500',
          animating
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-50 opacity-0 translate-y-8',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon badge with pulse animation */}
        <div className="flex justify-center">
          <div className={cn(
            'flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500',
            level.bg,
            animating && 'animate-[badge-pop_0.6s_ease-out]',
          )}>
            <Icon
              size={40}
              className={cn(level.color, 'transition-colors duration-500')}
            />
          </div>
        </div>

        {/* Rank up text */}
        <p className="mt-4 text-[13px] font-medium text-gray-400 tracking-widest uppercase">
          Rank Up!
        </p>
        <h2 className={cn(
          'mt-1 text-[28px] font-black transition-colors duration-500',
          level.color,
        )}>
          {level.label}
        </h2>

        {/* Message */}
        <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
          {level.message}
        </p>

        {/* Close button */}
        <button
          onClick={handleClose}
          className={cn(
            'mt-6 w-full rounded-xl py-3.5 text-[15px] font-bold text-white transition-all duration-300',
            level.min >= 10 ? 'bg-emerald-500 active:bg-emerald-600'
              : level.min >= 8 ? 'bg-amber-500 active:bg-amber-600'
              : level.min >= 6 ? 'bg-purple-500 active:bg-purple-600'
              : level.min >= 3 ? 'bg-blue-500 active:bg-blue-600'
              : 'bg-orange-500 active:bg-orange-600',
          )}
        >
          OK!
        </button>
      </div>
    </div>
  )
}
