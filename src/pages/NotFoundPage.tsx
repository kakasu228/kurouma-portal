import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="mt-4 text-lg font-medium text-gray-600">ページが見つかりません</p>
      <p className="mt-2 text-sm text-gray-400">お探しのページは存在しないか、移動された可能性があります。</p>
      <Button className="mt-6" onClick={() => navigate('/')}>
        ホームに戻る
      </Button>
    </div>
  )
}
