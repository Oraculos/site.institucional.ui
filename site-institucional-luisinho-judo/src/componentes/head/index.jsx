import "./styles.css";
import Logo from "./assets/logo.svg";


export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="nav-menu">
                <a href="#instituto">O Instituto</a>
                <a href="#historia">História</a>
                <a href="#fale-conosco">Fale Conosco</a>
            </nav>
        </header>
    );
};