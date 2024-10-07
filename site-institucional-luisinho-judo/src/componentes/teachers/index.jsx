import './styles.css';
import Card from '../card';
import BackgroundImage from '../teachers/assets/background.svg';

export default function Teachers() {
    return (
        <div className="backgroundTeachers">
            <img src={BackgroundImage} alt="" />
            <div className="contentTeacher">
                <h1>PROFESSORES</h1>
                <div className="cardContainer">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
