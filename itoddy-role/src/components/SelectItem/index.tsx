import { Check } from "phosphor-react";
import React, { forwardRef, Ref } from "react";
import { SelectItemDiv, SelectItemIndicator, SelectTextItem } from "./styles";

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItem({ children, ...props }, ref: Ref<HTMLDivElement>) {
    return (
      <SelectItemDiv {...props} ref={ref}>
        <SelectTextItem>{children}</SelectTextItem>
        <SelectItemIndicator>
          <Check size={32} />
        </SelectItemIndicator>
      </SelectItemDiv>
    );
  }
);
