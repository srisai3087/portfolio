import { ArrowUpRight } from 'lucide-react';
import { projects } from '../lib/data';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 relative section-highlight"
      style={{
        backgroundColor: '#0c0d12', // Solid background color
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">Projects</h2>
          <p className="text-[#E0E0E0] max-w-2xl mx-auto">
            Explore my recent projects that showcase my skills and passion for web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(17,17,17,0.8)]"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 text-[#E0E0E0] px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-[#E0E0E0] mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    className="text-primary hover:text-opacity-80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href={project.liveDemo} 
                    className="bg-primary hover:bg-opacity-80 text-white px-4 py-2 rounded-lg inline-flex items-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;