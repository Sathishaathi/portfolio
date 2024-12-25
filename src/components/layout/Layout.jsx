import Header from './Header'

function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen text-white font-mono">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout