import type { LevelDef } from '@/data/levels'

/** 1件の完了記録 */
export interface CompletionRecord {
  guideId: string
  userId: string
  completedAt: string // ISO 8601
}

/** ランクアップ情報 */
export interface LevelUpInfo {
  level: LevelDef
}

/** 完了トラッキングのサービスインターフェース（localStorage → Supabase 移行時も同じ型） */
export interface CompletionService {
  completions: CompletionRecord[]
  isCompleted: (guideId: string) => boolean
  toggleCompletion: (guideId: string) => void
  completedCount: number
  totalCount: number
  pendingLevelUp: LevelUpInfo | null
  clearLevelUp: () => void
}
