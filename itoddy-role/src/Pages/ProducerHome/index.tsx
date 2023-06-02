import {
  AddButton,
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
import addIcon from "../../assets/add.svg";

import { SvgButton } from "../../components/SvgButton";
import Input from "../../components/Input";
import { EventBanner } from "../../components/EventBanner";

import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { EventProps } from "../../@types/event";
import { Button } from "../../components/Button";
import { defaultTheme } from "../../styles/theme/default";
import { Plus } from "phosphor-react";

export function ProducerHome() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [futureEvents, setFutureEvents] = useState<EventProps[]>([]);
  const [passedEvents, setPassedEvents] = useState<EventProps[]>([]);

  const producer = JSON.parse(
    localStorage.getItem("@itoddy-role:producer") || ""
  );
  const producerId = producer.id;

  const navigate = useNavigate();

  async function fetchAllEvents() {
    const response = await api.get(`events?producer_id=${producerId}`);

    return response;
  }

  function goToDetails(id: number) {
    navigate(`/iToddy_Role/details/${id}`);
  }

  function handleNewEvent() {
    navigate("/iToddy_Role/newevent")
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
                    img={event.img}
                    title={event.title}
                    onClick={() => goToDetails(event.id)}
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
                    img={event.img}
                    title={event.title}
                    onClick={() => goToDetails(event.id)}
                  />
                ))
              ) : (
                <h1>Não há eventos ainda</h1>
              )}
            </TabContent>
          </TabList>
        </TabRoot>
        
        <AddButton>
          <Plus size={32} color={defaultTheme.COLORS.WHITE_100} onClick={handleNewEvent}/>
        </AddButton>

      </Container>
    </>
  );
}
