import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

interface PageHeaderProps {
  title: string
  showBack?: boolean
}

export function PageHeader({ title, showBack = false }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 flex h-[52px] items-center border-b border-gray-200 bg-white px-4">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      <h1 className="text-[20px] font-bold leading-[1.4]">{title}</h1>
    </header>
  )
}
