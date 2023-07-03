import { styled } from "styled-components";

import FormSelect from "react-bootstrap/Form";

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

export const Select = styled(FormSelect.Select)`
  height: 5rem;

  width: 90%;

  align-self: center;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};

  border-radius: 8px;

  font-family: "Nunito", sans-serif;
  font-style: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > option {
    font-family: "Nunito", sans-serif;
    font-style: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    &:selected {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }
`;
