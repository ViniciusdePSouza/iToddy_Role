import { styled } from "styled-components";

export type TagButtonVariantColor = "ACTIVE" | "NOTACTIVE";

interface TagButtonContainerProps {
  variant: TagButtonVariantColor;
}

const tagButtonVariantBackgroundColor = {  
    ACTIVE: "linear-gradient(15deg, #9D6DE7 0%, #431E8E 57.92%, #1E0D3F 100%);",
    NOTACTIVE: "#FFFF"
}

const tagButtonVariantTextColor = {
    ACTIVE: "#FFFF",
    NOTACTIVE: "#000"
}

const tagButtonBorderColor = {
    NOTACTIVE: "1px solid #2A2337",
    ACTIVE: "none"
}

export const Container = styled.button<TagButtonContainerProps>`
  all: unset;

  width: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  padding: 1.2rem 6rem;
  margin-top: 0.8rem;

  font-size: 1.6rem;

  border-radius: 20px;

  flex-shrink: 0;

  cursor: pointer;

  ${(props) => `color: ${tagButtonVariantTextColor[props.variant]}`};

  ${(props) => `background: ${tagButtonVariantBackgroundColor[props.variant]}`};

  ${(props) => `border: ${tagButtonBorderColor[props.variant]}`};
`;
