import { Container } from "./styles"

interface TextButtonProps {
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