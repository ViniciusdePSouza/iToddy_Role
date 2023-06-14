import { SvgButton } from "../../components/SvgButton";
import {
  AllEventsWrapper,
  Container,
  Header,
  HighlightsCarroussel,
  HighlightsSection,
  InputDateContainer,
  InputWrapper,
  TagContainer,
  TagWrapper,
  Form,
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
  Label,
} from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import listIcon from "../../assets/list.svg";
import searchIcon from "../../assets/search.svg";
import fireIcon from "../../assets/fire.svg";

import Input from "../../components/Input";

import { useContext, useEffect, useState } from "react";

import { EventProps } from "../../@types/event";

import { TagButton } from "../../components/TagButton";
import { EventCard } from "../../components/EventCard";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { TagContext } from "../../Context/TagContext";
import { Section } from "../Home/styles";
import { Button } from "../../components/Button";

export function Search() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);
  const [hotEvents, setHotEvents] = useState<EventProps[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const { activeTags } = useContext(TagContext);

  const navigate = useNavigate();

  async function fetchAllEvents() {
    const response = await api.get(`/events`);

    return response;
  }

  function toggleShow() {
    setShow((state) => (state = !state));
    console.log(show);
  }

  async function fetchAllTags() {
    const response = await api.get("/tags");

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
      const response = await fetchAllTags();
      setAllTags(response.data);
    }

    populateAllTags();
  }, []);

  if (show) {
    return (
      <Container>
        <Header>
          <h1>Filtrar eventos</h1>
          <div>
            <SvgButton svg={closeIcon} onClick={toggleShow} />
          </div>
        </Header>

        <Form>
          <Section>
            <h2>Por tipo</h2>

            <TagContainer>
              {allTags &&
                allTags.map((tag) => <TagButton key={tag} title={tag} />)}
            </TagContainer>
          </Section>
          <Section>
            <h2>Por Data</h2>
            <InputDateContainer>
              <Input type="date" placeholder="Escolha uma data" />
            </InputDateContainer>
          </Section>
          <Section>
            <h2>Por preço</h2>

            <Label>
              <span>Grátis</span>
              <span>+ de R$500,00</span>
            </Label>

            <SliderRoot defaultValue={[0]} max={500} step={1}>
              <SliderTrack>
                <SliderRange />
              </SliderTrack>
              <SliderThumb />
            </SliderRoot>
          </Section>

          <Button title="Aplicar Filtros" isLoading={false} />
        </Form>
      </Container>
    );
  }

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
          <SvgButton svg={listIcon} onClick={toggleShow} />
        </div>

        <Input
          icon={searchIcon}
          placeholder="Buscar eventos"
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputWrapper>

      <TagWrapper>
        {allTags && allTags.map((tag) => <TagButton key={tag} title={tag} />)}
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
        {searchResults.length > 0
          ? searchResults.map((event) => (
              <EventCard
                key={event.id}
                date={event.date}
                img={event.img}
                title={event.title}
                onClick={() => handleSeeEventDetails(Number(event.id))}
              />
            ))
          : allEvents.map((event) => (
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
