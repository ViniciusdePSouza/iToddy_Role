import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;
`;

export const InputWrapper = styled.div`
width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-family: "Nunito", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;

    margin-top: 8px;
  }
`;

export const ButtonWrapper = styled.button`
  all: unset;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};

  background-color: transparent;

  margin-bottom: 56px;
  margin-right: 12px;
`;

export const Tag = styled.div`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 12px 16px;

  color: ${({ theme }) => theme.COLORS.SECONDARY};

  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
  border-radius: 8px;

  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;

  margin-bottom: 24px;
  margin-right: 12px;
`;
