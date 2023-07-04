import { SvgButton } from "../../components/SvgButton";
import {
  Container,
  DateDiv,
  Form,
  FormValidatorAdvisor,
  Header,
  InputHourDimensions,
  Select,
  Title,
} from "./styles";

import dayjs from "dayjs";

import closeIcon from "../../assets/closeIcon.svg";

import { useNavigate, useParams } from "react-router-dom";

import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { Button } from "../../components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { ChangeEvent, useEffect, useState } from "react";

import { EventProps } from "../../@types/event";

import { api } from "../../services/api";

const editEventSchema = z.object({
  title: z.string().nonempty("O nome do evento é obrigatório"),
  address: z.string().nonempty("O endereço do evento é obrigatório"),
  place: z.string().nonempty("O local do evento é obrigatório"),
  time: z.string().nonempty("O horário do evento é obrigatório"),
  price: z.string().nonempty("O valor do ingresso é obrigatório"),
  about: z.string().nonempty("A descrição do evento é obrigatória"),
  date: z
    .string()
    .nonempty("A data do evento é obrigatória")
    .refine((value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }, "A data do evento é inválida")
    .transform((value) => new Date(value)),
});

type EditEventFormData = z.infer<typeof editEventSchema>;

export function EditEvent() {
  
  const navigate = useNavigate();
  const params = useParams();
  
  const [data, setData] = useState<EventProps>({} as EventProps);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [eventTag, setEventTag] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<EditEventFormData>({
    defaultValues: {
      about: data.about,
      place: data.place,
      price: data.price,
      title: data.title,
      address: data.address,
    },
    resolver: zodResolver(editEventSchema),
  });

  async function fetchAllTags() {
    const response = await api.get("/tags");

    return response;
  }

  function handleGoBack() {
    navigate(-1);
  }

  async function handleEditEvent({
    about,
    date,
    address,
    place,
    price,
    time,
    title,
  }: EditEventFormData) {
    const dateString = dayjs(date).format("ddd MMM DD YYYY");

    const dateDB = new Date(`${dateString} ${time}`);

    const eventUpdated: EventProps = {
      id: data.id,
      producer_id: data.producer_id,
      availableOn: data.availableOn,
      about,
      date: dateDB,
      address,
      place,
      price,
      title,
      tag: eventTag, 
      img: "https://picsum.photos/350/180",
      link: data.link,
      hot:data.hot
    };

    try {
      await api.put(`events/${data.id}`, eventUpdated);

      alert("Evento atualizado com sucesso");

      navigate(`/iToddy_Role/details/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags();
      setAllTags(response.data);
    }

    populateAllTags();
  }, [])

  useEffect(() => {
    async function fetchEventDetails() {
      const response = await api.get(`/events?id=${params.id}`);
      const eventDetails = response.data[0];
      setData(eventDetails);
    }

    fetchEventDetails();
  }, []);

  useEffect(() => {
    if (data) {
      setValue("about", data.about);
      setValue("place", data.place);
      setValue("price", data.price);
      setValue("title", data.title);
      setValue("address", data.address);
      setEventTag(data.tag)
    }
  }, [data, setValue]);

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

        <Input placeholder="R$ 50,00" {...register("price")} />
        <FormValidatorAdvisor>
          {errors.price ? errors.price?.message : ""}
        </FormValidatorAdvisor>

        <Select aria-label="Tag do evento" onChange={(e: ChangeEvent<HTMLInputElement>) => setEventTag(e.target.value)}>
          <option value={eventTag}>{eventTag}</option>
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

        <Button title="Editar Post" isLoading={isSubmitting} type="submit" />
      </Form>
    </Container>
  );
}
