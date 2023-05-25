import { Input } from "../../components/Input";
import { SvgButton } from "../../components/SvgButton";
import { Container, Form, Header, Title } from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Header>
        <Title>Criar conta como produtor(a)</Title>

        <div>
          <SvgButton svg={closeIcon} />
        </div>
      </Header>

      <Form>
        <Input placeholder="Insira seu nome" />
        <Input placeholder="Insira um e-mail" type="email" />
        <Input placeholder="Crie sua senha" type="password" />
        <Input placeholder="Repita sua senha" type="password" />

        <Button title="Criar conta" isLoading={false} />
      </Form>
    </Container>
  );
}
