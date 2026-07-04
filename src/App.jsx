import { Routes, Route } from 'react-router-dom'
import HomeDashboard from './pages/HomeDashboard'
import SignInPage from './pages/SignInPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import CheckEmailPage from './pages/CheckEmailPage'
import CreatePasswordPage from './pages/CreatePasswordPage'
import AlertsPage from './pages/AlertsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/check-email" element={<CheckEmailPage />} />
      <Route path="/reset-password" element={<CreatePasswordPage />} />
      <Route path="/alerts" element={<AlertsPage />} />
    </Routes>
  )
}
