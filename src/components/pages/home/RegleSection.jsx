import styled from "styled-components";
import RegleContent from "./RegleContent.jsx";
import {helmet, respect, scoot} from "../../../assets/images/images.js";

export default function RegleSection() {
    const data = [
        {
            img: helmet,
            title: "Porter un casque",
            text: "Portez votre casque personnel ou louez-en un dans un magasin.",
        },
        {
            img: respect,
            title: "Respectez le code de la route",
            text: "Roulez à l'intérieur des pistes cyclables et respectez les autres voyageurs.",
        },
        {
            img: scoot,
            title: "Stationner avec responsabilité",
            text: "Garez-vous près des supports à vélos et évitez d'encombrer le trottoir.",
        },
    ];

    return (
        <RegleSectionStyled>
            <h2>Les règles de sécurités à respecter</h2>
            <div className="container">
                {data.map((item, index) => (
                    <RegleContent key={index} title={item.title} text={item.text} img={item.img}/>
                ))}
            </div>
        </RegleSectionStyled>
    );
}

const RegleSectionStyled = styled.div`
  div.container {
      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
  }
`;