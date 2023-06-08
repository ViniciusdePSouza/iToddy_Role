import {
  AddButton,
  Container,
  HomeProducerHeader,
  Logo,
  NavButtonWrapper,
  NoEventAddButton,
  NoEventsComponent,
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

import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { useContext, useEffect, useState } from "react";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { EventProps } from "../../@types/event";
import { defaultTheme } from "../../styles/theme/default";
import { Plus } from "phosphor-react";
import { ProducerContext } from "../../Context/ProducerContext";
import { ProducerType } from "../../@types/producer";

export function ProducerHome() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [futureEvents, setFutureEvents] = useState<EventProps[]>([]);
  const [passedEvents, setPassedEvents] = useState<EventProps[]>([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);

  const producer = JSON.parse(
    localStorage.getItem("@itoddy-role:producer") || ""
  );
  const producerId = producer.id;

  const navigate = useNavigate();

  const { saveCurrentProducerInContext } = useContext(ProducerContext);

  async function fetchAllEvents() {
    const response = await api.get(`events?producer_id=${producerId}`);

    return response;
  }

  function handleLogOut() {
    localStorage.removeItem("@itoddy-role:producer");
    saveCurrentProducerInContext({} as ProducerType);

    navigate("/iToddy_Role");
  }
  function goToDetails(id: number) {
    navigate(`/iToddy_Role/details/${id}`);
  }

  function handleGoToHome() {
    navigate(`/iToddy_Role`);
  }

  function handleNewEvent() {
    navigate("/iToddy_Role/newevent");
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

  useEffect(() => {
    if(search.trim() === '') {
      setSearchResults([])
      return
    }

    const filteredEventsByName = allEvents.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredEventsByName);
  }, [search, allEvents]);

  return (
    <>
      <HomeProducerHeader>
        <Logo src={logo} alt="logo" />
      </HomeProducerHeader>
      <Container>
        <ProducerNav>
          <h1>Meus Eventos</h1>
          <NavButtonWrapper>
            <SvgButton svg={profileIcon} variant="PRIMARY" onClick={handleGoToHome}/>
            <SvgButton
              svg={exitIcon}
              variant="PRIMARY"
              onClick={handleLogOut}
            />
          </NavButtonWrapper>
        </ProducerNav>
        <Input
          icon={searchIcon}
          placeholder="pesquisar meus eventos"
          onChange={(e) => setSearch(e.target.value)}
        />

        {searchResults.length > 0 &&
          searchResults.map((event) => (
            <EventBanner
              key={event.id}
              date={event.date}
              img={event.img}
              title={event.title}
              onClick={() => goToDetails(Number(event.id))}
            />
          ))}
        {allEvents && allEvents.length > 0 ? (
          <TabRoot defaultValue="tab1">
            <TabList aria-label="Gerencie seus eventos">
              <TabTriggerWrapper>
                <TabTrigger value="tab1">A seguir</TabTrigger>
                <TabTrigger value="tab2">Eventos passados</TabTrigger>
              </TabTriggerWrapper>
              <TabContent value="tab1">
                {futureEvents.length > 0 &&
                  futureEvents.map((event) => (
                    <EventBanner
                      key={event.id}
                      date={event.date}
                      img={event.img}
                      title={event.title}
                      onClick={() => goToDetails(Number(event.id))}
                    />
                  ))}
              </TabContent>

              <TabContent value="tab2">
                {passedEvents.length > 0 &&
                  passedEvents.map((event) => (
                    <EventBanner
                      key={event.id}
                      date={event.date}
                      img={event.img}
                      title={event.title}
                      onClick={() => goToDetails(Number(event.id))}
                    />
                  ))}
              </TabContent>
            </TabList>
          </TabRoot>
        ) : (
          <NoEventsComponent>
            <h1>Seja bem vindo(a), {producer.id}</h1>
            <p>
              Toque no botão abaixo e crie o seu primeiro evento incrível com a
              gente!
            </p>
            <NoEventAddButton>
              <Plus
                size={32}
                color={defaultTheme.COLORS.WHITE_100}
                onClick={handleNewEvent}
              />
            </NoEventAddButton>
          </NoEventsComponent>
        )}

        {allEvents.length > 0 && (
          <AddButton>
            <Plus
              size={32}
              color={defaultTheme.COLORS.WHITE_100}
              onClick={handleNewEvent}
            />
          </AddButton>
        )}
      </Container>
    </>
  );
}
