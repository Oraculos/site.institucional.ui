
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import AboutLuis from './componentes/aboutLuis';
import Footer from './componentes/footer';
import Header from './componentes/head';
import Hero from './componentes/hero';
import SecondarySection from './componentes/secondarySection';
import Teachers from './componentes/teachers';

export default function App() {
  return (
    <div>
      <div className="headerDiv">
        <Header />
      </div>
      <div className='fullContainerPage'>
        <Hero />
        <SecondarySection />
        <AboutLuis />
        <Teachers />
        <Footer />
      </div>
    </div>
  )
}


