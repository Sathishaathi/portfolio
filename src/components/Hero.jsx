import { Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            Mechanical
            <br />
            <span className="gradient-text">Product Design</span>
            <br />
            Engineer
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Bringing innovative mechanical designs to life through creative problem-solving 
            and precision engineering.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <a href="#projects" 
               className="flex items-center gap-2 px-8 py-3 bg-green-500 text-black rounded-full font-medium">
              View Projects →
            </a>

            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:email@example.com" icon={<Mail />} />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent" />
            <img 
              src="/your-image.jpg" 
              alt="Sathish"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
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

export default Hero