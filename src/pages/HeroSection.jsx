import { ChevronDown, ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  // Direct scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center py-20 px-6 md:px-12 bg-[#0c0d12]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <h4 className="text-lg md:text-xl font-medium mb-4 text-[#6961ff]">
                <span className="animate-pulse">👋</span> Hello, I'm
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
                Sri Sai Surada
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-transparent">
                  MERN Stack Developer
                </span>
              </h2>
              <p className="text-white mb-8 text-lg">
                I create elegant, functional, and user-centric digital solutions
                that blend beautiful design with clean code. Let's build
                something amazing together.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#6961ff] hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-base font-medium transition-all flex items-center"
                >
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                {/* Download CV button with link */}
                <a
                  href="SriSai_Full-Stack-Developer.pdf" 
                  className="border border-[#6961ff] text-[#6961ff] hover:bg-[#6961ff] hover:text-white px-6 py-2 rounded-lg text-base font-medium transition-all flex items-center"
                  download
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-700 rounded-full opacity-10 animate-pulse"></div>

              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#6961ff]">
                <img
                  src="https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Sri Sai Surada"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-[#0D0D0D] p-3 rounded-full border border-gray-800 shadow-lg animate-bounce">
                <div className="bg-gradient-to-r from-primary to-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  JS
                </div>
              </div>

              {/* React bubble without blink effect */}
              <div className="absolute -bottom-2 -left-2 bg-[#0D0D0D] p-3 rounded-full border border-gray-800 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  React
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down - Removed blinking */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={() => scrollToSection("skills")}
            className="flex flex-col items-center text-white hover:text-[#6961ff] transition-colors"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111] opacity-80 z-[-1]"></div>
      <div className="absolute inset-0 z-[-2]">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRNNiA0YzAtMi4yMDktMS43OTEtNC00LTRTLTIgMS43OTEtMiA0czEuNzkxIDQgNCA0IDQtMS43OTEgNC00Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
