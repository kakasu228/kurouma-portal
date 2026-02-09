import { useNavigate } from 'react-router-dom'
import {
  Play,
  FileText,
  ClipboardList,
  Table,
  ShoppingCart,
  MessageCircle,
  CalendarCheck,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import type { GuideItem, ExternalLinkType } from '@/types'

const LINK_ICON: Record<ExternalLinkType, typeof FileText> = {
  loom: Play,
  'google-docs': FileText,
  'google-forms': ClipboardList,
  'google-sheets': Table,
  amazon: ShoppingCart,
  line: MessageCircle,
  aitemasu: CalendarCheck,
  external: ExternalLink,
}

const LINK_COLOR: Record<ExternalLinkType, string> = {
  loom: 'bg-purple-50 text-purple-600',
  'google-docs': 'bg-blue-50 text-blue-600',
  'google-forms': 'bg-violet-50 text-violet-600',
  'google-sheets': 'bg-emerald-50 text-emerald-600',
  amazon: 'bg-amber-50 text-amber-700',
  line: 'bg-green-50 text-green-600',
  aitemasu: 'bg-sky-50 text-sky-600',
  external: 'bg-gray-50 text-gray-600',
}

interface GuideCardProps {
  item: GuideItem
}

export function GuideCard({ item }: GuideCardProps) {
  const navigate = useNavigate()
  const hasMedia = item.media && item.media.length > 0
  const hasLinks = item.links && item.links.length > 0

  return (
    <div className="rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {/* Title + description */}
      <h3 className="text-[15px] font-medium leading-snug text-gray-900">
        {item.title}
      </h3>
      <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
        {item.description}
      </p>

      {/* Media indicator */}
      {hasMedia && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.media!.map((m, i) => (
            <a
              key={i}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600 active:bg-purple-100 transition-colors"
            >
              <Play size={14} />
              {m.type === 'loom' ? 'Loom動画を見る' : '動画を見る'}
            </a>
          ))}
        </div>
      )}

      {/* External links */}
      {hasLinks && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.links!.map((link, i) => {
            const Icon = LINK_ICON[link.type]
            const colorClass = LINK_COLOR[link.type]
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium active:opacity-70 transition-colors ${colorClass}`}
              >
                <Icon size={14} />
                {link.label}
              </a>
            )
          })}
        </div>
      )}

      {/* Linked lesson */}
      {item.linkedLessonId && (
        <button
          onClick={() => navigate(`/lessons/${item.linkedLessonId}`)}
          className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-500 active:text-blue-700 transition-colors"
        >
          関連教材を見る
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  )
}
