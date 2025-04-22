import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("education");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom >= 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const educationData = [
    {
      id: 1,
      institution: "Lovely Professional University",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png",
      degree: "B.Tech Computer Science",
      cgpa: "CGPA: 6.6",
      duration: "2022 - 2026",
    },
    {
      id: 2,
      institution: "Narayana Junior College",
      logo: "https://www.pinpng.com/pngs/m/485-4854654_narayana-e-techno-school-indore-narayana-group-of.png",
      degree: "Intermediate",
      cgpa: "91.7%",
      duration: "2020 - 2022",
    },
    {
      id: 3,
      institution: "Narayana High School",
      logo: "https://www.pinpng.com/pngs/m/485-4854654_narayana-e-techno-school-indore-narayana-group-of.png",
      degree: "Matriculation",
      cgpa: "98.2%",
      duration: "2019 - 2020",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -3,
      borderColor: "rgba(105, 97, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="education" className="py-24 px-6 sm:px-12 bg-[#0c0d12]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#6961ff] tracking-wider">
            EDUCATION
          </h2>
          <motion.div
            className="w-12 h-px bg-[#6961ff] mx-auto mt-3 opacity-80"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[#6961ff] z-0 transform -translate-x-1/2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={lineVariants}
            style={{ originY: 0 }}
          />

          <div className="space-y-12 sm:space-y-14">
            <AnimatePresence>
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative z-10 w-full ${
                    index % 2 === 0 ? "sm:pr-[50%]" : "sm:pl-[50%]"
                  }`}
                >
                  <motion.div
                    custom={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    whileHover="hover"
                    variants={cardVariants}
                    className="relative p-6 sm:p-7 bg-[#16171d] rounded-2xl border border-[#252525] w-full max-w-sm sm:max-w-md mx-auto"
                  >
                    <div className="flex items-start gap-4">
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`${item.institution} logo`}
                          className="w-12 h-12 object-contain rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">
                          {item.institution}
                        </h3>
                        <p className="text-sm text-[#E0E0E0]/80 mt-1 font-light">
                          {item.degree}
                        </p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm text-[#6961ff] font-medium">
                            {item.cgpa}
                          </span>
                          <span className="text-xs sm:text-sm text-[#E0E0E0]/50">
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;