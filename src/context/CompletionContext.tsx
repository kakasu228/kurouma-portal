import { createContext, useCallback, useMemo, type ReactNode } from 'react'
import type { CompletionRecord, CompletionService } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useAuth } from '@/hooks/useAuth'
import { GUIDE_ITEMS } from '@/data/mock-guides'

export const CompletionContext = createContext<CompletionService | null>(null)

export function CompletionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [completions, setCompletions] = useLocalStorage<CompletionRecord[]>(
    `kurouma:completions:${user.id}`,
    [],
  )

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
        return [
          ...prev,
          { guideId, userId: user.id, completedAt: new Date().toISOString() },
        ]
      })
    },
    [user.id, setCompletions],
  )

  const value = useMemo<CompletionService>(
    () => ({
      completions,
      isCompleted,
      toggleCompletion,
      completedCount: completions.length,
      totalCount: GUIDE_ITEMS.length,
    }),
    [completions, isCompleted, toggleCompletion],
  )

  return (
    <CompletionContext.Provider value={value}>
      {children}
    </CompletionContext.Provider>
  )
}
