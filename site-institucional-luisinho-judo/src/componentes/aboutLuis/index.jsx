import "./styles.css";
import sobreLuis from "./assets/sobreLuis.svg";
import { Container } from "@mui/material";

export default function AboutLuis() {
    return (
        <div className="tertiary-section">
            <img src={sobreLuis} alt="" />
        </div>
    );
}
