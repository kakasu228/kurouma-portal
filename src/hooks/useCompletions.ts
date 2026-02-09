import { useContext } from 'react'
import { CompletionContext } from '@/context/CompletionContext'

export function useCompletions() {
  const ctx = useContext(CompletionContext)
  if (!ctx) throw new Error('useCompletions must be used within CompletionProvider')
  return ctx
}
