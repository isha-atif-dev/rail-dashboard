import { useState } from 'react'
import { Flag, Plus, Minus, LocateFixed, CloudLightning, Bot, Wrench, Users, AlertTriangle } from 'lucide-react'
import { lines } from '../data/mockData'

const lineFilterColors = {
  Central: 'text-red-600',
  Victoria: 'text-blue-600',
  Northern: 'text-slate-800',
  Elizabeth: 'text-violet-600',
}

// Marker positions are percentages of the map container, hand-placed to
// roughly mirror the layout in the Figma map screenshot.
const markers = [
  { type: 'metro', top: '22%', left: '38%', color: 'bg-slate-800' },
  { type: 'metro', top: '25%', left: '65%', color: 'bg-blue-600' },
  { type: 'metro', top: '38%', left: '92%', color: 'bg-violet-600' },
  { type: 'metro', top: '55%', left: '70%', color: 'bg-blue-600' },
  { type: 'delay', top: '32%', left: '48%', color: 'bg-red-600' },
  { type: 'delay', top: '58%', left: '18%', color: 'bg-red-600' },
  { type: 'report', top: '28%', left: '54%', color: 'bg-violet-600' },
  { type: 'report', top: '52%', left: '48%', color: 'bg-violet-600' },
  { type: 'crowding', top: '45%', left: '48%', color: 'bg-amber-500' },
  { type: 'crowding', top: '48%', left: '82%', color: 'bg-amber-500' },
]

const markerIcon = { metro: Bot, delay: AlertTriangle, report: Wrench, crowding: Users }

export default function MapPanel() {
  const [activeLines, setActiveLines] = useState([])

  const toggleLine = (name) =>
    setActiveLines((prev) => (prev.includes(name) ? prev.filter((l) => l !== name) : [...prev, name]))

  return (
    <div className="relative w-full h-[420px] lg:h-[520px] rounded-none lg:rounded-b-none overflow-hidden bg-slate-100">
      {/* Faint street-grid background for a "map" feel */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${i * 11}%`} x2="100%" y2={`${i * 11 + 4}%`} stroke="#CBD5E1" strokeWidth="1" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v${i}`} x1={`${i * 11}%`} y1="0" x2={`${i * 11 + 4}%`} y2="100%" stroke="#CBD5E1" strokeWidth="1" />
        ))}
      </svg>

      {/* Tube line paths */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <path d="M -20 550 C 250 560, 500 545, 650 555 S 950 500, 1020 480" fill="none" stroke="#DC2626" strokeWidth="4" />
        <path d="M 300 60 C 420 180, 520 260, 560 320 S 680 480, 900 620" fill="none" stroke="#2563EB" strokeWidth="4" />
        <path d="M -20 260 C 200 300, 380 320, 480 400 S 620 560, 700 640" fill="none" stroke="#111827" strokeWidth="4" />
        <path d="M -20 330 C 300 300, 600 340, 780 360 S 950 380, 1020 370" fill="none" stroke="#7C3AED" strokeWidth="4" />
      </svg>

      {/* Top bar: updated pill + line filters */}
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 flex-wrap">
        <span className="bg-white shadow-sm text-xs text-slate-600 px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Updated 2s ago · Central London
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          {lines.map((line) => (
            <button
              key={line.name}
              onClick={() => toggleLine(line.name)}
              className={`bg-white shadow-sm text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border ${activeLines.includes(line.name) ? 'border-slate-300' : 'border-transparent'}`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: line.color }} />
              <span className={lineFilterColors[line.name]}>{line.name}</span>
            </button>
          ))}
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
            <Flag size={12} /> Report Issue
          </button>
        </div>
      </div>

      {/* Disruption card */}
      <div className="absolute top-16 left-3 w-56 bg-slate-900 text-white rounded-xl p-4 shadow-lg">
        <CloudLightning size={20} className="mb-3 text-slate-300" />
        <p className="text-sm font-semibold leading-snug">Expect Disruption 43% Chance Of Service Changes.</p>
        <p className="text-xs text-slate-400 mt-2">📍 Ealing</p>
      </div>

      {/* Zoom + locate controls */}
      <div className="absolute right-3 top-16 flex flex-col gap-2">
        <button aria-label="Zoom in" className="w-9 h-9 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-600">
          <Plus size={16} />
        </button>
        <button aria-label="Zoom out" className="w-9 h-9 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-600">
          <Minus size={16} />
        </button>
        <button aria-label="Recenter map" className="w-9 h-9 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-600">
          <LocateFixed size={16} />
        </button>
      </div>

      {/* Markers */}
      {markers.map((m, i) => {
        const Icon = markerIcon[m.type]
        return (
          <span
            key={i}
            className={`absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-white shadow-md ${m.color}`}
            style={{ top: m.top, left: m.left }}
          >
            <Icon size={14} />
          </span>
        )
      })}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-white shadow-sm rounded-xl px-4 py-3 text-xs text-slate-600">
        <p className="font-bold tracking-widest text-[10px] text-slate-400 mb-2">LEGEND</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-600" /> Delay</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Crowding</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-violet-600" /> Report</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> On time</span>
        </div>
      </div>
    </div>
  )
}
