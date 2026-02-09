import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { CompletionProvider } from '@/context/CompletionContext'
import { router } from '@/router'

export default function App() {
  return (
    <AuthProvider>
      <CompletionProvider>
        <RouterProvider router={router} />
      </CompletionProvider>
    </AuthProvider>
  )
}
