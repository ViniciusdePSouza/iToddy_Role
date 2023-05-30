import {
  Container,
  HomeProducerHeader,
  Logo,
  NavButtonWrapper,
  ProducerNav,
  TabContent,
  TabList,
  TabRoot,
  TabTrigger,
  TabTriggerWrapper,
} from "./styles";

import logo from "../../assets/purpleLogo.svg";
import profileIcon from "../../assets/profile.svg";
import exitIcon from "../../assets/exit.svg";
import searchIcon from "../../assets/search.svg";

import { SvgButton } from "../../components/SvgButton";
import Input from "../../components/Input";
import { EventBanner } from "../../components/EventBanner";

import event1 from "../../assets/Events/Evento1.png";
import event2 from "../../assets/Events/Evento2.png";
import event3 from "../../assets/Events/Evento3.png";

import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { useContext, useEffect, useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { ProducerContext } from "../../Context/ProducerContext";

import { EventProps } from "../../@types/event";

export function ProducerHome() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [futureEvents, setFutureEvents] = useState<EventProps[]>([]);
  const [passedEvents, setPassedEvents] = useState<EventProps[]>([]);

  const { producer } = useContext(ProducerContext);
  const producerId = producer[0].id;

  const navigate = useNavigate();

  const passedEvent = new Date("30 June 2020");
  const futureEvent = new Date("05 August 2026");

  async function fetchAllEvents() {
    const response = await api.get(`events?producer_id=${producerId}`);

    return response;
  }

  function goToDetails() {
    console.log("goToDetails");
  }

  function test() {
    console.log(futureEvents);
    console.log(passedEvents);
  }

  useEffect(() => {
    async function populateAllEvents() {
      const response = await fetchAllEvents();
      setAllEvents(response.data);

      const currentDate = dayjs(new Date());

      const passedEventsArray = response.data.filter(
        (event: {
          date: string | number | Date | dayjs.Dayjs | null | undefined;
        }) => currentDate.isAfter(event.date)
      );
      setPassedEvents(passedEventsArray);

      const futureEventsArray = response.data.filter(
        (event: {
          date: string | number | Date | dayjs.Dayjs | null | undefined;
        }) => currentDate.isBefore(event.date)
      );
      setFutureEvents(futureEventsArray);
    }

    populateAllEvents();
  }, []);

  return (
    <>
      <HomeProducerHeader>
        <Logo src={logo} alt="logo" />
      </HomeProducerHeader>
      <Container>
        <ProducerNav>
          <h1>Meus Eventos</h1>
          <NavButtonWrapper>
            <SvgButton svg={profileIcon} variant="PRIMARY" />
            <SvgButton svg={exitIcon} variant="PRIMARY" />
          </NavButtonWrapper>
        </ProducerNav>
        <Input icon={searchIcon} placeholder="pesquisar meus eventos" />

        <TabRoot defaultValue="tab1">
          <TabList aria-label="Gerencie seus eventos">
            <TabTriggerWrapper>
              <TabTrigger value="tab1">A seguir</TabTrigger>
              <TabTrigger value="tab2">Eventos passados</TabTrigger>
            </TabTriggerWrapper>
            <TabContent value="tab1">
              {futureEvents && futureEvents.length > 0 ? (
                futureEvents.map((event) => (
                  <EventBanner
                    key={event.id}
                    date={event.date}
                    img={event1}
                    title={event.title}
                    onClick={test}
                  />
                ))
              ) : (
                <h1>Não há eventos ainda</h1>
              )}
            </TabContent>

            <TabContent value="tab2">
              {passedEvents && passedEvents.length > 0 ? (
                passedEvents.map((event) => (
                  <EventBanner
                    key={event.id}
                    date={event.date}
                    img={event2}
                    title={event.title}
                    onClick={test}
                  />
                ))
              ) : (
                <h1>Não há eventos ainda</h1>
              )}
            </TabContent>
          </TabList>
        </TabRoot>
      </Container>
    </>
  );
}
