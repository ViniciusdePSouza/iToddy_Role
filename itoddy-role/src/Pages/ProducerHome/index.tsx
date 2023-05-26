import {
  Container,
  HomeProducerHeader,
  Logo,
  NavButtonWrapper,
  ProducerNav,
  TabList,
  TabRoot,
  TabTrigger,
} from "./styles";

import logo from "../../assets/purpleLogo.svg";
import profileIcon from "../../assets/profile.svg";
import exitIcon from "../../assets/exit.svg";
import searchIcon from "../../assets/search.svg";

import { SvgButton } from "../../components/SvgButton";
import Input from "../../components/Input";

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
            <TabTrigger value="tab1">
                A seguir
            </TabTrigger>
            <TabTrigger value="tab2">
                Eventos passados
            </TabTrigger>
          </TabList>
        </TabRoot>
      </Container>
    </>
  );
}
