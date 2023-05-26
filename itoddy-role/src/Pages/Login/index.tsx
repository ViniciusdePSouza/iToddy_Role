import Input from "../../components/Input";
import {
  ButtonsWrapper,
  Container,
  Form,
  FormValidatorAdvisor,
  Logo,
  SvgWrapper,
} from "./styles";

import logo from "../../assets/logo.svg";
import closeSVG from "../../assets/closeWhite.svg";

import { SvgButton } from "../../components/SvgButton";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

import { api } from "../../services/api";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

const loginFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleLogin(data: LoginFormData) {
    await console.log(data);
  }

  return (
    <Container>
      <SvgWrapper>
        <SvgButton svg={closeSVG} variant="SECONDARY" isRounded="Rounded" />
      </SvgWrapper>

      <Logo src={logo} alt="Logo Role" />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input
          placeholder="Insira seu email"
          variant="SECONDARY"
          type="email"
          {...register("email")}
        />

        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>
        <Input
          placeholder="Insira sua senha"
          variant="SECONDARY"
          type="password"
          {...register("password")}
        />

        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>

        <ButtonsWrapper>
          <Button
            title="Entrar"
            isLoading={false}
            variant="TERTIARY"
            type="submit"
            disabled={isSubmitting}
          />
          <TextButton title="Esqueceu a senha ?" />
        </ButtonsWrapper>
      </Form>
    </Container>
  );
}
