import { CreditCard, TrainFront } from 'lucide-react'
import { nextDepartures } from '../data/mockData'

export default function NextDeparturesPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-900">Next departures</h3>
          <a href="#" className="text-sm font-medium text-blue-600">View all →</a>
        </div>
        <div className="divide-y divide-slate-50">
          {nextDepartures.map((dep) => (
            <div key={dep.destination + dep.time} className="flex items-center gap-3 py-3">
              <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 ${dep.color}`}>
                <TrainFront size={16} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800">{dep.destination}</p>
                <p className="text-xs text-slate-400">{dep.line}</p>
              </div>
              <span className="text-sm font-semibold text-slate-800">{dep.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-900 rounded-xl p-6 flex flex-col justify-between text-white">
        <div>
          <CreditCard size={22} className="mb-4 text-blue-200" />
          <h3 className="font-semibold text-lg mb-2">Delayed? Get money back.</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            If your train was delayed by 15 minutes or more, you may be owed compensation. Check eligibility and claim Delay Repay in minutes.
          </p>
        </div>
        <button className="mt-5 bg-white text-blue-900 font-medium text-sm py-2.5 rounded-lg">
          Check eligibility →
        </button>
      </div>
    </div>
  )
}
