import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Calendar, HelpCircle, User } from 'lucide-react'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  { path: '/', label: 'ホーム', icon: Home },
  { path: '/lessons', label: '教材', icon: BookOpen },
  { path: '/schedule', label: '予定', icon: Calendar },
  { path: '/faq', label: 'FAQ', icon: HelpCircle },
  { path: '/profile', label: 'マイページ', icon: User },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white pb-safe shadow-[0_-1px_3px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              cn(
                'flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-0.5 transition-colors',
                'text-[10px] font-medium leading-tight',
                isActive ? 'text-blue-500' : 'text-gray-400',
              )
            }
          >
            <Icon size={24} strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
