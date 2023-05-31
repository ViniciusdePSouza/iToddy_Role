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
import { useContext } from "react";
import { ProducerContext } from "../../Context/ProducerContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { saveCurrentProducerInContext } = useContext(ProducerContext);

  function handleGoBack() {
    navigate(-1);
  }

  async function handleLogin({ email, password }: LoginFormData) {
    const { data } = await api.get(
      `/users?email=${email}&password=${password}`
    );

    const doesProducerExists = data;

    if (doesProducerExists.length > 0) {
      const producer = doesProducerExists[0]
      localStorage.setItem('@itoddy-role:producer', JSON.stringify(producer))

      saveCurrentProducerInContext(producer);

      navigate("/iToddy_Role/home-producer");
    } else {
      alert("Senha ou usuário incorreto, tente novamente");
    }

    return;
  }

  return (
    <Container>
      <SvgWrapper>
        <SvgButton
          svg={closeSVG}
          variant="SECONDARY"
          isRounded="Rounded"
          onClick={handleGoBack}
        />
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
