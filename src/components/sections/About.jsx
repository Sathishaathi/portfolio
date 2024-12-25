import { Briefcase, GraduationCap, Award } from 'lucide-react'

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-400 mb-8">
              I am a Mechanical Product Design Engineer with a passion for creating innovative 
              solutions that combine form and function. My expertise lies in developing 
              products that not only solve complex engineering challenges but also deliver 
              exceptional user experiences.
            </p>
            
            <div className="space-y-8">
              <ExperienceCard 
                icon={<Briefcase className="w-6 h-6" />}
                title="Experience"
                description="5+ years of experience in mechanical design and product development"
              />
              <ExperienceCard 
                icon={<GraduationCap className="w-6 h-6" />}
                title="Education"
                description="B.E. in Mechanical Engineering"
              />
              <ExperienceCard 
                icon={<Award className="w-6 h-6" />}
                title="Achievements"
                description="Multiple patents and design awards in product innovation"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="p-3 bg-green-500/10 text-green-500 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

function SkillCard({ name, level }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-green-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const skills = [
  { name: "3D Modeling", level: 95 },
  { name: "CAD Design", level: 90 },
  { name: "Prototyping", level: 85 },
  { name: "Product Development", level: 90 },
  { name: "Manufacturing Design", level: 85 },
  { name: "Technical Documentation", level: 80 }
]

export default About