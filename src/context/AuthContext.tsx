import { createContext, type ReactNode } from 'react'
import type { User } from '@/types'
import { MOCK_USER } from '@/data/mock-user'

interface AuthContextValue {
  user: User
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ user: MOCK_USER }}>
      {children}
    </AuthContext.Provider>
  )
}
