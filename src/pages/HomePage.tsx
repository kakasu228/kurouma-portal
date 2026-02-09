import { useNavigate } from 'react-router-dom'
import {
  ChevronRight,
  Rocket,
  CalendarCheck,
  Repeat,
} from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { CategoryChip } from '@/components/features/CategoryChip'
import { GuideCard } from '@/components/features/GuideCard'
import { ScheduleCard } from '@/components/features/ScheduleCard'
import { useAuth } from '@/hooks/useAuth'
import { useSchedule } from '@/hooks/useSchedule'
import { getGreeting } from '@/utils/date'
import { GUIDE_ITEMS, GUIDE_SECTIONS } from '@/data/mock-guides'
import type { LessonCategory, GuideSection } from '@/types'

const SECTION_ICONS: Record<GuideSection, typeof Rocket> = {
  onboarding: Rocket,
  'first-week': CalendarCheck,
  daily: Repeat,
}

const CATEGORIES: LessonCategory[] = [
  'mindset',
  'communication',
  'fashion',
  'dating',
  'self-improvement',
]

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { upcomingEvents } = useSchedule()

  const nextSchedule = upcomingEvents[0]

  return (
    <PageContainer className="pt-0">
      {/* Greeting */}
      <div className="bg-white px-4 py-6">
        <h1 className="text-[20px] font-bold text-gray-900">
          {getGreeting()}、{user.name}さん
        </h1>
        <p className="mt-1 text-sm text-gray-500">今日も一歩ずつ進みましょう</p>
      </div>

      {/* Guide Sections */}
      {GUIDE_SECTIONS.map((section) => {
        const items = GUIDE_ITEMS.filter((g) => g.section === section.key)
          .sort((a, b) => a.sortOrder - b.sortOrder)
        const Icon = SECTION_ICONS[section.key]

        return (
          <section key={section.key} className="px-4 pt-6">
            <div className="flex items-center gap-2 mb-1">
              <Icon size={18} className="text-blue-500" />
              <h2 className="text-base font-semibold text-gray-900">
                {section.label}
              </h2>
            </div>
            <p className="mb-3 text-xs text-gray-400">{section.description}</p>
            <div className="space-y-3">
              {items.map((item) => (
                <GuideCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )
      })}

      {/* Category Chips */}
      <section className="px-4 pt-6">
        <h2 className="mb-3 text-base font-semibold text-gray-900">
          カテゴリから教材を探す
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {CATEGORIES.map((cat) => (
            <CategoryChip key={cat} category={cat} />
          ))}
        </div>
        <button
          onClick={() => navigate('/lessons')}
          className="mt-2 flex w-full items-center justify-end gap-1 text-sm font-medium text-blue-500"
        >
          すべての教材を見る
          <ChevronRight size={16} />
        </button>
      </section>

      {/* Next Schedule */}
      {nextSchedule && (
        <section className="px-4 pt-6 pb-4">
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            次の予定
          </h2>
          <ScheduleCard event={nextSchedule} />
          <button
            onClick={() => navigate('/schedule')}
            className="mt-3 flex w-full items-center justify-end gap-1 text-sm font-medium text-blue-500"
          >
            すべての予定を見る
            <ChevronRight size={16} />
          </button>
        </section>
      )}
    </PageContainer>
  )
}
