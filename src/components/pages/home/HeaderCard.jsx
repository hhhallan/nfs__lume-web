import styled from "styled-components";

export default function HeaderCard({ bgImage }) {
    return (
        <HeaderCardStyled bgImage={bgImage}>
            <div>
                <h1>Facilitez vos trajets, <br/> sans polluer.</h1>
                <p>Rendez votre voyage plus sain et plus agréable en respectant l'environnement avec Lume</p>
                <button>Obtenir l'app</button>
            </div>
        </HeaderCardStyled>
    );
}

const HeaderCardStyled = styled.div`
  border-radius: 10px;
  background-color: #FD531D;
  padding: 60px 40px;
  color: #fff;
  background-image: url(${props =>  props.bgImage});
  
  div {
    width: 40%;
    
    h1 {
      font-size: 35px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    
    button {
      margin-top: 30px;
      color: #FD531D;
      font-size: 14px;
      font-weight: 600;
      //width: 315px;
      padding: 15px 40px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      background: #fff;
    }
  }
`;