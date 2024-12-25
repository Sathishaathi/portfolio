import NavLink from '../ui/NavLink'

function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <a href="#contact" className="px-6 py-2 bg-green-500 text-black font-medium rounded-full">
        Let's talk →
      </a>
    </nav>
  )
}

export default Navigation