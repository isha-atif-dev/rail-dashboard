import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Apple } from 'lucide-react'
import AuthLayout from '../components/AuthLayout'
import PasswordField from '../components/PasswordField'

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.98v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.98A9 9 0 0 0 0 9c0 1.45.35 2.83.98 4.03l2.97-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .98 4.97l2.97 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
    </svg>
  )
}

export default function SignInPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', keepSignedIn: false })

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end only for now, this is where the sign in API call goes once the backend is ready.
    console.log('Sign in submitted:', form)
    navigate('/')
  }

  return (
    <AuthLayout cardWidth="max-w-[520px]">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
        <p className="text-slate-500 mb-6">Sign in to pick up your journey where you left off.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 rounded-full py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 bg-white">
            <GoogleIcon /> Sign in with Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 border border-slate-200 rounded-full py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 bg-white">
            <Apple size={18} /> Sign in with Apple
          </button>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <span className="flex-1 h-px bg-slate-200" />
          <span className="text-xs font-medium text-slate-400">or with Email</span>
          <span className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-slate-800 mb-1.5 block">Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="email" value={form.email} onChange={update('email')} placeholder="Enter your Professional Email" className="w-full bg-white border border-slate-200 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-400" />
          </div>
        </div>

        <PasswordField
          label="Password"
          value={form.password}
          onChange={update('password')}
          placeholder="Password"
          rightSlot={<Link to="/forgot-password" className="text-sm text-slate-500 hover:text-blue-600">Forgot?</Link>}
        />

        <label className="flex items-center gap-2 mt-4 mb-6 text-sm text-slate-600 cursor-pointer">
          <input type="checkbox" checked={form.keepSignedIn} onChange={update('keepSignedIn')} className="rounded border-slate-300" />
          Keep me signed in on this device
        </label>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-3.5 rounded-full">
          Sign in
        </button>

        <p className="text-center text-sm text-slate-500 mt-5">
          New here? <Link to="/signup" className="text-blue-600 font-medium">Create an account</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
