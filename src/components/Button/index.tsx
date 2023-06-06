import { ButtonVariantColor, Container } from "./styles"
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    variant?: ButtonVariantColor
    picture?: string
    isLoading: boolean
}

export function Button({ picture , title, isLoading, variant = 'PRIMARY',  ...rest }: ButtonProps){
     return (
        <Container
        type='button'
        variant={variant}
        disabled={isLoading}
        {...rest}>
           {picture && <img src={picture}alt="" />} 
            {isLoading ? 'Loading' : title}
        </Container>
    )
}