import { Video } from 'lucide-react'
import type { ScheduleEvent } from '@/types'

const TYPE_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  coaching: { label: '個別コーチング', color: '#10b981', bgColor: '#ecfdf5' },
  group: { label: 'グループレッスン', color: '#3b82f6', bgColor: '#eff6ff' },
  workshop: { label: 'ワークショップ', color: '#f59e0b', bgColor: '#fffbeb' },
}

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

interface ScheduleCardProps {
  event: ScheduleEvent
}

export function ScheduleCard({ event }: ScheduleCardProps) {
  const config = TYPE_CONFIG[event.type]
  const date = new Date(event.date)
  const day = date.getDate()
  const weekday = WEEKDAYS[date.getDay()]

  return (
    <div className="flex gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {/* Left: date column */}
      <div className="flex w-12 shrink-0 flex-col items-center">
        <span className="text-2xl font-bold text-gray-900">{day}</span>
        <span className="text-xs text-gray-500">{weekday}</span>
      </div>

      {/* Right: details */}
      <div className="min-w-0 flex-1">
        <span
          className="inline-block rounded-full px-2 py-0.5 text-[11px] font-medium"
          style={{ backgroundColor: config.bgColor, color: config.color }}
        >
          {config.label}
        </span>
        <h3 className="mt-1 text-[15px] font-medium text-gray-900">{event.title}</h3>
        <p className="mt-0.5 text-xs text-gray-500">
          {event.startTime} - {event.endTime}
        </p>
        <p className="text-xs text-gray-400">{event.coachName}</p>

        {event.zoomUrl && (
          <a
            href={event.zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-2 inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Video size={14} />
            Zoom参加
          </a>
        )}
      </div>
    </div>
  )
}
