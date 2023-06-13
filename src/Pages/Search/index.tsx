import { SvgButton } from "../../components/SvgButton";
import {
  AllEventsWrapper,
  Container,
  Header,
  HighlightsCarroussel,
  HighlightsSection,
  InputWrapper,
  TagWrapper,
} from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import listIcon from "../../assets/list.svg";
import searchIcon from "../../assets/search.svg";
import fireIcon from "../../assets/fire.svg";

import Input from "../../components/Input";

import { useEffect, useState } from "react";

import { EventProps } from "../../@types/event";

import { TagButton } from "../../components/TagButton";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { EventCard } from "../../components/EventCard";

export function Search() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);
  const [hotEvents, setHotEvents] = useState<EventProps[]>([]);
  const [allTags, setAllTags] = useState<string []>([]);

  const navigate = useNavigate();

  async function fetchAllEvents() {
    const response = await api.get(`/events`);

    return response;
  }

  async function fetchAllTags() {
    const response = await api.get('/tags')

    return response;
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
    const filteredHotEvents = allEvents.filter((event) => event.hot === true);

    setHotEvents(filteredHotEvents);
  }, [allEvents, setHotEvents]);

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

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags()
      setAllTags(response.data)
    }

    populateAllTags()

  }, [])

  return (
    <Container>
      <Header>
        <h1>
          Encontre os melhores <br /> rolês da cidade
        </h1>
        <div>
          <SvgButton svg={closeIcon} />
        </div>
      </Header>
      <InputWrapper>
        <div>
          <SvgButton svg={listIcon} />
        </div>

        <Input icon={searchIcon} placeholder="Buscar eventos" />
      </InputWrapper>

      <TagWrapper>
        {
          allTags && (
            allTags.map(tag => (
              <TagButton key={tag} title={tag} />
            ))
          )
        }
      </TagWrapper>

      <HighlightsSection>
        <div>
          <h2>Bombando</h2>
          <img src={fireIcon} alt="" />
        </div>
        <HighlightsCarroussel>
          {hotEvents &&
            hotEvents.map((event) => (
              <EventCard
                key={event.id}
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
              />
            ))}
        </HighlightsCarroussel>
      </HighlightsSection>

      <AllEventsWrapper>
          {allEvents &&
            allEvents.map((event) => (
              <EventCard
              key={event.id}
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
              />
            ))}
        </AllEventsWrapper>
    </Container>
  );
}
