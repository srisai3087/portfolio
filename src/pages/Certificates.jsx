import { ExternalLink, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../lib/data';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'; // Uncomment this

const Certificates = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 px-6 md:px-12 relative section-highlight">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Certificates & Achievements</h2>
          <p className="text-[#E0E0E0] max-w-2xl mx-auto">
            My professional certifications and accomplishments that showcase my expertise and continuous learning.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {certificates.map((certificate) => (
                <div 
                  key={certificate.id} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:-translate-y-1 h-full p-6 m-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary bg-opacity-20 rounded-lg">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-[#E0E0E0] text-sm">{certificate.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                    <p className="text-[#E0E0E0] mb-4">{certificate.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary text-sm">{certificate.credential}</span>
                      <a 
                        href={certificate.verifyUrl} 
                        className="text-white bg-primary hover:bg-primary/80 px-3 py-1.5 rounded-lg inline-flex items-center transition-colors text-sm"
                      >
                        Verify
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={scrollPrev} 
              disabled={prevBtnDisabled}
              className="rounded-full bg-gray-800 hover:bg-primary border-none text-white p-2"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </button>
            
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-primary' : 'bg-gray-600'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={scrollNext} 
              disabled={nextBtnDisabled}
              className="rounded-full bg-gray-800 hover:bg-primary border-none text-white p-2"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;