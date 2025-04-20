import './index.css'; // or wherever your tailwind CSS file is located
import './App.css'
import CertificatesCarousel from './pages/CertificatesCarousel'
import Footer from './pages/Footer'
import HeroSection from './pages/HeroSection'
import Projects from './pages/LatestWorks'
import Skills from './pages/Skills'
import Header from './pages/Header';
import ContactPage from './ui/ContactPage';

function App() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <Skills/>
    <Projects/>
    <CertificatesCarousel/>
    <ContactPage/>
    <Footer/>
</>
  )
}
// 
export default App
