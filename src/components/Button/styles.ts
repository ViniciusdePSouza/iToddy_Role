import { styled } from "styled-components";

export type ButtonVariantColor = "PRIMARY" | "SECONDARY" | "TERTIARY";

interface ButtonContainerProps {
  variant: ButtonVariantColor;
}

const buttonVariantBackgroundColor = {
  PRIMARY: "linear-gradient(15deg, #9D6DE7 0%, #431E8E 57.92%, #1E0D3F 100%);",
  SECONDARY: "rgba(42, 35, 55, 0.8)",
  TERTIARY: "#FFFF"
};

const buttonVariantTextColor = {
  PRIMARY: '#F8F5F9',
  SECONDARY:  '#F8F5F9',
  TERTIARY:  '#431E8E'
}

export const Container = styled.button<ButtonContainerProps>`
  width: 100%;

  all:unset;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  padding: 1.2rem 6rem;
  margin-top: .8rem;

  font-size: 16px;
  line-height: 20px;
  
  ${(props) => `color: ${buttonVariantTextColor[props.variant]}`};

  ${(props) => `background: ${buttonVariantBackgroundColor[props.variant]}`};

  border-radius: 20px;

  cursor: pointer;
`;
