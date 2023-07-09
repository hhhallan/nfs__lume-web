import styled from "styled-components";

export default function RegleContent({ title, text, img, ...restProps }) {
    return (
        <RegleContentStyled {...restProps}>
            <img src={img} alt=""/>
            <div>
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </RegleContentStyled>
    );
}

const RegleContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  img {
    width: 175px;
    height: 175px;
  }

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      margin-left: 40px;
      font-size: 12px;
      color: #7F7F7F;
    }
  }
`;