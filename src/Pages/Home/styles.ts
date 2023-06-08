import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
export const Logo = styled.img`
  margin: 1rem;
`;

export const HomeNav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.6rem;
`;

export const HomeHeader = styled.header`
  width: 100%;

  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 4px 5px 0px rgba(181, 177, 181, 1);
  -moz-box-shadow: 0px 4px 5px 0px rgba(181, 177, 181, 1);
  box-shadow: 0px 4px 5px 0px rgba(217, 208, 217, 1);
`;

export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  font-family: "Nunito", sans-serif;

  gap: 0.4rem;

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;

export const ProducerLinkDiv = styled.div`
  display: flex;
  align-items: center;

  > h2 {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  
  > h1 {
    font-family: "Nunito", sans-serif;
    font-style: 600;
    font-size: 2rem;
    line-height: 2rem;

    margin-bottom: 16px;
  }
`;

export const HighlighEventsDiv = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 1.6rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
    border-radius: 4px; 
  }
`;

export const AllEventsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 32px;

    
  > h1 {
    font-family: "Nunito", sans-serif;
    font-style: 600;
    font-size: 2rem;
    line-height: 2rem;

    margin-bottom: 16px;
  }
`
