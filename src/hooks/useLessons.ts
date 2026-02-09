import { useCallback } from 'react'
import type { Lesson, LessonCategory } from '@/types'
import { LESSONS } from '@/data/mock-lessons'

export function useLessons() {
  const lessons = LESSONS

  const getLessonById = useCallback(
    (id: string): Lesson | undefined => lessons.find((l) => l.id === id),
    [lessons],
  )

  const getLessonsByCategory = useCallback(
    (category: LessonCategory) => lessons.filter((l) => l.category === category),
    [lessons],
  )

  const getFeaturedLessons = useCallback(
    () => lessons.filter((l) => l.featured),
    [lessons],
  )

  return {
    lessons,
    getLessonById,
    getLessonsByCategory,
    getFeaturedLessons,
  }
}
