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

export function ProducerHome() {
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
              <EventBanner
                day="Sexta-feira, 10 de junho"
                hour="20:00"
                img={event1}
                title="Arraial Quente Pelano"
              />
            </TabContent>

            <TabContent value="tab2">
              <EventBanner
                day="Sexta-feira, 20 de maio"
                hour="20:00"
                img={event2}
                title="QP no Catavento"
              />
              <EventBanner
                day="Sábado, 23 de abril"
                hour="20:00"
                img={event3}
                title="Quente Pelano Sunset"
              />
            </TabContent>
          </TabList>
        </TabRoot>
      </Container>
    </>
  );
}
