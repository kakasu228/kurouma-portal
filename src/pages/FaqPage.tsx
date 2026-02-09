import { useState } from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageContainer } from '@/components/layout/PageContainer'
import { CategoryFilter } from '@/components/features/CategoryFilter'
import { FaqAccordion } from '@/components/features/FaqAccordion'
import { ContactCard } from '@/components/features/ContactCard'
import { FAQ_ITEMS, CONTACT_INFO, FAQ_CATEGORY_LABELS } from '@/data/mock-faq'

const FILTER_OPTIONS = [
  { value: 'all', label: 'すべて' },
  ...Object.entries(FAQ_CATEGORY_LABELS).map(([value, label]) => ({ value, label })),
]

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHeader title="よくある質問" />
      <CategoryFilter
        options={FILTER_OPTIONS}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <PageContainer>
        <div className="space-y-3 mb-8">
          {filtered.map((item) => (
            <FaqAccordion key={item.id} item={item} />
          ))}
        </div>

        {/* Contact section */}
        <section>
          <h2 className="mb-3 text-base font-semibold text-gray-900">お問い合わせ</h2>
          <div className="space-y-3">
            <ContactCard
              icon={<MessageCircle size={20} />}
              label="LINEで問い合わせ"
              sub={CONTACT_INFO.lineId}
              href={CONTACT_INFO.lineUrl}
            />
            <ContactCard
              icon={<Mail size={20} />}
              label="メールで問い合わせ"
              sub={CONTACT_INFO.email}
              href={`mailto:${CONTACT_INFO.email}`}
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-400">
            通常{CONTACT_INFO.responseTime}にご返信します
          </p>
        </section>
      </PageContainer>
    </>
  )
}
