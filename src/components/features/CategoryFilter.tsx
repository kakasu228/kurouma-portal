import { cn } from '@/utils/cn'

interface FilterOption {
  value: string
  label: string
}

interface CategoryFilterProps {
  options: FilterOption[]
  active: string
  onChange: (value: string) => void
}

export function CategoryFilter({ options, active, onChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-[52px] z-30 border-b border-gray-200 bg-white">
      <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
        {options.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={cn(
              'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              active === value
                ? 'bg-blue-50 text-blue-500'
                : 'border border-gray-200 text-gray-600 hover:bg-gray-50',
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
