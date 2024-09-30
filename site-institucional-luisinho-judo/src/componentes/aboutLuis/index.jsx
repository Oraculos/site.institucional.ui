import "./styles.css";
import NoiseEffect from "./assets/NoiseEffect.svg";
import Judoca from "./assets/Judoca.png";
import Cards from "./assets/cards.svg";

export default function AboutLuis() {
    return (
        <div className="tertiary-section">
            <div className="cards">
                <img src={Cards} alt="Cards Background" />
            </div>
            <div className="texture">
                <img src={NoiseEffect} alt="Noise Effect" className="noise-effect" />
                <div className="circle-container">
                    <div className="circle"></div>
                    <img src={Judoca} alt="Judoca" />
                </div>
            </div>
        </div>
    );
}