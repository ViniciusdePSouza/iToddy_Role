import { styled } from "styled-components";

export type ButtonVariantColor = "PRIMARY" | "SECONDARY";

interface ButtonContainerProps {
  variant: ButtonVariantColor;
}

const buttonVariantBackgroundColor = {
  PRIMARY: "linear-gradient(15deg, #9D6DE7 0%, #431E8E 57.92%, #1E0D3F 100%);",
  SECONDARY: "rgba(42, 35, 55, 0.8)",
};

export const Container = styled.button<ButtonContainerProps>`
  width: 100%;

  all:unset;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.2rem 6rem;
  margin-top: .8rem;

  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.COLORS.WHITE_100};

 ${(props) => `background: ${buttonVariantBackgroundColor[props.variant]}`};

  border-radius: 20px
`;
