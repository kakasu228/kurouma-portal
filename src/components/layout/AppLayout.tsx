import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function AppLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-lg bg-gray-50">
      <Outlet />
      <BottomNav />
    </div>
  )
}
