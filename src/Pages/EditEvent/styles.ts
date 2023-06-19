import { styled } from "styled-components";
import * as Select from "@radix-ui/react-select";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  gap: 3rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

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

export const SelectRoot = styled(Select.Root)`
  margin: 8px;
`;

export const SelectTrigger = styled(Select.Trigger)`
  width: 65%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.COLORS.SECONDARY};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
`;

export const SelectValue = styled(Select.Value)`
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;
`;

export const SelectIcon = styled(Select.Icon)``;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectScrollUpButton = styled(Select.ScrollUpButton)``;

export const SelectViewport = styled(Select.Viewport)`
  padding: 8px;
`;

export const SelectGroup = styled(Select.Group)``;

export const SelectPortal = styled(Select.Portal)``;

export const SelectItem = styled(Select.Item)``;
export const SelectItemIndicator = styled(Select.ItemIndicator)``;
export const SelectItemText = styled(Select.ItemText)``;
