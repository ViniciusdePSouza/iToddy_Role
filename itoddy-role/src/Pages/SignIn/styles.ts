import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(./src/assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;

  padding: 2rem;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  

    gap: 1.6rem;
`
export const SvgWrapper = styled.div`
  width: 44px;
  height: 44px;
  
  display: flex;
  align-self: end;

  position: absolute;
  top: 1.6%;
  right: 4%;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 2.8rem;
  font-weight: 700;

  margin-bottom: 8rem;
`;

export const Logo = styled.img`
    margin: 8rem 0 12rem 0;
`;



