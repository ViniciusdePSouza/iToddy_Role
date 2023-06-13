import { ButtonHTMLAttributes, useContext, useState } from "react";
import { Container, TagButtonVariantColor } from "./styles";

import { TagContext } from "../../Context/TagContext";

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: TagButtonVariantColor;
}

export function TagButton({
  title,
  variant: initialVariant = 'NOTACTIVE',
  ...rest
}: TagButtonProps) {
  const [variant, setVariant] = useState(initialVariant);

  const { handleStoreTitle } = useContext(TagContext);

  function handleToggleVariant() {
    if(variant === 'NOTACTIVE') {
      setVariant('ACTIVE')
      handleStoreTitle('ACTIVE', title)
    }

    if(variant === 'ACTIVE') {
      setVariant('NOTACTIVE')
      handleStoreTitle('NOTACTIVE', title)
    }
  }

  return (
    <Container
      type="button"
      variant={variant}
      onClick={handleToggleVariant}
      {...rest}
    >
      {title}
    </Container>
  );
}
