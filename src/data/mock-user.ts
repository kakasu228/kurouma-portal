import type { User, MockCredentials } from '@/types'

export const MOCK_CREDENTIALS: MockCredentials = {
  email: 'tanaka@example.com',
  password: 'password123',
}

export const MOCK_USER: User = {
  id: 'user-001',
  email: 'tanaka@example.com',
  name: '田中太郎',
  enrolledAt: '2025-11-01',
  courseName: '恋愛コンサルプログラム',
  coachName: '佐藤コーチ',
}
