import { Container, SvgButtonVariantColor } from "./styles";

interface SvgButtonProps {
  variant?: SvgButtonVariantColor;
  svg: string;
}

export function SvgButton({
  svg,
  variant = "PRIMARY",
  ...rest
}: SvgButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <img src={svg} />
    </Container>
  );
}
