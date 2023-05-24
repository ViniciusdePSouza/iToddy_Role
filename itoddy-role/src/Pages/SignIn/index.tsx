import { ButtonsWrapper, Container, Logo, Paragraph } from "./styles";

import logo from '../../assets/logo.svg'
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
    return (
        <Container>
            <Logo src={logo} alt="Logo Role"/>
            <Paragraph>Aqui você divulga o seu evento e alcança o seu público de verdade.</Paragraph>
            <ButtonsWrapper>
                <Button title="Fazer Login" isLoading={false} />
                <Button title="Criar conta" variant="SECONDARY" isLoading={false} />
                <TextButton title="Esqueceu a senha ?" />
            </ButtonsWrapper>
        </Container>
    )
}