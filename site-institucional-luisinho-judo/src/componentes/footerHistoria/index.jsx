import { Container } from '@mui/material';
import footerHistoriaImage from './assets/footer.svg'
import './styles.css';

export default function footerHistoria() {
    return (
        <div className="container_footerHistoria">
            <div className="image_hero_content">
                <img src={footerHistoriaImage} alt="" />
                
            </div>
        </div>
    );
}