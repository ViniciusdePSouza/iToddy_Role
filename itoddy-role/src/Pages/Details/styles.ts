import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  > img {
    position: absolute;
    top: 0;

    z-index: -1;
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
`
