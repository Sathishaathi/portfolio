function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="hover:text-green-500 transition-colors font-mono"
    >
      {children}
    </a>
  )
}

export default NavLink