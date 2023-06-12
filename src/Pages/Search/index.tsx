import { SvgButton } from "../../components/SvgButton";
import { Container, Header, HighlightsCarroussel, HighlightsSection, InputWrapper, TagWrapper } from "./styles";

import closeIcon from "../../assets/closeIcon.svg";
import listIcon from "../../assets/list.svg";
import searchIcon from "../../assets/search.svg";
import fireIcon from '../../assets/fire.svg'

import Input from "../../components/Input";

import { useState } from "react";

import { EventProps } from "../../@types/event";
import { TagButton } from "../../components/TagButton";

export function Search() {
  const [allEvents, setAllEvents] = useState<EventProps[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<EventProps[]>([]);

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
        <TagButton title={"Festivais"} variant={"NOTACTIVE"} /> 
        <TagButton title={"Festivais"} variant={"NOTACTIVE"} /> 
        <TagButton title={"Festivais"} variant={"NOTACTIVE"} /> 
        <TagButton title={"Festivais"} variant={"NOTACTIVE"} /> 
      </TagWrapper>

      <HighlightsSection>
        <img src={fireIcon} alt="" />
        <HighlightsCarroussel>
            
        </HighlightsCarroussel> 

      </HighlightsSection>
    </Container>
  );
}
