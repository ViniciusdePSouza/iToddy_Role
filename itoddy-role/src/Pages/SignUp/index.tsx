import  Input  from "../../components/Input";
import { SvgButton } from "../../components/SvgButton";
import { Container, Form, FormValidatorAdvisor, Header, Title } from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine(({ confirmPassword, password }) => {
    if (confirmPassword !== password) {
      return false;
    }
    return true;
  }, { message: "A confirmação de senha não bate" });

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  async function handleRegisterProducer(data: RegisterFormData) {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Criar conta como produtor(a)</Title>

        <div>
          <SvgButton svg={closeIcon} />
        </div>
      </Header>

      <Form onSubmit={handleSubmit(handleRegisterProducer)}>
        <Input placeholder="Insira seu nome" {...register("name")} />
        <FormValidatorAdvisor>
          {errors.name ? errors.name?.message : ""}
        </FormValidatorAdvisor>
        <Input
          placeholder="Insira um e-mail"
          type="email"
          {...register("email")}
        />
        <FormValidatorAdvisor>
          {errors.email ? errors.email?.message : ""}
        </FormValidatorAdvisor>
        <Input
          placeholder="Crie sua senha"
          type="password"
          {...register("password")}
        />
        <FormValidatorAdvisor>
          {errors.password ? errors.password?.message : ""}
        </FormValidatorAdvisor>
        <Input
          placeholder="Repita sua senha"
          type="password"
          {...register("confirmPassword")}
        />
        <FormValidatorAdvisor>
          {errors.confirmPassword ? errors.confirmPassword?.message : ""}
        </FormValidatorAdvisor>
        <Button title="Criar conta" isLoading={isSubmitting} type="submit" />
      </Form>
    </Container>
  );
}
