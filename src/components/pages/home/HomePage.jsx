import styled from "styled-components";
import {HeaderCard, Title} from "../../reusable/components.js";
import TutoSection from "./TutoSection.jsx";
import RegleSection from "./RegleSection.jsx";
import {bgScoot} from "../../../assets/images/images.js";

export default function HomePage() {
    return (
        <HomeStyled>
            <header>
                <div>
                    <Title/>
                </div>

                <HeaderCard bgImage={bgScoot}/>
            </header>

            <TutoSection/>
            <RegleSection/>

            <footer>
                <p>© 2023 Lume</p>
                <ul>
                    <li>Mentions légales</li>
                    <li>Politique de confidentialité</li>
                    <li>Cookies</li>
                </ul>
            </footer>
        </HomeStyled>
    );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin-bottom: 35px;
  }

  footer {
    margin-top: 60px;
    border-top: 1px solid #aaaaaa;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #7D7D7D;
    
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
`;