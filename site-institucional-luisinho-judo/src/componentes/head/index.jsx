import React, { useEffect } from "react";
import "./styles.css";
import Logo from "./assets/logo.svg";

export default function Header() {
    useEffect(() => {
        const header = document.querySelector(".header");
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
                if (window.scrollY > 0) {
                    header.classList.add("scrolled");
                    header.classList.remove("top");
                } else {
                    header.classList.remove("scrolled");
                    header.classList.add("top");
                }
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <header className="header top">
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
}
