import { styled } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;


  position: relative;
`;
export const Logo = styled.img`
  margin: 1rem;
`;

export const ProducerNav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.6rem;

  > h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1.6rem;
`;

export const TabRoot = styled(Tabs.Root)`
  margin-top: 1.2rem;
`;

export const TabList = styled(Tabs.List)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  gap: 2.4rem;
`;

export const TabTriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 2.4rem;
`;

export const TabTrigger = styled(Tabs.Trigger)`
  all: unset;

  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.SECONDARY};

  &[data-state="active"] {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
    color: ${({ theme }) => theme.COLORS.PURPLE_400};
  }
`;

export const TabContent = styled(Tabs.Content)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row
  }
`;

export const HomeProducerHeader = styled.header`
  width: 100%;

  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 4px 5px 0px rgba(181, 177, 181, 1);
  -moz-box-shadow: 0px 4px 5px 0px rgba(181, 177, 181, 1);
  box-shadow: 0px 4px 5px 0px rgba(217, 208, 217, 1);
`;

export const AddButton = styled.button`
  all:unset;

  width: 6rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  position: absolute;

  background: linear-gradient(15deg, #9D6DE7 0%, ${({ theme }) => theme.COLORS.PURPLE_400} 57.92%, #1E0D3F 100%);

  bottom: 10%;
  right: 5%;
`
