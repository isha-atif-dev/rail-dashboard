import logo from '../assets/logo.png'

export default function SplashScreen({ fadingOut }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-blue-900 flex items-center justify-center transition-opacity duration-500 ${fadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <img src={logo} alt="TrainLive" className="w-56 sm:w-72 animate-splash-in" />
    </div>
  )
}
