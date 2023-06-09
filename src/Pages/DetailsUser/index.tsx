import { SvgButton } from "../../components/SvgButton";
import {
  AboutParagraph,
  AboutSection,
  Address,
  AddressDiv,
  AddressInfo,
  ButtonWrapper,
  BuyTicketDiv,
  CloseButton,
  Container,
  Content,
  EventDate,
  EventInfoWrapper,
  EventTittle,
  Modal,
  Place,
  ProducerName,
  ProducerSection,
  TicketDiv,
  TicketInfoDiv,
  TitleSection,
  Warning,
} from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import pin from "../../assets/pin.png";
import ticket from "../../assets/ticket.svg";
import evenTim from "../../assets/eventim.svg";

import { Button } from "../../components/Button";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { EventProps } from "../../@types/event";

import dayjs from "dayjs";

export function DetailsUser() {
  const navigate = useNavigate();
  const [data, setData] = useState<EventProps>({} as EventProps);
  const [showModal, setShowModal] = useState(false);
  const [producerName, setProducerName] = useState('');

  const params = useParams();

  function handleGoBack() {
    navigate(-1);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  const dateFormatted = dayjs(data.date)
    .locale("pt-br")
    .format(`dddd, DD [de] MMMM - hh:mm`);

  useEffect(() => {
    async function fetchEventDetails() {
      const response = await api.get(`/events?id=${params.id}`);
      const eventDetails = response.data[0];
      setData(eventDetails);
    }

    fetchEventDetails();
  }, []);

  useEffect(() => {
    async function fetchEventProducer(){
      const response = await api.get(`/user?=id=${data.producer_id}`)
      const producerDetails = response.data[0]
      setProducerName(producerDetails.name)
    }

    fetchEventProducer()
  }, [])

  return (
    <Container>
      <img src={data.img} alt="" />
      <Content>
        <ButtonWrapper>
          <div>
            <SvgButton
              svg={closeIcon}
              variant="PRIMARY"
              isRounded="Rounded"
              onClick={handleGoBack}
            />
          </div>
        </ButtonWrapper>

        <EventInfoWrapper>
          <EventDate>{dateFormatted}</EventDate>
          <EventTittle>{data.title}</EventTittle>
        </EventInfoWrapper>

        <AddressDiv>
          <img src={pin} alt="pin" />
          <AddressInfo>
            <Place>{data.place}</Place>
            <Address>{data.address}</Address>
          </AddressInfo>
        </AddressDiv>

        <AboutSection>
          <TitleSection>Sobre</TitleSection>
          <AboutParagraph>{data.about}</AboutParagraph>
        </AboutSection>

        <ProducerSection>
          <TitleSection>Produzido por</TitleSection>
          <ProducerName>{producerName ? producerName : ''}</ProducerName>
        </ProducerSection>

        <TicketDiv>
          <div>
            <Button title="Ingressos" picture={ticket} isLoading={false} onClick={toggleModal}/>
          </div>
        </TicketDiv>

        {showModal && (
          <Modal>
            <CloseButton onClick={toggleModal} />
            <BuyTicketDiv>
              <img src={evenTim} alt="Logo da empresa que vende o ingresso" />
              <TicketInfoDiv>
                <h2>Disponível em {data.availableOn}</h2>
                <span>A partir de {data.price}</span>
              </TicketInfoDiv>

              <div>
                <Link to={data.link}>
                <Button title={"Comprar"} isLoading={false}/>
                </Link>
              </div>
            </BuyTicketDiv>

            <Warning>
              Ao clicar no botão você abrirá uma página externa a esse site.
            </Warning>
          </Modal>
        )}
      </Content>
    </Container>
  );
}
