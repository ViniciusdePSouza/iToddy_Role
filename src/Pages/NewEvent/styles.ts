import { styled } from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import * as Select from "@radix-ui/react-select";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  gap: 3rem;

  margin-bottom: 50px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 20%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.SECONDARY};

  font-family: "Nunito", sans-serif;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormValidatorAdvisor = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};

  font-weight: 600;
  font-size: 1.2rem;
`;

export const DateDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.6rem;
`;

export const InputHourDimensions = styled.div`
  width: 40%;

  display: flex;
  align-items: center;
`;

export const TicketPriceDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: left;
  justify-content: space-between;

  gap: 1rem;

  text-align: left;

  > label {
    font-family: "Nunito", sans-serif;
    font-style: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const InputTicketPrice = styled.div`
  width: 100%;

  display: flex;
  align-items: left;
  justify-content: space-between;

  gap: 2rem;
  > span {
    margin-right: 80px;
    font-family: "Nunito", sans-serif;
    font-style: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const SwitchRoot = styled(Switch.Root)`
  width: 60px;
  height: 25px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px ${({ theme }) => theme.COLORS.SECONDARY};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px ${({ theme }) => theme.COLORS.SECONDARY};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(36px);
  }
`;
