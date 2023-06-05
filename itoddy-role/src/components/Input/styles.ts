import { styled } from "styled-components";

export type InputVariantColor = "PRIMARY" | "SECONDARY";

interface InputContainerProps {
  variant: InputVariantColor;
}

const inputVariantBackgroundColor = {
  PRIMARY: "#FFFF",
  SECONDARY: "#2A2337",
};

const borderVariantColors = {
  PRIMARY: ".5px solid #645A71",
  SECONDARY: ".5px solid #F8F5F9",
};

const textVariantColors = {
  PRIMARY: "#2A2337",
  SECONDARY: "#FFFF",
};

export const Container = styled.div<InputContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  > input {
    width: 100%;

    ${(props) => `background: ${inputVariantBackgroundColor[props.variant]}`};

    padding: 1rem;

    ${(props) => `color: ${textVariantColors[props.variant]}`};

    ${(props) => `border: ${borderVariantColors[props.variant]}`};

    font-family: "Nunito", sans-serif;

    border-radius: 8px;

    font-size: 1.6rem;

    &::placeholder {
      ${(props) => `color: ${textVariantColors[props.variant]}`};

      font-size: 1.6rem;
    }

    &:focus {
      ${(props) => `background: ${inputVariantBackgroundColor[props.variant]}`};
      ${(props) => `color: ${textVariantColors[props.variant]}`};

      ${(props) => `border: ${borderVariantColors[props.variant]}`};

      outline: none;
    }

    &:disabled {
     background: #E1DAD8;
    }
  }
`;
