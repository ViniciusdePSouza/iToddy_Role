import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  > textarea {
    width: 100%;
    height: 20rem;

    resize: none;

    background: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.SECONDARY};

    border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_100};

    font-family: "Nunito", sans-serif;

    border-radius: 8px;

    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.SECONDARY};

      font-size: 1.6rem;
    }

    &:focus {
      background: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_100};

      outline: none;
    }
  }
`;
