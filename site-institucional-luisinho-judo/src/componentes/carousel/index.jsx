import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./styles.css"; // Importa os estilos

const Carousel = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { title: "Branca", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Cor da pureza, mostra que o judoca deve manter a mente limpa diante do enorme conhecimento que tem a alcançar." },
        { title: "Cinza", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Dada apenas para praticantes até aproximadamente 15 anos, mostra uma pequena evolução técnica." },
        { title: "Azul", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Denota amadurecimento e expectativa de evolução, já que o judoca continua dando andamento ao seu aprendizado." },
        { title: "Amarela", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Assim como o sol, traz a iluminação. O judoca deve buscar seu brilho, ganhando confiança e desenvolvendo a inteligência." },
        { title: "Laranja", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Situada entre os elementos fogo e terra, mostra ao praticante que ele deve fortalecer as energias e a sua vontade de vencer." },
        { title: "Verde", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Simboliza harmonia e equilíbrio. Representa um oásis, mas também a certeza de que ainda há mais deserto a vencer." },
        { title: "Roxa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Gera sentimentos como respeito próprio, dignidade e autoestima. Indica que o judoca deve encontrar novos caminhos e elevar a espiritualidade." },
        { title: "Marrom", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "É a cor da solidificação. Representa a constância, a disciplina, a uniformidade adquirida e a observação das regras." },
        { title: "Preta", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Representa humildade, autocontrole, maturidade, serenidade, disciplina com responsabilidade, dignidade e conhecimento." },
        { title: "Coral", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "O judoca alcançou o nível em que pode aspirar à faixa vermelha, porém sem perder a essência da faixa branca." },
        { title: "Vermelha", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judo_yellow_belt.svg/2560px-Judo_yellow_belt.svg.png", description: "Cor do fogo, da paixão e do entusiasmo, sugere motivação, atividade e vontade. Mostra que, mais do que nunca, é necessária força de vontade para não desistir." }
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000, // Ajuste de velocidade da transição
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "30px",
      beforeChange: (current, next) => setActiveIndex(next),
      cssEase: 'ease', // Suaviza a transição
  };

  return (
      <div className="carousel-container">
          <Slider ref={sliderRef} {...settings}>
              {items.map((item, index) => (
                  <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                      <div className="carousel-item-wrapper">
                          <img src={item.image} alt={item.title} className="carousel-image" />
                          {index === activeIndex && <h2>{item.title}</h2>}
                          {index === activeIndex && <p>{item.description}</p>}
                      </div>
                  </div>
              ))}
          </Slider>
          <div className="carousel-navigation">
              <button className="nav-button left" onClick={() => sliderRef.current.slickPrev()}></button>
              <button className="nav-button right" onClick={() => sliderRef.current.slickNext()}></button>
          </div>
      </div>
  );
};

export default Carousel;
