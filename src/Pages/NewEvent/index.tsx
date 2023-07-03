import { SvgButton } from "../../components/SvgButton";

import { ChangeEvent, useEffect } from 'react';

import closeIcon from "../../assets/closeIcon.svg";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import TextArea from "../../components/TextArea";

import {  useState } from "react";

import { api } from "../../services/api";

import {
  Container,
  FormValidatorAdvisor,
  Header,
  Title,
  Form,
  InputHourDimensions,
  DateDiv,
  TicketPriceDiv,
  SwitchThumb,
  SwitchRoot,
  InputTicketPrice,
  Select,
} from "./styles";

import dayjs from "dayjs";
import { EventProps } from "../../@types/event";

const newEventSchema = z.object({
  title: z.string().nonempty("O nome do evento é obrigatório"),
  address: z.string().nonempty("O endereço do evento é obrigatório"),
  place: z.string().nonempty("O local do evento é obrigatório"),
  time: z.string().nonempty("O horário do evento é obrigatório"),
  price: z.string(),
  about: z.string().nonempty("A descrição do evento é obrigatória"),
  date: z
    .string()
    .nonempty("A data do evento é obrigatória")
    .refine((value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }, "A data do evento é inválida")
    .transform((value) => new Date(value)),
  link: z
    .string()
    .nonempty("O link do evento é obrigatório")
    .url("Link inválido"),
});

type NewEventFormData = z.infer<typeof newEventSchema>;

export function NewEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewEventFormData>({
    resolver: zodResolver(newEventSchema),
  });

  const [isFreeEvent, setIsFreeEvent] = useState(false);

  const [eventTag, setEventTag] = useState('')
  const [allTags, setAllTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const producer = JSON.parse(
    localStorage.getItem("@itoddy-role:producer") || ""
  );

  function handleGoBack() {
    navigate(-1);
  }

  async function fetchAllTags() {
    const response = await api.get("/tags");

    return response;
  }

  async function handleNewEvent({
    about,
    address,
    date,
    link,
    place,
    price,
    time,
    title,
  }: NewEventFormData) {
    const dateString = dayjs(date).format("ddd MMM DD YYYY");

    const dateDB = new Date(`${dateString} ${time}`);

    let priceDB = price;

    if (priceDB === "") {
      priceDB = "00,00";
    }

    const newEvent: EventProps = {
      producer_id: producer.id,
      availableOn: "eventim",
      about,
      date: dateDB,
      address,
      place,
      price: priceDB,
      title,
      tag: String(eventTag),
      img: "https://picsum.photos/350/180",
      link,
      hot: false,
    };

    try {
      await api.post("/events", newEvent);

      alert("Parabéns! Seu evento foi criado com sucesso");

      navigate("/iToddy_Role/home-producer");
    } catch (err) {
      console.log(err);
    }
  }

  const handleSwitchChange = () => {
    setIsFreeEvent((prevIsFreeEvent) => !prevIsFreeEvent);
  };

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags();
      setAllTags(response.data);
    }

    populateAllTags();
  }, [])

  return (
    <Container>
      <Header>
        <Title>Editar Evento</Title>

        <div>
          <SvgButton svg={closeIcon} onClick={handleGoBack} />
        </div>
      </Header>

      <Form onSubmit={handleSubmit(handleNewEvent)}>
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

          <InputHourDimensions>
            <Input
              placeholder="Horário 20:00"
              type="time"
              {...register("time")}
            />
            <FormValidatorAdvisor>
              {errors.time ? errors.time?.message : ""}
            </FormValidatorAdvisor>
          </InputHourDimensions>
        </DateDiv>

        <Select aria-label="Default select example" onChange={(e: ChangeEvent<HTMLInputElement>) => setEventTag(e.target.value)}>
          <option>Selecione uma tag para o seu evento</option>
          {
           allTags.length > 0 ? allTags.map(tag => (
              <option value={tag}>{tag}</option>
            )) : ''
          }
        </Select>

        <TextArea placeholder="Fale sobre o evento" {...register("about")} />
        <FormValidatorAdvisor>
          {errors.about ? errors.about?.message : ""}
        </FormValidatorAdvisor>

        <TicketPriceDiv>
          <label htmlFor="ticket-price">
            {isFreeEvent ? "Evento Gratuito!!" : "Evento Pago"}
          </label>
          <SwitchRoot id="ticket-price" onCheckedChange={handleSwitchChange}>
            <SwitchThumb />
          </SwitchRoot>
        </TicketPriceDiv>

        <InputTicketPrice>
          <span>
            {isFreeEvent ? "Evento Gratuito!!" : "Ingressos a Partir de..."}
          </span>

          <Input
            placeholder={isFreeEvent ? "Evento Gratuito!! " : "R$ 50,00"}
            {...register("price")}
            disabled={isFreeEvent}
            type="number"
          />
        </InputTicketPrice>

        <Input
          placeholder="Insira o link para a compra"
          {...register("link")}
        />
        <FormValidatorAdvisor>
          {errors.link ? errors.link?.message : ""}
        </FormValidatorAdvisor>
        <Button title="Criar Evento" isLoading={isSubmitting} type="submit" />
      </Form>
    </Container>
  );
}
