import { Container, SvgButtonVariantColor, isRounded } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface SvgButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: SvgButtonVariantColor;
  svg: string;
  isRounded?: isRounded
}

export function SvgButton({
  svg,
  variant = "PRIMARY",
  isRounded = 'NotRounded',
  ...rest
}: SvgButtonProps) {
  return (
    <Container variant={variant} {...rest} rounded={isRounded}>
      <img src={svg} />
    </Container>
  );
}
