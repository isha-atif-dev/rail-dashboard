import { ArrowLeft, Clock, ArrowRightLeft } from 'lucide-react'

export default function JourneyResults({ journey, onBack }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <button onClick={onBack} aria-label="Back to search" className="text-slate-400 shrink-0">
          <ArrowLeft size={20} />
        </button>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">
            {journey.origin} → {journey.destination}
          </p>
          <p className="text-xs text-slate-400">Fastest route right now</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-slate-50 rounded-2xl px-4 py-3 mb-4">
        <div>
          <p className="text-xl font-bold text-slate-900">{journey.departTime}</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-wide">Depart</p>
        </div>
        <div className="flex-1 flex items-center gap-2 text-slate-300">
          <span className="flex-1 h-px bg-slate-200" />
          <Clock size={14} />
          <span className="flex-1 h-px bg-slate-200" />
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900">{journey.arriveTime}</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-wide">Arrive</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 px-1">
        <span>{journey.totalMin} min total</span>
        <span className="flex items-center gap-1">
          <ArrowRightLeft size={12} />
          {journey.changes === 0 ? 'Direct, no changes' : `${journey.changes} change${journey.changes > 1 ? 's' : ''}`}
        </span>
      </div>

      <div className="space-y-3 mb-5">
        {journey.legs.map((leg, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center pt-1">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: leg.color }} />
              {i < journey.legs.length - 1 && <span className="w-px flex-1 bg-slate-200 my-1" />}
            </div>
            <div className="flex-1 pb-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-800">{leg.line} line</p>
                <p className="text-xs text-slate-400">Platform {leg.platform}</p>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {leg.departTime} {leg.from} → {leg.arriveTime} {leg.to}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">{leg.durationMin} min</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="w-full bg-slate-50 hover:bg-slate-100 transition-colors text-slate-600 text-sm font-medium py-3 rounded-full"
      >
        Search again
      </button>
    </div>
  )
}