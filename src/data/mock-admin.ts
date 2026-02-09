import type { User, CompletionRecord } from '@/types'

/** 管理者ビュー用モックユーザー（Supabase移行時に削除） */
export const MOCK_USERS: User[] = [
  {
    id: 'user-001',
    email: 'tanaka@example.com',
    name: '田中太郎',
    enrolledAt: '2025-11-01',
    courseName: '恋愛コンサルプログラム',
    coachName: '佐藤コーチ',
  },
  {
    id: 'user-002',
    email: 'suzuki@example.com',
    name: '鈴木花子',
    enrolledAt: '2025-12-15',
    courseName: '恋愛コンサルプログラム',
    coachName: '佐藤コーチ',
  },
  {
    id: 'user-003',
    email: 'yamada@example.com',
    name: '山田健太',
    enrolledAt: '2026-01-10',
    courseName: '恋愛コンサルプログラム',
    coachName: '佐藤コーチ',
  },
  {
    id: 'user-004',
    email: 'sato@example.com',
    name: '佐藤美咲',
    enrolledAt: '2026-02-01',
    courseName: '恋愛コンサルプログラム',
    coachName: '佐藤コーチ',
  },
]

/** モック完了データ — user-001 は実行時に localStorage から読み込む */
export const MOCK_COMPLETIONS: Record<string, CompletionRecord[]> = {
  'user-002': [
    { guideId: 'p0-02', userId: 'user-002', completedAt: '2025-12-16T10:00:00Z' },
    { guideId: 'p0-04', userId: 'user-002', completedAt: '2025-12-16T11:00:00Z' },
    { guideId: 'fw-01', userId: 'user-002', completedAt: '2025-12-17T09:00:00Z' },
    { guideId: 'fw-02', userId: 'user-002', completedAt: '2025-12-18T14:00:00Z' },
    { guideId: 'fw-03', userId: 'user-002', completedAt: '2025-12-18T15:00:00Z' },
    { guideId: 'fw-04', userId: 'user-002', completedAt: '2025-12-19T10:00:00Z' },
    { guideId: 'fw-05', userId: 'user-002', completedAt: '2025-12-20T08:00:00Z' },
    { guideId: 'fw-06', userId: 'user-002', completedAt: '2025-12-20T09:00:00Z' },
    { guideId: 'dt-02', userId: 'user-002', completedAt: '2025-12-21T07:00:00Z' },
    { guideId: 'dt-01', userId: 'user-002', completedAt: '2025-12-21T07:30:00Z' },
  ],
  'user-003': [
    { guideId: 'p0-02', userId: 'user-003', completedAt: '2026-01-11T10:00:00Z' },
    { guideId: 'p0-04', userId: 'user-003', completedAt: '2026-01-12T11:00:00Z' },
    { guideId: 'fw-01', userId: 'user-003', completedAt: '2026-01-13T09:00:00Z' },
  ],
  'user-004': [],
}
