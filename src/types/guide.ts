import type { MediaEmbed } from './lesson'

/** ガイドのセクション区分 */
export type GuideSection = 'onboarding' | 'first-week' | 'daily'

/** 外部リンクの種別 */
export type ExternalLinkType =
  | 'loom'
  | 'line'
  | 'aitemasu'
  | 'amazon'
  | 'google-docs'
  | 'google-forms'
  | 'google-sheets'
  | 'external'

/** 外部リンク（LINE グループ、予約ページ、Amazon 等） */
export interface ExternalLink {
  label: string
  url: string
  type: ExternalLinkType
}

/**
 * ガイドアイテム — 教材(Lesson)とは別の「やることリスト」型コンテンツ
 * 進捗管理はしない。閲覧・リンク誘導のみ。
 */
export interface GuideItem {
  id: string
  section: GuideSection
  title: string
  description: string
  sortOrder: number
  media?: MediaEmbed[]
  links?: ExternalLink[]
  /** 関連する既存レッスンのID（1週間課題→レッスン詳細への誘導用） */
  linkedLessonId?: string
  /** 削除候補フラグ（コンテンツ精査用。UIでは非表示） */
  deletionCandidate?: boolean
}

/** セクションのメタ情報（表示ラベル・アイコン） */
export interface GuideSectionMeta {
  key: GuideSection
  label: string
  icon: string
  description: string
}
