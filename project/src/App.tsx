import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582126892906-5ba36b6d4796?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">John Doe</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-widest uppercase">Full Stack Developer</p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <Github size={24} strokeWidth={1} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <Linkedin size={24} strokeWidth={1} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <Mail size={24} strokeWidth={1} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4" id="about">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-16">
            <User className="text-black mr-3" strokeWidth={1} />
            <h2 className="text-3xl font-light tracking-wide">About Me</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-16 font-light">
            I'm a passionate full-stack developer with 5 years of experience building web applications.
            I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find
            me contributing to open-source projects or writing technical blog posts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border border-gray-100 p-8">
              <h3 className="font-light text-lg mb-4 tracking-wide">Frontend</h3>
              <p className="text-gray-600 font-light">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="border border-gray-100 p-8">
              <h3 className="font-light text-lg mb-4 tracking-wide">Backend</h3>
              <p className="text-gray-600 font-light">Node.js, Python, PostgreSQL</p>
            </div>
            <div className="border border-gray-100 p-8">
              <h3 className="font-light text-lg mb-4 tracking-wide">Tools</h3>
              <p className="text-gray-600 font-light">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 bg-gray-50" id="projects">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-16">
            <Code className="text-black mr-3" strokeWidth={1} />
            <h2 className="text-3xl font-light tracking-wide">Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-16">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="group">
                <img 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200`}
                  alt={`Project ${project}`}
                  className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-6">
                  <h3 className="text-xl font-light mb-3 tracking-wide">Project {project}</h3>
                  <p className="text-gray-600 mb-4 font-light">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <span className="px-3 py-1 border border-gray-200 text-sm font-light">React</span>
                      <span className="px-3 py-1 border border-gray-200 text-sm font-light">Node.js</span>
                    </div>
                    <a href="#" className="text-black hover:text-gray-600 flex items-center group-hover:translate-x-2 transition-transform">
                      View <ExternalLink size={16} className="ml-2" strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-16">
            <Briefcase className="text-black mr-3" strokeWidth={1} />
            <h2 className="text-3xl font-light tracking-wide">Get in Touch</h2>
          </div>
          <form className="space-y-8">
            <div>
              <label className="block text-gray-700 mb-2 font-light" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-light" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-light" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-black transition-colors"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-8 hover:bg-gray-900 transition-colors font-light tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Github size={20} strokeWidth={1} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Linkedin size={20} strokeWidth={1} />
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <Mail size={20} strokeWidth={1} />
            </a>
          </div>
          <p className="text-gray-500 font-light tracking-wide">© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;