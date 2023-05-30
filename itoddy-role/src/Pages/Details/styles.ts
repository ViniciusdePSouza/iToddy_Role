import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > img {
    width: 100%;
    position: absolute;
    top: 0;

    z-index: -1;
  }

  @media (min-width: 768px) {
    > img {
      width: 100%;
      height: 200px;
      position: absolute;
      top: 0;

      z-index: -1;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    width: 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const EventInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  gap: 0.8rem;

  margin-top: 50px;
`;

export const EventDate = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Nunito", sans-serif;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const EventTittle = styled.h1`
  font-family: "Nunito", sans-serif;
  font-size: 3.2rem;
  line-height: 3.2rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AddressDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  margin-top: 34px;

  gap: 1.2rem;
`;

export const AddressInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const Place = styled.h2`
  font-family: "Nunito", sans-serif;
  font-style: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const Address = styled.p`
  font-family: "Nunito", sans-serif;
  font-style: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  text-align: left;

  margin-top: 28px;
`;

export const TitleSection = styled.h2`
  font-family: "Nunito", sans-serif;
  font-style: 600;
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const AboutParagraph = styled.p`
  font-family: "Nunito", sans-serif;
  font-style: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  margin-top: 10px;
`;

export const ProducerSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  text-align: left;

  margin-top: 28px;
`;

export const ProducerName = styled.span`
  font-family: "Nunito", sans-serif;
  font-style: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  margin-top: 10px;
`;

export const TicketDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 60px;
`;

export const Modal = styled.div`
  width: 100%;

  padding: 16px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_100};

  position: absolute;
  z-index: 2;
  bottom: 0%;
`;

export const BuyTicketDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_100};

  border-radius: 8px;

  > div {
    width: 30%;
  }
`;

export const Warning = styled.span`
  font-family: "Nunito", sans-serif;
  font-style: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TicketInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > h2 {
    font-family: "Nunito", sans-serif;
    font-style: 700;
    font-size: 1.6rem;
    line-height: 2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  > span {
    font-family: "Nunito", sans-serif;
    font-style: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const CloseButton = styled.div`
  all: unset;

  width: 50px;
  height:5px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
