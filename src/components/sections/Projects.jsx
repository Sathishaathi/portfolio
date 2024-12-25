function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="px-6 py-2 bg-green-500 text-black font-medium rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform">
            View Project →
          </button>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Automated Assembly System",
    description: "Industrial automation solution for high-speed manufacturing",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
    tags: ["Automation", "Manufacturing", "CAD"]
  },
  {
    title: "Ergonomic Product Design",
    description: "Consumer product focused on user comfort and efficiency",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    tags: ["Product Design", "Ergonomics", "3D Modeling"]
  },
  {
    title: "Sustainable Packaging",
    description: "Eco-friendly packaging solution for consumer goods",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    tags: ["Sustainability", "Packaging", "Innovation"]
  }
]

export default Projects