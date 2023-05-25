import { Container, InputVariantColor } from "./styles";
import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  variant?: InputVariantColor;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon = "", variant = "PRIMARY", placeholder, type = "text", ...rest },
    ref
  ) => {
    return (
      <Container variant={variant}>
        {icon && <img src={icon} />}
        <input ref={ref} placeholder={placeholder} type={type} {...rest} />
      </Container>
    );
  }
);

export default Input;
