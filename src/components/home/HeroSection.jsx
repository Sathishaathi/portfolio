import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 opacity-50" />
      
      <div className="container mx-auto px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-[12rem] font-bold leading-none tracking-tight">
            FOR
            <br />
            WEB
            <br />
            DESIGN
          </h1>
          
          <div className="mt-8 flex gap-24">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-md"
            >
              A freelance art director and designer based in the Netherlands. 
              Specializing in contemporary and functional design, I bring brands to 
              life with purposeful, visually compelling solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-white" />
              <p className="text-sm uppercase tracking-wider">Scroll to explore</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-0 bottom-0 w-1/2 h-[90vh]"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <img 
            src="/hero-image.jpg" 
            alt="Designer Portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;