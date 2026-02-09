import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'
import type { CompletionRecord, CompletionService, LevelUpInfo } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useAuth } from '@/hooks/useAuth'
import { GUIDE_ITEMS } from '@/data/mock-guides'
import { getLevel } from '@/data/levels'

export const CompletionContext = createContext<CompletionService | null>(null)

export function CompletionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [completions, setCompletions] = useLocalStorage<CompletionRecord[]>(
    `kurouma:completions:${user.id}`,
    [],
  )
  const [pendingLevelUp, setPendingLevelUp] = useState<LevelUpInfo | null>(null)

  const isCompleted = useCallback(
    (guideId: string) => completions.some((c) => c.guideId === guideId),
    [completions],
  )

  const toggleCompletion = useCallback(
    (guideId: string) => {
      setCompletions((prev) => {
        const exists = prev.find((c) => c.guideId === guideId)
        if (exists) {
          return prev.filter((c) => c.guideId !== guideId)
        }

        const newCompletions = [
          ...prev,
          { guideId, userId: user.id, completedAt: new Date().toISOString() },
        ]

        // ランクアップ検知
        const oldLevel = getLevel(prev.length)
        const newLevel = getLevel(newCompletions.length)
        if (newLevel.min > oldLevel.min) {
          setPendingLevelUp({ level: newLevel })
        }

        return newCompletions
      })
    },
    [user.id, setCompletions],
  )

  const clearLevelUp = useCallback(() => {
    setPendingLevelUp(null)
  }, [])

  const value = useMemo<CompletionService>(
    () => ({
      completions,
      isCompleted,
      toggleCompletion,
      completedCount: completions.length,
      totalCount: GUIDE_ITEMS.length,
      pendingLevelUp,
      clearLevelUp,
    }),
    [completions, isCompleted, toggleCompletion, pendingLevelUp, clearLevelUp],
  )

  return (
    <CompletionContext.Provider value={value}>
      {children}
    </CompletionContext.Provider>
  )
}
