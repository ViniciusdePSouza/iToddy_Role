import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <Container>
      <textarea {...rest}/>
    </Container>
  );
}
