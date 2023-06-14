import { styled } from "styled-components";
import * as Slider from "@radix-ui/react-slider";

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

      color: ${({ theme }) => theme.COLORS.WHITE_100};
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
`;

export const AllEventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 34px;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1.6rem;

  > h2 {
    font-family: "Nunito";
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const TagContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin-top: 16px;
`;
export const InputDateContainer = styled.div`
  width: 45%;

  margin-top: 16px;
`;

export const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 20px;

  @media (min-width: 768px) {
    width: 35%;
  }
`;
export const SliderTrack = styled(Slider.Track)`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_100};
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;
export const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE_400};
  box-shadow: 0 2px 10px #000;
  border-radius: 10px;
  > &:hover {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_400};
  }
  > &:focus {
    outline: none;
    box-shadow: 0 0 0 5px #000;
  }
`;
export const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 9999px;
  height: 100%;
`;

export const Label = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 16px 0;

  span {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;

    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  @media (min-width: 768px) {
    width: 35%;
  }
`;
