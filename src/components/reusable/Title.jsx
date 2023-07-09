import styled from "styled-components";

export default function Title() {
    return (
        <TitleStyled>
            Lume
        </TitleStyled>
    );
}

const TitleStyled = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: #FD531D;
`;