import SocialLinks from './SocialLinks'
import ProfileImage from './ProfileImage'

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-mono">
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
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-8 py-3 bg-green-500 text-black rounded-full font-medium"
            >
              View Projects →
            </a>
            <SocialLinks />
          </div>
        </div>
        <ProfileImage />
      </div>
    </section>
  )
}

export default Hero