import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
}

export function TextButton({ title, ...rest }: TextButtonProps){
     return (
        <Container
        type='button'
        {...rest}>
           {title}
        </Container>
    )
}