interface MonthSeparatorProps {
  month: number
}

export function MonthSeparator({ month }: MonthSeparatorProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-px flex-1 bg-gray-200" />
      <span className="text-xs font-semibold text-gray-500">{month}月</span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  )
}
