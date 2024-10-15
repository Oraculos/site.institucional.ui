import './styles.css';

interface TechniqueCardProps {
    name: string;
    imageSrc: string;
    japaneseLetters: string;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ name, imageSrc, japaneseLetters }) => {
    return (
        <div className="technique-card">
            <div className="japanese-letters">{japaneseLetters}</div>
            <img src={imageSrc} alt={name} className="technique-image" />
            <span>{name}</span>
        </div>
    );
};

export default TechniqueCard;
