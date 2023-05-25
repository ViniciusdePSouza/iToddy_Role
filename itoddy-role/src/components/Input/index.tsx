import { Container, InputVariantColor } from "./styles"

interface InputProps {
    icon?: string
    placeholder: string
    variant?: InputVariantColor
    type?: string
}

export function Input({ icon = "", variant = 'PRIMARY', placeholder, type = 'text', ...rest}: InputProps ) {
    return(
        <Container variant={variant}>
            {icon && <img src={icon}/>}
            <input placeholder={placeholder} type={type} {...rest}/>
        </Container>
    )
}