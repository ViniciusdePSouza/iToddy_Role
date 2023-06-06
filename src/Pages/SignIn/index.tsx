import {
  ButtonsWrapper,
  Container,
  Logo,
  Paragraph,
  SvgWrapper,
} from "./styles";

import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { SvgButton } from "../../components/SvgButton";

import closeSVG from "../../assets/closeWhite.svg";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate()

  function handleGotoSignUp() {
    navigate('/iToddy_Role/signup')
  }

  function handleGoToLogin() {
    navigate('/iToddy_Role/login')
  }

  return (
    <Container>
      <SvgWrapper>
        <SvgButton svg={closeSVG} variant="SECONDARY" isRounded="Rounded" />
      </SvgWrapper>

      <Logo src={logo} alt="Logo Role" />
      <Paragraph>
        Aqui você divulga o seu evento e alcança o seu público de verdade.
      </Paragraph>
      <ButtonsWrapper>
        <Button title="Fazer Login" isLoading={false} onClick={handleGoToLogin}/>
        <Button title="Criar conta" variant="SECONDARY" isLoading={false} onClick={handleGotoSignUp} />
        <TextButton title="Esqueceu a senha ?" />
      </ButtonsWrapper>
    </Container>
  );
}
