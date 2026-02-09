import { useNavigate } from 'react-router-dom'
import { Brain, MessageCircle, Shirt, Heart, Sparkles } from 'lucide-react'
import type { Lesson, LessonCategory } from '@/types'
import { CATEGORY_META } from '@/data/mock-lessons'

const ICONS: Record<LessonCategory, typeof Brain> = {
  mindset: Brain,
  communication: MessageCircle,
  fashion: Shirt,
  dating: Heart,
  'self-improvement': Sparkles,
}

interface LessonCardProps {
  lesson: Lesson
}

export function LessonCard({ lesson }: LessonCardProps) {
  const navigate = useNavigate()
  const meta = CATEGORY_META[lesson.category]
  const Icon = ICONS[lesson.category]
  const hasMedia = lesson.media.length > 0

  return (
    <div
      onClick={() => navigate(`/lessons/${lesson.id}`)}
      className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] cursor-pointer active:bg-gray-50 transition-colors"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: meta.bgColor }}
      >
        <Icon size={18} style={{ color: meta.color }} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-medium leading-snug text-gray-900">
          {lesson.title}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {lesson.durationMinutes}分 ・ {hasMedia ? '動画あり' : 'テキスト'}
        </p>
      </div>
    </div>
  )
}
