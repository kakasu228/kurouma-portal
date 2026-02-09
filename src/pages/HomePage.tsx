import {
  Rocket,
  CalendarCheck,
  Repeat,
} from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { GuideCard } from '@/components/features/GuideCard'
import { MessageTemplates } from '@/components/features/MessageTemplates'
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
        <p className="mt-1 text-sm text-gray-500">改めまして、よろしくお願いいたします！</p>
      </div>

      {/* Intro guide */}
      <div className="mx-4 mt-4 rounded-xl bg-blue-50 p-4">
        <h2 className="text-[15px] font-semibold text-blue-900">
          これから取り組んでいただくこと
        </h2>
        <ul className="mt-2 space-y-2 text-[13px] leading-relaxed text-blue-800">
          <li className="flex gap-2">
            <span className="shrink-0">🚀</span>
            <span><strong>入会後すぐの方へ</strong>：まずはこちらを確認して、オープンチャットへの参加と1on1予約を済ませてください。</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">📋</span>
            <span><strong>入会後1週間課題</strong>：1週間以内に提出してください。</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0">✏️</span>
            <span><strong>本日からの毎日課題</strong>：毎日取り組んでください！（毎日5分ほどで終わります）</span>
          </li>
        </ul>
        <p className="mt-3 text-[12px] text-blue-600">順に進めていってください！わからないことがあれば都度聞いてください！</p>
      </div>

      {/* Guide Sections */}
      {GUIDE_SECTIONS.map((section) => {
        const items = GUIDE_ITEMS.filter((g) => g.section === section.key)
          .sort((a, b) => a.sortOrder - b.sortOrder)
        const Icon = SECTION_ICONS[section.key]

        return (
          <div key={section.key}>
            <section className="px-4 pt-6">
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

            {/* Message templates — after first-week section */}
            {section.key === 'first-week' && <MessageTemplates />}
          </div>
        )
      })}

      {/* bottom spacer */}
      <div className="h-4" />
    </PageContainer>
  )
}
