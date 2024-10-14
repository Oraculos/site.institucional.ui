
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './componentes/head'
import HistoriaHero from './componentes/historiaHero'
import TecnicaHero from './componentes/bannerTecnicas'
import FaixasHero from './componentes/bannerFaixas'
import LutasHero from './componentes/bannerLutas'
import FooterHistoria from './componentes/footerHistoria'

export default function App() {
  return (
    <div>
      <div className="headerDiv">
        <Header />
      </div>
      <div className='fullContainerPage'>
      <HistoriaHero/>
      <TecnicaHero/>
      <FaixasHero/>
      <LutasHero/>
      </div>
    </div>
  )
}


