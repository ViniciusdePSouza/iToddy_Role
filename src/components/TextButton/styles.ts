import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;

  all: unset;
  font-size: 14px;
  line-height: 16px;

  margin-top: .8rem;

  color: ${({theme}) => theme.COLORS.WHITE}
`;
