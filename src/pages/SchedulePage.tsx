import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageContainer } from '@/components/layout/PageContainer'
import { ScheduleCard } from '@/components/features/ScheduleCard'
import { MonthSeparator } from '@/components/features/MonthSeparator'
import { useSchedule } from '@/hooks/useSchedule'
import type { ScheduleEvent } from '@/types'

function groupByMonth(events: ScheduleEvent[]) {
  const groups: { month: number; events: ScheduleEvent[] }[] = []
  for (const event of events) {
    const month = new Date(event.date).getMonth() + 1
    const existing = groups.find((g) => g.month === month)
    if (existing) {
      existing.events.push(event)
    } else {
      groups.push({ month, events: [event] })
    }
  }
  return groups
}

export default function SchedulePage() {
  const { upcomingEvents, pastEvents } = useSchedule()
  const [showPast, setShowPast] = useState(false)

  const upcomingGroups = groupByMonth(upcomingEvents)

  return (
    <>
      <PageHeader title="予定" />
      <PageContainer>
        {/* Upcoming */}
        <section className="mb-6">
          <h2 className="mb-3 text-base font-semibold text-gray-900">今後の予定</h2>
          {upcomingGroups.length > 0 ? (
            upcomingGroups.map((group) => (
              <div key={group.month} className="mb-4">
                <MonthSeparator month={group.month} />
                <div className="space-y-3">
                  {group.events.map((event) => (
                    <ScheduleCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="py-8 text-center text-sm text-gray-400">
              予定されたセッションはありません
            </p>
          )}
        </section>

        {/* Past */}
        {pastEvents.length > 0 && (
          <section>
            <button
              onClick={() => setShowPast(!showPast)}
              className="flex w-full items-center justify-between rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <span className="text-sm font-medium text-gray-600">
                過去の予定を表示（{pastEvents.length}件）
              </span>
              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform duration-200 ${showPast ? 'rotate-180' : ''}`}
              />
            </button>
            {showPast && (
              <div className="mt-3 space-y-3 opacity-70">
                {pastEvents.map((event) => (
                  <ScheduleCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </section>
        )}
      </PageContainer>
    </>
  )
}
