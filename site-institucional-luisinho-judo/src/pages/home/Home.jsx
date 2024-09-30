import Header from "../../componentes/head";
import Hero from "../../componentes/hero";
import SecondarySection from "../../componentes/secondarySection";
import Footer from "../../componentes/footer";
import "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container_hero">
        <Header />
        <Hero />
        <SecondarySection />
        <Footer />
      </div>
    </>
  );
}
