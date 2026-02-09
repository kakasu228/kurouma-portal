import { useParams, Navigate } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageContainer } from '@/components/layout/PageContainer'
import { VideoEmbed } from '@/components/features/VideoEmbed'
import { ArticleBody } from '@/components/features/ArticleBody'
import { AttachmentList } from '@/components/features/AttachmentList'
import { useLessons } from '@/hooks/useLessons'
import { CATEGORY_META } from '@/data/mock-lessons'
import type { LessonCategory } from '@/types'
import { Brain, MessageCircle, Shirt, Heart, Sparkles } from 'lucide-react'

const ICONS: Record<LessonCategory, typeof Brain> = {
  mindset: Brain,
  communication: MessageCircle,
  fashion: Shirt,
  dating: Heart,
  'self-improvement': Sparkles,
}

export default function LessonDetailPage() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const { getLessonById } = useLessons()

  const lesson = lessonId ? getLessonById(lessonId) : undefined
  if (!lesson) return <Navigate to="/lessons" replace />

  const meta = CATEGORY_META[lesson.category]
  const Icon = ICONS[lesson.category]

  return (
    <>
      <PageHeader title={lesson.title} showBack />
      <PageContainer>
        {/* Category badge + duration */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{ backgroundColor: meta.bgColor, color: meta.color }}
          >
            <Icon size={14} />
            {meta.label}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <Clock size={14} />
            {lesson.durationMinutes}分
          </span>
        </div>

        {/* Video embed */}
        {lesson.media.length > 0 && (
          <div className="mb-6 space-y-4">
            {lesson.media.map((m, i) => (
              <VideoEmbed key={i} media={m} />
            ))}
          </div>
        )}

        {/* Body */}
        <div className="mb-8">
          <ArticleBody html={lesson.body} />
        </div>

        {/* Attachments */}
        {lesson.attachments.length > 0 && (
          <div className="mb-8">
            <AttachmentList attachments={lesson.attachments} />
          </div>
        )}
      </PageContainer>
    </>
  )
}
