function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-4">
              I am a passionate Mechanical Product Design Engineer with expertise in creating 
              innovative solutions for complex engineering challenges. My focus is on combining 
              functionality with aesthetics to deliver exceptional product designs.
            </p>
            <p className="text-gray-300">
              With a strong foundation in mechanical engineering principles and modern design 
              tools, I help bring concepts to life through detailed 3D modeling, prototyping, 
              and manufacturing optimization.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem>3D Modeling</SkillItem>
              <SkillItem>CAD Design</SkillItem>
              <SkillItem>Prototyping</SkillItem>
              <SkillItem>Product Development</SkillItem>
              <SkillItem>Manufacturing Design</SkillItem>
              <SkillItem>Technical Documentation</SkillItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ children }) {
  return (
    <div className="bg-gray-700 px-4 py-2 rounded-lg text-center">
      {children}
    </div>
  );
}

export default About;