export interface User {
  id: string
  email: string
  name: string
  avatarUrl?: string
  enrolledAt: string
  courseName: string
  coachName: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface MockCredentials {
  email: string
  password: string
}
