import styled from "styled-components";
import {qrcode, scooter, security} from "../../assets/icons/icons.js";

export default function List() {
    const data = [
        {
            icon: scooter,
            title: "Trouver une trottinette",
            text: "Trouver une trottinette dans la rue ou localisez en une sur la carte dans l'app Lume."
        },
        {
            icon: qrcode,
            title: "Débloquer avec l'app",
            text: "Utilisez l'app Lume pour débloquer votre trottinette et démarrer votre trajet !"
        },
        {
            icon: security,
            title: "Suivre les règles de sécurité",
            text: "Voyagez en respectant le code de la route et les règles globales. Restez vigilants quand vous roulez."
        },
        {
            icon: scooter,
            title: "Stationner avec prudence",
            text: "Stationnez votre trottinette à l'écart des piétons, n'encombrez pas le trottoir: ils vont apprécier."
        },
    ]

    return (
        <ListStyled>
            {data.map((item, index) => (
                <li key={index}>
                    <div>
                        <img src={item.icon} alt=""/>
                        <span>{item.title}</span>
                    </div>
                    <p>{item.text}</p>
                </li>
            ))}
        </ListStyled>
    );
}

const ListStyled = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 20px;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    
    img {
      width: 30px;
      height: 30px;
    }
  }
  
  p {
    margin-left: 40px;
    font-size: 12px;
    color: #7F7F7F;
  }
`;