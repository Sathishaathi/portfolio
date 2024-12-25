function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Product Design A"
            description="Innovative mechanical solution for industrial automation"
            image="/project1.jpg"
          />
          <ProjectCard 
            title="Product Design B"
            description="Consumer product with focus on ergonomics"
            image="/project2.jpg"
          />
          <ProjectCard 
            title="Product Design C"
            description="Sustainable packaging solution"
            image="/project3.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default Projects;