import { styled } from "styled-components";

export type SvgButtonVariantColor = "PRIMARY" | "SECONDARY";

interface SvgButtonContainerProps {
    variant: SvgButtonVariantColor
}

const svgButtonVariantBorder = {
    PRIMARY: "none",
    SECONDARY: "1px solid #FFFF",
  };

export const Container = styled.button<SvgButtonContainerProps>`
  all: unset;
  
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;


  padding: 1.2rem;

  background-color: transparent;

  ${(props) => `border: ${svgButtonVariantBorder[props.variant]}`};

  border-radius: 8px;

`;