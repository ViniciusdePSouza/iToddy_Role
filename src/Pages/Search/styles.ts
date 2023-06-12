import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  > h1 {
    font-family: "Nunito", sans-serif;
    font-style: 600;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  > div {
    width: 20%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 1.6rem;

  overflow-x: auto;
  padding: 1.5rem;

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

export const HighlightsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;

  margin-top: 16px;

  overflow-x: auto;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  border-radius: 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    gap: 0.8rem;

    > h2 {
      font-family: "Nunito", sans-serif;
      font-style: 600;
      font-size: 1.6rem;
      line-height: 2rem;

      color: ${({theme}) => theme.COLORS.WHITE_100}
    }
  }
`;

export const HighlightsCarroussel = styled.div`
    width: 100%;
  display: flex;
  align-items: center;

  gap: 1.6rem;

  margin-top: 16px;

  overflow-x: auto;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.WHITE_100};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`

export const AllEventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 34px;
`
