import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: '#0c0d12' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-[#6961ff] tracking-wider">
            PROJECTS
          </h2>
          <div className="w-16 h-px bg-[#6961ff] mx-auto mt-4 opacity-70" />
          <p className="text-[#E0E0E0]/80 max-w-2xl mx-auto mt-6 text-sm md:text-base font-light tracking-wide">
            Selected projects showcasing my expertise in full-stack development and problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="h-full bg-[#16171d] border border-[#252525] rounded-xl overflow-hidden flex flex-col hover:border-[#6961ff]/30 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/80 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-[#252525] text-[#E0E0E0]/80 px-2.5 py-1 rounded-full text-xs font-light tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2 text-white tracking-wide">{project.title}</h3>
                  <p className="text-[#E0E0E0]/70 mb-6 text-sm font-light tracking-wide leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#252525]">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-[#6961ff] hover:text-[#7d76ff] transition-colors text-sm font-medium inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        <span>Code</span>
                      </a>
                    )}
                    <a 
                      href={project.liveDemo} 
                      className="bg-[#6961ff] hover:bg-[#7d76ff] text-white px-4 py-2 rounded-lg inline-flex items-center text-sm font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;