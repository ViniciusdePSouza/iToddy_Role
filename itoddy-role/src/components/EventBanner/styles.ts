import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  height: 18rem;

  padding: 1rem 2rem;

  border-radius: 8px;
  position: relative;
`;

export const EventSpecifications = styled.div`
  position: absolute;

  width: 100%;

  padding: 1rem 2rem;

  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: left;

  gap: 0.2rem;

  bottom: 0;
  left: 0;
`;

export const EventDate = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Nunito", sans-serif;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const EventTittle = styled.button`
  all: unset;

  background: transparent;

  font-family: "Nunito", sans-serif;
  font-size: 3.2rem;
  line-height: 3.2rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
