import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed w-full py-4 px-6 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Sathish</a>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="#contact" className="px-6 py-2 bg-green-500 text-black font-medium rounded-full">
            Let's talk →
          </a>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-green-500 transition-colors">
      {children}
    </a>
  )
}

export default Navbar