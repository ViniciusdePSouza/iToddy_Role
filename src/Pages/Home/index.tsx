import { SvgButton } from "../../components/SvgButton";
import {
  Container,
  DateDiv,
  HighlighEventsDiv,
  HomeHeader,
  HomeNav,
  Logo,
  ProducerLinkDiv,
  SearchDiv,
  Section,
} from "./styles";

import logo from "../../assets/purpleLogo.svg";
import profileIcon from "../../assets/profile.svg";
import searchIcon from "../../assets/search.svg";

import Input from "../../components/Input";

import { useEffect, useState } from "react";

import { EventProps } from "../../@types/event";

import dayjs from "dayjs";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { EventBanner } from "../../components/EventBanner";
import { EventCard } from "../../components/EventCard";

export function Home() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);

  const eventTst = allEvents[0];

  const navigate = useNavigate();

  async function fetchAllEvents() {
    const response = await api.get(`/events`);

    return response;
  }

  function handleGoToProducerSignIn() {
    navigate("/iToddy_Role/signIn");
  }

  function handleSeeEventDetails(id: number) {
    navigate(`/iToddy_Role/details/${id}`);
  }

  useEffect(() => {
    async function populateAllEvents() {
      const response = await fetchAllEvents();
      setAllEvents(response.data);
    }

    populateAllEvents();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredEventsByName = allEvents.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredEventsByName);
  }, [search, allEvents]);

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
            <h2>Sou Produtor(a)</h2>
          </ProducerLinkDiv>
        </HomeNav>

        <Input
          icon={searchIcon}
          placeholder="pesquisar meus eventos"
          onChange={(e) => setSearch(e.target.value)}
        />

        <SearchDiv>
          {searchResults.length > 0 &&
            searchResults.map((event) => (
              <EventCard
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
              />
            ))}
        </SearchDiv>

        <Section>
          <h1>Eventos em Destaque</h1>
          <HighlighEventsDiv>
            {eventTst && (
              <>
                <EventBanner
                  date={eventTst.date}
                  img={eventTst.img}
                  title={eventTst.title}
                />
                <EventBanner
                  date={eventTst.date}
                  img={eventTst.img}
                  title={eventTst.title}
                />
                <EventBanner
                  date={eventTst.date}
                  img={eventTst.img}
                  title={eventTst.title}
                />
                <EventBanner
                  date={eventTst.date}
                  img={eventTst.img}
                  title={eventTst.title}
                />
                <EventBanner
                  date={eventTst.date}
                  img={eventTst.img}
                  title={eventTst.title}
                />
              </>
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
              />
            ))}
        </Section>
      </Container>
    </>
  );
}
