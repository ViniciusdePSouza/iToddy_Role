import { Container, InputVariantColor } from "./styles";
import { forwardRef, InputHTMLAttributes, useEffect, useState } from "react";

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
        <input ref={ref} placeholder={placeholder} type={type} {...rest} />
        {icon && <img src={icon} />}
      </Container>
    );
  }
);


export default Input;
