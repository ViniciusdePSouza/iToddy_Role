import { styled } from "styled-components";

export const Container = styled.button`
  all: unset;

  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.8rem;

  padding: 8px;

  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_100};

  border-radius: 8px;

  cursor: pointer;

  > img {
    width: 50px;
    height: 50px;

    border-radius: 8px;
  }
`;

export const InfoEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  text-align: left;

  > h1 {
    font-family: "Nunito", sans-serif;
    font-style: 600;
    font-size: 1.6rem;
    line-height: 2rem;

    color: #000000;
  }

  > span {
    font-family: "Nunito", sans-serif;
    font-style: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
