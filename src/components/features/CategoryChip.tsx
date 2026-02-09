import { useNavigate } from 'react-router-dom'
import { Brain, MessageCircle, Shirt, Heart, Sparkles } from 'lucide-react'
import type { LessonCategory } from '@/types'
import { CATEGORY_META } from '@/data/mock-lessons'

const ICONS: Record<LessonCategory, typeof Brain> = {
  mindset: Brain,
  communication: MessageCircle,
  fashion: Shirt,
  dating: Heart,
  'self-improvement': Sparkles,
}

interface CategoryChipProps {
  category: LessonCategory
}

export function CategoryChip({ category }: CategoryChipProps) {
  const navigate = useNavigate()
  const meta = CATEGORY_META[category]
  const Icon = ICONS[category]

  return (
    <button
      onClick={() => navigate(`/lessons?category=${category}`)}
      className="flex shrink-0 w-20 h-20 flex-col items-center justify-center gap-1.5 rounded-xl transition-opacity active:opacity-70"
      style={{ backgroundColor: meta.bgColor }}
    >
      <Icon size={24} strokeWidth={2} style={{ color: meta.color }} />
      <span className="text-xs font-medium text-gray-700 leading-tight text-center">
        {meta.label}
      </span>
    </button>
  )
}
