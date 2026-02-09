import {
  Rocket,
  CalendarCheck,
  Repeat,
} from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { GuideCard } from '@/components/features/GuideCard'
import { useAuth } from '@/hooks/useAuth'
import { getGreeting } from '@/utils/date'
import { GUIDE_ITEMS, GUIDE_SECTIONS } from '@/data/mock-guides'
import type { GuideSection } from '@/types'

const SECTION_ICONS: Record<GuideSection, typeof Rocket> = {
  onboarding: Rocket,
  'first-week': CalendarCheck,
  daily: Repeat,
}

export default function HomePage() {
  const { user } = useAuth()

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

      {/* bottom spacer */}
      <div className="h-4" />
    </PageContainer>
  )
}
