import { Container, SvgButtonVariantColor, isRounded } from "./styles";

interface SvgButtonProps {
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
