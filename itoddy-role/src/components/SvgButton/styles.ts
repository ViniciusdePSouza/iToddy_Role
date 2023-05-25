import { styled } from "styled-components";

export type SvgButtonVariantColor = "PRIMARY" | "SECONDARY";

export type isRounded = "FullyRounded" |"Rounded" | 'NotRounded' 

interface SvgButtonContainerProps {
    variant: SvgButtonVariantColor
    rounded: isRounded
}

const buttonRadius = {
  Rounded: '8px',
  NotRounded: '0px',
  FullyRounded: '100%'
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
  ${(props) => `border-radius: ${buttonRadius[props.rounded]}`};

`;