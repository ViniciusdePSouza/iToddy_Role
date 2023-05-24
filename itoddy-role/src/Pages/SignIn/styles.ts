import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const Logo = styled.img`
    margin-bottom: 12rem
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 2.8rem;
  font-weight: 700;

  margin-bottom: 8rem;
`;

