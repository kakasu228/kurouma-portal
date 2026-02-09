import type { ReactNode } from 'react'

interface ContactCardProps {
  icon: ReactNode
  label: string
  sub: string
  href: string
}

export function ContactCard({ icon, label, sub, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
    >
      <div className="shrink-0 text-gray-500">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{sub}</p>
      </div>
    </a>
  )
}
