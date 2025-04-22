import { motion } from 'framer-motion';
import { skills } from '../lib/data';

// Brand colors for each technology
const brandColors = {
  // Frontend
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  'Tailwind CSS': '#06B6D4',
  Bootstrap: '#7952B3',
  
  // Backend
  'Node.js': '#339933',
  Express: '#000000',
  Java: '#007396',
  
  // Database
  MongoDB: '#47A248',
  MySQL: '#4479A1',
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const skillVariants = {
    hover: {
      y: -3,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#0c0d12]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-[#6961ff] tracking-wider">
            MY SKILLS
          </h2>
          <motion.div 
            className="w-16 h-px bg-[#6961ff] mx-auto mt-4 opacity-70"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <p className="text-[#E0E0E0]/80 max-w-2xl mx-auto mt-6 text-sm md:text-base font-light tracking-wide">
            Technologies and tools I've mastered throughout my development journey
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#16171d] rounded-xl border border-[#252525] overflow-hidden hover:border-[#6961ff]/30 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-6 flex items-center">
                  <span className="text-[#6961ff] mr-2 text-xl">&lt;&gt;</span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.techs.map((tech, techIndex) => {
                    const brandColor = brandColors[tech.label] || '#6961ff';
                    return (
                      <motion.div
                        key={techIndex}
                        variants={skillVariants}
                        whileHover="hover"
                        className="flex items-center gap-2 bg-[#252525]/80 hover:bg-[#252525] text-[#E0E0E0] px-4 py-2 rounded-full border border-[#252525] text-sm transition-all"
                        style={{
                          boxShadow: `0 0 0 1px ${brandColor}20`,
                          borderColor: `${brandColor}30`
                        }}
                      >
                        <tech.icon 
                          className="h-4 w-4" 
                          style={{ color: brandColor }}
                        />
                        <span className="font-light tracking-wide">{tech.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;