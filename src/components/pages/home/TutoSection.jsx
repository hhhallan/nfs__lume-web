import styled from "styled-components";
import {List} from "../../reusable/components.js";

export default function TutoSection() {
    return (
        <TutoSectionStyled>
            <h2>Comment utiliser une trottinette Lume ?</h2>
            <div className="container">
                <List/>
                <img className="phone" src="/src/assets/images/phone.png" alt="Téléphone"/>
            </div>
        </TutoSectionStyled>
    );
}

const TutoSectionStyled = styled.div`

    div.container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap:60px;
      padding: 30px 250px;
      
      img.phone {
        width: 35%;
      }
    }
`;