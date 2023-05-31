import { SvgButton } from "../../components/SvgButton";
import {
  Container,
  DateDiv,
  DivDiv,
  Form,
  FormValidatorAdvisor,
  Header,
  Title,
} from "./styles";

import closeIcon from "../../assets/closeIcon.svg";

import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

const editEventSchema = z.object({
  title: z.string().nonempty("O nome do evento é obrigatório"),
  address: z.string().nonempty("O endereço do evento é obrigatório"),
  place: z.string().nonempty("O local do evento é obrigatório"),
  date: z.date(),
  time: z.string().nonempty("O horário do evento é obrigatório"),
  price: z.string().nonempty("O valor do ingresso é obrigatório"),
  about: z.string().nonempty("A descrição do evento é obrigatória"),
});

type EditEventFormData = z.infer<typeof editEventSchema>;

export function EditEvent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditEventFormData>({
    resolver: zodResolver(editEventSchema),
  });

  function handleGoBack() {
    navigate(-1);
  }

  async function handleEditEvent(data: EditEventFormData) {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Editar Evento</Title>

        <div>
          <SvgButton svg={closeIcon} onClick={handleGoBack} />
        </div>
      </Header>

      <Form onSubmit={handleSubmit(handleEditEvent)}>
        <Input placeholder="Nome do Evento" {...register("title")} />
        <FormValidatorAdvisor>
          {errors.title ? errors.title?.message : ""}
        </FormValidatorAdvisor>

        <Input placeholder="Endereço do Evento" {...register("address")} />
        <FormValidatorAdvisor>
          {errors.address ? errors.address?.message : ""}
        </FormValidatorAdvisor>

        <Input placeholder="Local do Evento" {...register("place")} />
        <FormValidatorAdvisor>
          {errors.place ? errors.place?.message : ""}
        </FormValidatorAdvisor>

        <DateDiv>
          <Input placeholder="10/06/2023" type="date" {...register("date")} />
          <FormValidatorAdvisor>
            {errors.date ? errors.date?.message : ""}
          </FormValidatorAdvisor>

          <DivDiv>
            <Input
              placeholder="Horário 20:00"
              type="time"
              {...register("time")}
            />
            <FormValidatorAdvisor>
              {errors.time ? errors.time?.message : ""}
            </FormValidatorAdvisor>
          </DivDiv>
        </DateDiv>

        <Input placeholder="R$ 50,00" {...register("price")} />
        <FormValidatorAdvisor>
          {errors.price ? errors.price?.message : ""}
        </FormValidatorAdvisor>
        <TextArea placeholder="Fale sobre o evento" {...register("about")} />
        <FormValidatorAdvisor>
          {errors.about ? errors.about?.message : ""}
        </FormValidatorAdvisor>

        <Button title="Editar Post" isLoading={isSubmitting} type="submit"/>
      </Form>
    </Container>
  );
}
