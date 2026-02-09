interface InfoItem {
  label: string
  value: string
}

interface InfoListProps {
  title: string
  items: InfoItem[]
}

export function InfoList({ title, items }: InfoListProps) {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-gray-900">{title}</h2>
      <div className="divide-y divide-gray-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {items.map((item, i) => (
          <div key={i} className="px-4 py-3">
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="mt-0.5 text-[15px] font-medium text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
