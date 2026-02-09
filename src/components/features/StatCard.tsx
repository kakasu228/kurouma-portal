interface StatCardProps {
  label: string
  value: string
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white p-3 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <p className="text-[20px] font-bold text-gray-900">{value}</p>
      <p className="mt-0.5 text-[11px] text-gray-500">{label}</p>
    </div>
  )
}
