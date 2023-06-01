import { Check } from "phosphor-react";
import React from "react";
import { SelectItemDiv, SelectItemIndicator, SelectTextItem } from "./styles";

export const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <SelectItemDiv {...props} ref={forwardedRef}>
        <SelectTextItem>{children}</SelectTextItem>
        <SelectItemIndicator>
          <Check size={32} />
        </SelectItemIndicator>
      </SelectItemDiv>
    );
  }
);
