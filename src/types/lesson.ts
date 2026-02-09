export type LessonCategory =
  | 'mindset'
  | 'communication'
  | 'fashion'
  | 'dating'
  | 'self-improvement'

export interface MediaEmbed {
  type: 'youtube' | 'loom' | 'google-drive'
  url: string
  label?: string
}

export interface LessonAttachment {
  title: string
  url: string
  type: 'google-docs' | 'google-forms' | 'google-sheets' | 'external'
}

export interface Lesson {
  id: string
  category: LessonCategory
  title: string
  description: string
  durationMinutes: number
  body: string
  media: MediaEmbed[]
  attachments: LessonAttachment[]
  featured: boolean
  sortOrder: number
  /** 削除候補フラグ（コンテンツ精査用。UIでは非表示） */
  deletionCandidate?: boolean
}
