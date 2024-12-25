import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WorkSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-2 gap-24"
        >
          <div>
            <h2 className="text-5xl font-bold mb-8">Selected Work</h2>
            <p className="text-gray-400 max-w-md">
              A curated selection of projects that showcase my expertise in digital design, 
              branding, and art direction.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, category, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-[4/5] object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="mt-4 text-xl font-medium">{title}</h3>
      <p className="text-gray-400">{category}</p>
    </motion.div>
  );
}

const projects = [
  {
    title: "Brand Evolution",
    category: "Branding",
    image: "/work/project-1.jpg"
  },
  // Add more projects...
];

export default WorkSection;