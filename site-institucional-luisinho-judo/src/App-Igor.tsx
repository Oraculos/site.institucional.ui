
import './App.css'
import Header from './componentes/head'
import Hero from './componentes/hero'
import SecondarySection from './componentes/secondarySection'
import Footer from './componentes/footer'
import AboutLuis from './componentes/aboutLuis'
import Teachers from './componentes/teachers'

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


