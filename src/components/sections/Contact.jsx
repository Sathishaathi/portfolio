import { Mail, Phone, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Get in Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-400 mb-12">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-8">
              <ContactInfo 
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="sathishathi77@gmail.com"
                href="mailto:sathishathi77@gmail.com"
              />
              <ContactInfo 
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                value="+91 8610901040"
                href="tel:+918610901040"
              />
              <ContactInfo 
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                value="Chennai, Tamil Nadu"
                href="https://goo.gl/maps/fnmtjbDz5xHz8r3G8"
              />
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <form className="space-y-6">
              <FormField 
                label="Name"
                type="text"
                placeholder="Your name"
              />
              <FormField 
                label="Email"
                type="email"
                placeholder="your@email.com"
              />
              <FormField 
                label="Message"
                type="textarea"
                placeholder="Your message"
              />
              
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-green-500 text-black font-medium rounded-full hover:bg-green-400 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, title, value, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className="flex items-center gap-4 group"
    >
      <div className="p-3 bg-green-500/10 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-black transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-400">{title}</h4>
        <p className="group-hover:text-green-500 transition-colors">{value}</p>
      </div>
    </a>
  )
}

function FormField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      {type === 'textarea' ? (
        <textarea 
          className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          rows={4}
          placeholder={placeholder}
        />
      ) : (
        <input 
          type={type}
          className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default Contact