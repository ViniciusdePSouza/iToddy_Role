import { SvgButton } from "../../components/SvgButton";
import {
  Container,
  DateDiv,
  HighlighEventsDiv,
  HomeHeader,
  HomeNav,
  Logo,
  ProducerLinkDiv,
  SeachRedirector,
  Section,
} from "./styles";

import logo from "../../assets/purpleLogo.svg";
import profileIcon from "../../assets/profile.svg";


import { useEffect, useState } from "react";

import { EventProps } from "../../@types/event";

import dayjs from "dayjs";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { EventBanner } from "../../components/EventBanner";
import { EventCard } from "../../components/EventCard";
import { MagnifyingGlass } from "phosphor-react";
import { defaultTheme } from "../../styles/theme/default";

import { ProducerType } from "../../@types/producer";

export function Home() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [hotEvents, setHotEvents] = useState<EventProps[]>([]);
  const [producerInStorage, setProducerInStorage] = useState<ProducerType>({} as ProducerType)

  const navigate = useNavigate();

  async function fetchAllEvents() {
    const response = await api.get(`/events`);

    return response;
  }

  function handleGoToSearch(){
    navigate('/iToddy_Role/search')
  }

  function handleGoToProducerSignIn() {
    if(producerInStorage?.id){
     return navigate("/iToddy_Role/home-producer");
    }
    navigate("/iToddy_Role/signIn");
  }

  function handleSeeEventDetails(id: number) {
    navigate(`/iToddy_Role/detailsuser/${id}`);
  }

  useEffect(() => {
    async function populateAllEvents() {
      const response = await fetchAllEvents();
      setAllEvents(response.data);
    }

    populateAllEvents();
  }, []);

  useEffect(() => {
    const filteredHotEvents = allEvents.filter((event) => event.hot === true)

    setHotEvents(filteredHotEvents)
  }, [allEvents, setHotEvents])

  useEffect(() => {
    const producer = JSON.parse(
      localStorage.getItem("@itoddy-role:producer") || "{}"
    );

    setProducerInStorage(producer)
  }, [])
  
  return (
    <>
      <HomeHeader>
        <Logo src={logo} alt="logo" />
      </HomeHeader>
      <Container>
        <HomeNav>
          <DateDiv>
            <span>{dayjs(new Date()).locale("pt-br").format(`dddd`)}</span>
            <h1>{dayjs(new Date()).locale("pt-br").format(`DD [de] MMMM`)}</h1>
          </DateDiv>
          <ProducerLinkDiv>
            <SvgButton
              svg={profileIcon}
              variant="PRIMARY"
              onClick={handleGoToProducerSignIn}
            />
           <h2>{producerInStorage?.id ? producerInStorage.name : 'Sou Produtor(a)'}</h2>
          </ProducerLinkDiv>
        </HomeNav>

        <SeachRedirector onClick={handleGoToSearch}>
          <MagnifyingGlass size={32} color={defaultTheme.COLORS.PRIMARY}/>
          Encontre os melhores rolês da cidade
        </SeachRedirector>

        <Section>
          <h1>Eventos em Destaque</h1>
          <HighlighEventsDiv>
            {hotEvents && (
              hotEvents.map((event) => (
                <EventBanner
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
              />
              ))
            )}
          </HighlighEventsDiv>
        </Section>

        <Section>
          <h1>Eventos em Destaque</h1>
          {allEvents &&
            allEvents.map((event) => (
              <EventCard
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
                key={event.id}
              />
            ))}
        </Section>
      </Container>
    </>
  );
}
