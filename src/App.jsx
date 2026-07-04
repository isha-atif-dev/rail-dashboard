import { Routes, Route } from 'react-router-dom'
import HomeDashboard from './pages/HomeDashboard'
import SignupPage from './pages/SignupPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}
