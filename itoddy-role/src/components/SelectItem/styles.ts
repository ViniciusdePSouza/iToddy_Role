import * as Select from "@radix-ui/react-select";
import { styled } from "styled-components";

export const SelectItemDiv = styled(Select.Item)`
  color: ${({ theme }) => theme.COLORS.SECONDARY};

  border-radius: 3px;

  display: flex;
  align-items: center;
  height: 25px;

  padding: 0 35px 0 25px;

  position: relative;

  user-select: none;

  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;

  &[data-disabled] {
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const SelectTextItem = styled(Select.ItemText)`
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.6rem;

  color: ${({theme}) => theme.COLORS.SECONDARY}
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;

  left: 0;
  width: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
