import { Github, Linkedin, Mail } from 'lucide-react'

function SocialLinks() {
  const links = [
    { href: "https://github.com", icon: <Github /> },
    { href: "https://linkedin.com", icon: <Linkedin /> },
    { href: "mailto:sathishathi77@gmail.com", icon: <Mail /> }
  ]

  return (
    <div className="flex items-center gap-4">
      {links.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="p-3 border border-gray-800 rounded-full hover:border-green-500 hover:text-green-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default SocialLinks