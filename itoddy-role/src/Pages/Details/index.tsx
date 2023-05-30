import { SvgButton } from "../../components/SvgButton";
import {
  AboutParagraph,
  AboutSection,
  Address,
  AddressDiv,
  AddressInfo,
  ButtonWrapper,
  Container,
  Content,
  EventDate,
  EventInfoWrapper,
  EventTittle,
  Place,
  ProducerName,
  ProducerSection,
  TicketDiv,
  TitleSection,
} from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import editIcon from "../../assets/edit.svg";
import pin from "../../assets/pin.png";
import ticket from "../../assets/ticket.svg";

import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function Details() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <img src="https://picsum.photos/500/200" alt="" />
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
          <div>
            <SvgButton svg={editIcon} variant="SECONDARY" isRounded="Rounded" />
          </div>
        </ButtonWrapper>

        <EventInfoWrapper>
          <EventDate>Sexta-feira, 10 de junho - 20h00</EventDate>
          <EventTittle>Arraial Quente Pelano</EventTittle>
        </EventInfoWrapper>

        <AddressDiv>
          <img src={pin} alt="pin" />
          <AddressInfo>
            <Place>Aeroporto Carlos Prates</Place>
            <Address>
              R. Ocidente, 100 - Padre Eustáquio, Belo Horizonte
            </Address>
          </AddressInfo>
        </AddressDiv>

        <AboutSection>
          <TitleSection>Sobre</TitleSection>
          <AboutParagraph>
            Para te aquecer nesse inverno, preparamos uma festa junina à lá
            Quente Pelano, no Aeroporto Carlos Prates!
          </AboutParagraph>
          <AboutParagraph>
            É claro que uma festa junina da QP não seria uma festa junina
            convencional, né? Para acompanhar os tradicionais costumes da festa
            de São João, preparamos intervenções artísticas de tirar o fôlego,
            cenografia inédita, flash tattoo, feirinha mix com marcas e artistas
            locais além, é claro, de uma curadoria musical pensada para
            esquentar o clima da noite!
          </AboutParagraph>
        </AboutSection>

        <ProducerSection>
          <TitleSection>Produzido por</TitleSection>
          <ProducerName>Quente Pelano</ProducerName>
        </ProducerSection>

        <TicketDiv>
          <div>
            <Button title="Ingressos" picture={ticket} isLoading={false} />
          </div>
        </TicketDiv>
      </Content>
    </Container>
  );
}
