import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface MenuLinkProps {
  icon: ReactNode
  label: string
  onClick: () => void
}

export function MenuLink({ icon, label, onClick }: MenuLinkProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] text-left hover:bg-gray-50 transition-colors"
    >
      <div className="shrink-0 text-gray-500">{icon}</div>
      <span className="flex-1 text-[15px] font-medium text-gray-900">{label}</span>
      <ChevronRight size={18} className="shrink-0 text-gray-400" />
    </button>
  )
}
