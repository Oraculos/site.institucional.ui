
import './App.css'
import Header from './componentes/head'
import Hero from './componentes/hero'
import SecondarySection from './componentes/secondarySection'
import Footer from './componentes/footer'
import AboutLuis from './componentes/aboutLuis'

function App() {
  return (
    <div className='container_hero'>
    <Header />
    <Hero />
    <SecondarySection />
    <AboutLuis />
    <Footer />
    </div>
  )
}

export default App
