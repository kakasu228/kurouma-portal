import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageContainer } from '@/components/layout/PageContainer'
import { CategoryFilter } from '@/components/features/CategoryFilter'
import { LessonCard } from '@/components/features/LessonCard'
import { EmptyState } from '@/components/ui/EmptyState'
import { useLessons } from '@/hooks/useLessons'
import { CATEGORY_META } from '@/data/mock-lessons'
import type { LessonCategory } from '@/types'

const FILTER_OPTIONS = [
  { value: 'all', label: 'すべて' },
  ...Object.entries(CATEGORY_META).map(([value, meta]) => ({
    value,
    label: meta.label,
  })),
]

export default function LessonsPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') ?? 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const { lessons } = useLessons()

  const filtered =
    activeCategory === 'all'
      ? lessons
      : lessons.filter((l) => l.category === activeCategory)

  // Group by category when showing "all"
  const categories = activeCategory === 'all'
    ? ([...new Set(filtered.map((l) => l.category))] as LessonCategory[])
    : null

  return (
    <>
      <PageHeader title="教材" />
      <CategoryFilter
        options={FILTER_OPTIONS}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <PageContainer>
        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search size={32} />}
            title="教材が見つかりません"
            description="別のカテゴリを選んでみてください"
          />
        ) : categories ? (
          // Grouped view
          categories.map((cat) => {
            const catLessons = filtered.filter((l) => l.category === cat)
            const meta = CATEGORY_META[cat]
            return (
              <section key={cat} className="mb-5">
                <h2 className="mb-2 text-base font-semibold text-gray-900">
                  {meta.label}（{catLessons.length}件）
                </h2>
                <div className="space-y-3">
                  {catLessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </section>
            )
          })
        ) : (
          // Flat list
          <div className="space-y-3">
            {filtered.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  )
}
