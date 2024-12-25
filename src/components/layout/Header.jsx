import { Menu } from 'lucide-react'
import Navigation from './Navigation'
import Logo from '../ui/Logo'

function Header() {
  return (
    <header className="fixed w-full py-4 px-6 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <Navigation />
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Header