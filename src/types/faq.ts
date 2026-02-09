export type FaqCategory = 'general' | 'billing' | 'technical' | 'coaching'

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
  sortOrder: number
}

export interface ContactInfo {
  lineUrl: string
  lineId: string
  email: string
  responseTime: string
}
