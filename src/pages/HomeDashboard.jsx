import TopPromoBar from '../components/TopPromoBar'
import Sidebar from '../components/Sidebar'
import MapPanel from '../components/MapPanel'
import FeatureCards from '../components/FeatureCards'
import DepartureBoards from '../components/DepartureBoards'
import DisruptionsAndEvents from '../components/DisruptionsAndEvents'
import NextDeparturesPanel from '../components/NextDeparturesPanel'
import SustainabilityBanner from '../components/SustainabilityBanner'
import Footer from '../components/Footer'

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopPromoBar />

      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <MapPanel />

          <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 max-w-6xl mx-auto">
            <FeatureCards />
            <DepartureBoards />
            <DisruptionsAndEvents />
            <NextDeparturesPanel />
            <SustainabilityBanner />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
