import { ButtonHTMLAttributes } from "react";
import { Container, TagButtonVariantColor } from "./styles";

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: TagButtonVariantColor;
}

export function TagButton({
  title,
  variant = "NOTACTIVE",
  ...rest
}: TagButtonProps) {
  return (
    <Container type="button" variant={variant} {...rest}>
      {title}
    </Container>
  );
}
