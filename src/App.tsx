import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { CompletionProvider } from '@/context/CompletionContext'
import { LevelUpCelebration } from '@/components/features/LevelUpCelebration'
import { router } from '@/router'

export default function App() {
  return (
    <AuthProvider>
      <CompletionProvider>
        <RouterProvider router={router} />
        <LevelUpCelebration />
      </CompletionProvider>
    </AuthProvider>
  )
}
