import { ButtonHTMLAttributes, useState } from "react";
import { Container, TagButtonVariantColor } from "./styles";

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: TagButtonVariantColor;
}

export function TagButton({
  title,
  variant: initialVariant = "NOTACTIVE",
  ...rest
}: TagButtonProps) {
  const [variant, setVariant] = useState(initialVariant);

  function handleTougleVariant() {
    setVariant(variant === "NOTACTIVE" ? "ACTIVE" : "NOTACTIVE");
  }

  return (
    <Container
      type="button"
      variant={variant}
      onClick={handleTougleVariant}
      {...rest}
    >
      {title}
    </Container>
  );
}
