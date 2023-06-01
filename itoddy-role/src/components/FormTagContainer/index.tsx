import Input from "../Input";

import { ButtonWrapper, Container, InputWrapper, Tag } from "./styles";

import { defaultTheme } from "../../styles/theme/default";

import { Plus } from "phosphor-react";
import { useState } from "react";

interface FormTagContainerProps {
  tagTitle: string;
}

export function FormTagContainer({ tagTitle }: FormTagContainerProps) {
  const [tag, setTag] = useState(tagTitle);
  const [inputTag, setInputTag] = useState<string>("");

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
      return setTag(tag);
    } else {
      return alert("Porfavor insira uma tag conforme o modelo informado");
    }
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder="Digite a tag"
          onChange={(e) => setInputTag(e.target.value)}
        />
        <span>
          As opçoes de tag são: Shows, Exibições, Festa, Esporte, Feiras e
          Cultura
        </span>
      </InputWrapper>
      <ButtonWrapper onClick={() => addTag(inputTag)} type="button">
        <Plus size={45} color={defaultTheme.COLORS.SECONDARY} />
      </ButtonWrapper>

      {tag ? <Tag>{tag}</Tag> : <Tag>{tagTitle}</Tag>}
    </Container>
  );
}
