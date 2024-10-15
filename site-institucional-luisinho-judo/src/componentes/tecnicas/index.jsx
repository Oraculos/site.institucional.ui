// src/components/tecnicas/Techniques.jsx
import React from 'react';
import './styles.css';
import TechniqueCard from './TechniqueCard'; // Import the TechniqueCard component

const Techniques = () => {
  const nageWazaTechniques = [
    { name: 'Seoi-Nage', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/seoi-nage new.png', japaneseLetters: '背負投' },
    { name: 'Sumi-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/sumi-otoshi new.png', japaneseLetters: '背負投' },
    { name: 'Tai-Otoshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/tai-otoshi new.png', japaneseLetters: '背負投' },
    { name: 'Kata-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/te-waza/kata-guruma new.png', japaneseLetters: '背負投' },
    { name: 'Uki-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/uki-goshi new.png', japaneseLetters: '背負投' },
    { name: 'Ushiro-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/ushiro-goshi new.png', japaneseLetters: '背負投' },
    { name: 'Harai-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/harai-goshi new.png', japaneseLetters: '背負投' },
    { name: 'Tsuri-Komi-Goshi', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/koshi-waza/tsuri-komi-goshi new.png', japaneseLetters: '背負投' },
    { name: 'De-Ashi-Barai', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/de-ashi-barai new.png', japaneseLetters: '背負投' },
    { name: 'Osoto-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/osoto-guruma new.png', japaneseLetters: '背負投' },
    { name: 'Hiza-Guruma', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/hiza-guruma new.png', japaneseLetters: '背負投' },
    { name: 'O-Uchi-Gari', imageSrc: 'src/componentes/tecnicas/assets/nage_waza/ashi-waza/o-uchi-gari new.png', japaneseLetters: '背負投' },
  ];

  const katameWazaTechniques = [
    { name: 'Kesa-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kesa-gatame.png', japaneseLetters: '背負投' },
    { name: 'Kata-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kata-gatame.png', japaneseLetters: '背負投' },
    { name: 'Kuzure-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/kuzure-kami-shiho-gatame.png', japaneseLetters: '背負投' },
    { name: 'Tate-Shiho-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/osaekomi-waza/tate-shiho-gatame.png', japaneseLetters: '背負投' },
    { name: 'Do-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/do-jime.png', japaneseLetters: '背負投' },
    { name: 'Gyak-Joji-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/gyaku-juji-jime.png', japaneseLetters: '背負投' },
    { name: 'Ryo-Te-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/ryo-te-jime.png', japaneseLetters: '背負投' },
    { name: 'Tsukkomi-Jime', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/shime-waza/tsukkomi-jime.png', japaneseLetters: '背負投' },
    { name: 'Ashi-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ashi-garami.png', japaneseLetters: '背負投' },
    { name: 'Ude-Garami', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-garami.png', japaneseLetters: '背負投' },
    { name: 'Ude-Hishigi-Sankaku-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-sankaku-gatame.png', japaneseLetters: '背負投' },
    { name: 'Ude-Hishigi-Waki-Gatame', imageSrc: 'src/componentes/tecnicas/assets/katame_waza/kansetsu-waza/ude-hishigi-waki-gatame.png', japaneseLetters: '背負投' },
  ];

  return (
    <div className="techniques-container">
      <div className="techniques-wrapper">
        <div className="category">
          <h2>Nage-Waza: Técnicas de Projeção</h2>
          <div className="techniques-list">
            {nageWazaTechniques.map((technique, index) => (
              <TechniqueCard 
                key={index} 
                name={technique.name} 
                imageSrc={technique.imageSrc} 
                japaneseLetters={technique.japaneseLetters} 
              />
            ))}
          </div>
        </div>
        <div className="category">
          <h2>Katame-Waza: Técnicas de Solo</h2>
          <div className="techniques-list">
            {katameWazaTechniques.map((technique, index) => (
              <TechniqueCard 
                key={index} 
                name={technique.name} 
                imageSrc={technique.imageSrc} 
                japaneseLetters={technique.japaneseLetters} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
