import "./styles.css";
export default function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-photo">
                    {/* <img src={ImageTeacher} alt="" /> */}
                </div>
                <p className="card-text">
                    This is the content of the card. You can add more text here.
                </p>
            </div>
        </div>
    );
}