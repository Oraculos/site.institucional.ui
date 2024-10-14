import React from 'react';
import './styles.css';

const Techniques = () => {
  const nageWazaTechniques = [
    { name: 'Seoi-Nage', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/seoi-nage new.png' },
    { name: 'Sumi-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/sumi-otoshi new.png' },
    { name: 'Tai-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/tai-otoshi new.png' },
    { name: 'Kata-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/kata-guruma new.png' },
    { name: 'Uki-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/uki-goshi new.png' },
    { name: 'Ushiro-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/ushiro-goshi new.png' },
    { name: 'Harai-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/harai-goshi new.png' },
    { name: 'Tsuri-Komi-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/tsuri-komi-goshi new.png' },
    { name: 'De-Ashi-Barai', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/de-ashi-barai new.png' },
    { name: 'Osoto-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/osoto-guruma new.png' },
    { name: 'Hiza-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/hiza-guruma new.png' },
    { name: 'O-Uchi-Gari', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/o-uchi-gari new.png' },
  ];

  const katameWazaTechniques = [
    { name: 'Kesa-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kesa-gatame.png' },
    { name: 'Kata-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kata-gatame.png' },
    { name: 'Kuzure-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kuzure-kami-shiho-gatame.png' },
    { name: 'Tate-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/tate-shiho-gatame.png' },
    { name: 'Do-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/do-jime.png' },
    { name: 'Gyak-Joji-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/gyaku-juji-jime.png' },
    { name: 'Ryo-Te-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/ryo-te-jime.png' },
    { name: 'Tsukkomi-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/tsukkomi-jime.png' },
    { name: 'Ashi-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ashi-garami.png' },
    { name: 'Ude-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-garami.png' },
    { name: 'Ude-Hishigi-Sankaku-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-sankaku-gatame.png' },
    { name: 'Ude-Hishigi-Waki-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-waki-gatame.png' },
  ];

  return (
    <div className="techniques-container">
      <div className="techniques-wrapper">
        <div className="category">
          <h2>Nage-Waza: Técnicas de Projeção</h2>
          <div className="techniques-list">
            {nageWazaTechniques.map((technique, index) => (
              <div key={index} className="technique-card">
                <img src={technique.imageSrc} alt={technique.name} className="technique-image" />
                <p>{technique.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <h2>Katame-Waza: Técnicas de Solo</h2>
          <div className="techniques-list">
            {katameWazaTechniques.map((technique, index) => (
              <div key={index} className="technique-card">
                <img src={technique.imageSrc} alt={technique.name} className="technique-image" />
                <p>{technique.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
