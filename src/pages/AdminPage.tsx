import { useMemo } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { PageContainer } from '@/components/layout/PageContainer'
import { StatCard } from '@/components/features/StatCard'
import { AdminUserCard } from '@/components/features/AdminUserCard'
import { useCompletions } from '@/hooks/useCompletions'
import { GUIDE_ITEMS } from '@/data/mock-guides'
import { MOCK_USERS, MOCK_COMPLETIONS } from '@/data/mock-admin'
import type { CompletionRecord } from '@/types'

export default function AdminPage() {
  const { completions: myCompletions } = useCompletions()

  // user-001 は実際の localStorage データを使用、他はモックデータ
  const allCompletions = useMemo<Record<string, CompletionRecord[]>>(() => {
    return {
      'user-001': myCompletions,
      ...MOCK_COMPLETIONS,
    }
  }, [myCompletions])

  const totalGuides = GUIDE_ITEMS.length

  // 統計計算
  const stats = useMemo(() => {
    const memberCount = MOCK_USERS.length
    const completionRates = MOCK_USERS.map((u) => {
      const records = allCompletions[u.id] ?? []
      return records.length / totalGuides
    })
    const avgRate = Math.round(
      (completionRates.reduce((a, b) => a + b, 0) / memberCount) * 100,
    )
    const fullyCompleted = completionRates.filter((r) => r === 1).length

    return { memberCount, avgRate, fullyCompleted }
  }, [allCompletions, totalGuides])

  return (
    <>
      <PageHeader title="管理者ダッシュボード" showBack />
      <PageContainer>
        {/* Summary stats */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          <StatCard label="メンバー数" value={`${stats.memberCount}`} />
          <StatCard label="平均進捗" value={`${stats.avgRate}%`} />
          <StatCard label="全完了" value={`${stats.fullyCompleted}人`} />
        </div>

        {/* User list */}
        <div className="space-y-3">
          {MOCK_USERS.map((user) => (
            <AdminUserCard
              key={user.id}
              user={user}
              completions={allCompletions[user.id] ?? []}
            />
          ))}
        </div>

        {/* bottom spacer */}
        <div className="h-4" />
      </PageContainer>
    </>
  )
}
