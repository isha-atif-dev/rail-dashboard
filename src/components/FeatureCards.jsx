import { Wallet, ShoppingBag, Calendar, Wrench, Users, MessageSquare, ArrowRight } from 'lucide-react'
import { featureCards } from '../data/mockData'

const icons = { Wallet, ShoppingBag, Calendar, Wrench, Users, MessageSquare }

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {featureCards.map((card) => {
        const Icon = icons[card.icon]
        return (
          <div key={card.title} className="bg-white border border-slate-200 rounded-xl p-5">
            <Icon size={22} className={`mb-3 ${card.iconColor}`} />
            <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-3">{card.description}</p>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 w-fit">
              {card.linkText} <ArrowRight size={14} />
            </a>
          </div>
        )
      })}
    </div>
  )
}
