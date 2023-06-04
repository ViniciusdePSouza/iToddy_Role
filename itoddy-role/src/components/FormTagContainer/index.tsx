import Input from "../Input";

import { ButtonWrapper, Container, InputWrapper, Tag } from "./styles";

import { defaultTheme } from "../../styles/theme/default";

import { Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { TagContext } from "../../Context/TagContext";

interface FormTagContainerProps {
  tagTitle: string;
}

export function FormTagContainer({ tagTitle }: FormTagContainerProps) {
  const [tagComponent, setTagComponent] = useState(tagTitle);
  
  const {tag, saveCurrentTagInContext} = useContext(TagContext)

  function addTag(tag: string) {
    const tagLowerCase = tag.toLowerCase();
    if (
      tagLowerCase === "shows" ||
      tagLowerCase === "exposição" ||
      tagLowerCase === "festa" ||
      tagLowerCase === "esporte" ||
      tagLowerCase === "culinária" ||
      tagLowerCase === "cultura"
    ) {
      return setTagComponent(tag);
    } else {
      return alert("Porfavor insira uma tag conforme o modelo informado");
    }
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder="Digite a tag"
          onChange={(e) => saveCurrentTagInContext(e.target.value)}
        />
        <span>
          As opçoes de tag são: Shows, Exibições, Festa, Esporte, Feiras e
          Cultura
        </span>
      </InputWrapper>
      <ButtonWrapper onClick={() => addTag(String(tag))} type="button">
        <Plus size={45} color={defaultTheme.COLORS.SECONDARY} />
      </ButtonWrapper>

      {tagComponent ? <Tag>{tagComponent}</Tag> : <Tag>{tagTitle}</Tag>}
    </Container>
  );
}
