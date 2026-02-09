import { FileText, ExternalLink } from 'lucide-react'
import type { LessonAttachment } from '@/types'

const TYPE_LABELS: Record<string, string> = {
  'google-docs': 'Google Docs で開く',
  'google-forms': 'Google Forms で開く',
  'google-sheets': 'Google Sheets で開く',
  external: '外部リンクで開く',
}

interface AttachmentListProps {
  attachments: LessonAttachment[]
}

export function AttachmentList({ attachments }: AttachmentListProps) {
  if (attachments.length === 0) return null

  return (
    <section>
      <h2 className="mb-3 px-4 text-base font-semibold text-gray-900">添付ファイル</h2>
      <div className="space-y-2 px-4">
        {attachments.map((att, i) => (
          <a
            key={i}
            href={att.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
          >
            <FileText size={20} className="shrink-0 text-gray-400" />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-medium text-gray-900">{att.title}</p>
              <p className="text-xs text-gray-500">{TYPE_LABELS[att.type] ?? '開く'}</p>
            </div>
            <ExternalLink size={16} className="shrink-0 text-gray-400" />
          </a>
        ))}
      </div>
    </section>
  )
}
