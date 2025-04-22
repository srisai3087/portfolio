import { skills } from '../lib/data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 relative section-highlight"
      style={{
        backgroundColor: '#0c0d12',
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-poppins mb-4"
            style={{ color: '#6961ff' }}
          >
            My Skills
          </h2>
          <p className="text-[#E0E0E0] max-w-2xl mx-auto">
            Here are the technologies and tools I've mastered throughout my career as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:-translate-y-1 p-6"
            >
              <h3
                className="text-xl font-bold mb-4 text-white"
              >
                <span style={{ color: '#6961ff' }}>&lt;&gt;</span> {skill.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skill.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 bg-gray-700 text-[#E0E0E0] px-3 py-2 rounded-full text-sm transition-all hover:bg-primary hover:text-white"
                  >
                    <tech.icon className="text-[#6961ff] h-5 w-5" />
                    <span>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;