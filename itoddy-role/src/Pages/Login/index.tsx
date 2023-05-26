import Input from "../../components/Input";
import { ButtonsWrapper, Container, Logo, SvgWrapper } from "./styles";

import logo from "../../assets/logo.svg";
import closeSVG from "../../assets/closeWhite.svg";

import { SvgButton } from "../../components/SvgButton";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Login() {
    function handleLogin(){
        console.log("Chegando")
    }

  return (
    <Container>
      <SvgWrapper>
        <SvgButton svg={closeSVG} variant="SECONDARY" isRounded="Rounded" />
      </SvgWrapper>

      <Logo src={logo} alt="Logo Role" />

      <Input placeholder="Insira seu email" variant="SECONDARY" type="email" />
      <Input
        placeholder="Insira sua senha"
        variant="SECONDARY"
        type="password"
      />

      <ButtonsWrapper>
        <Button
          title="Entrar"
          isLoading={false}
          onClick={handleLogin}
          variant="TERTIARY"
        />
        <TextButton title="Esqueceu a senha ?" />
      </ButtonsWrapper>
    </Container>
  );
}
