import { Tag, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

export default function TopPromoBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-blue-900 text-white text-sm px-4 py-2.5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 min-w-0">
        <Tag size={14} className="shrink-0" />
        <p className="truncate">
          <span className="font-semibold">50% Off at £2.99, save me</span>
          <span className="hidden sm:inline"> · M&S Food at King's Cross station, grab & go</span>
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-white/15 hover:bg-white/25 transition-colors rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
          Get Deal <ArrowRight size={12} />
        </button>
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-4 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
        <button onClick={() => setVisible(false)} aria-label="Dismiss banner" className="text-white/70 hover:text-white">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
