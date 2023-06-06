import { styled } from "styled-components";

export type SvgButtonVariantColor = "PRIMARY" | "SECONDARY" | "TERTIARY"

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

const buttonBackgroundVariant = {
  PRIMARY: "transparent",
  SECONDARY: "transparent",
  TERTIARY: "linear-gradient(15deg, #9D6DE7 0%, #431E8E 57.92%, #1E0D3F 100%);"
}

const svgButtonVariantBorder = {
    PRIMARY: "none",
    SECONDARY: "1px solid #FFFF",
    TERTIARY: "none"
  };

export const Container = styled.button<SvgButtonContainerProps>`
  all: unset;
  
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;


  padding: 1.2rem;

  ${(props) => `background-color: ${buttonBackgroundVariant[props.variant]}`};

  ${(props) => `border: ${svgButtonVariantBorder[props.variant]}`};
  ${(props) => `border-radius: ${buttonRadius[props.rounded]}`};

  cursor: pointer;
`;