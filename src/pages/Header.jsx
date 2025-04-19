import { useState, useEffect } from 'react';
import { navLinks } from '../lib/data';
// import { Button } from './components/ui/button';
import { Button } from "../ui/Button";
import { Menu, X } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';
import { useIsMobile } from '../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollSection();
  const isMobile = useIsMobile();

  // Track scrolling for header style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111111]/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white font-poppins">
            <span className="text-primary">srisai</span><span className="text-primary"></span>3087
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.url.substring(1))}
                className={`text-[#E0E0E0] hover:text-primary transition-colors text-sm`}
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            {/* <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-primary hover:bg-opacity-90 text-white font-medium px-6 py-2 rounded-lg text-sm"
            >
              Let's Talk
            </Button> */}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.url.substring(1))}
                  className="text-[#E0E0E0] hover:text-primary transition-colors py-2 text-lg border-b border-gray-800"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick('contact')}
                className="bg-primary hover:bg-opacity-90 text-white font-medium py-2 rounded-lg w-full mt-4"
              >
                Let's Talk
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;