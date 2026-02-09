import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HelpCircle, MessageCircle } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { ProfileHeader } from '@/components/features/ProfileHeader'
import { InfoList } from '@/components/features/InfoList'
import { MenuLink } from '@/components/features/MenuLink'
import { ConfirmDialog } from '@/components/ui/ConfirmDialog'
import { useAuth } from '@/hooks/useAuth'
import { formatDate } from '@/utils/date'

export default function ProfilePage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false)

  const courseItems = [
    { label: 'コース名', value: user.courseName },
    { label: '担当コーチ', value: user.coachName },
    { label: '入会日', value: formatDate(user.enrolledAt) },
  ]

  return (
    <>
      <ProfileHeader name={user.name} email={user.email} />
      <PageContainer>
        {/* Course info */}
        <div className="mb-5">
          <InfoList title="コース情報" items={courseItems} />
        </div>

        {/* Support links */}
        <section className="mb-8">
          <h2 className="mb-3 text-base font-semibold text-gray-900">サポート</h2>
          <div className="space-y-3">
            <MenuLink
              icon={<HelpCircle size={20} />}
              label="よくある質問"
              onClick={() => navigate('/faq')}
            />
            <MenuLink
              icon={<MessageCircle size={20} />}
              label="LINEで問い合わせ"
              onClick={() => window.open('https://line.me/R/ti/p/@kurouma-support', '_blank')}
            />
          </div>
        </section>

        {/* Logout */}
        <div className="flex justify-center pb-4">
          <button
            onClick={() => setShowLogout(true)}
            className="text-sm font-medium text-red-500"
          >
            ログアウト
          </button>
        </div>
      </PageContainer>

      <ConfirmDialog
        open={showLogout}
        title="ログアウト"
        message="ログアウトしてもよろしいですか？"
        confirmLabel="ログアウト"
        cancelLabel="キャンセル"
        danger
        onConfirm={() => {
          setShowLogout(false)
          // Mock logout - just reload
          window.location.href = '/'
        }}
        onCancel={() => setShowLogout(false)}
      />
    </>
  )
}
