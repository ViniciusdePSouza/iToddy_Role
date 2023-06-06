import  { forwardRef, TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <Container>
        <textarea ref={ref} {...props} />
      </Container>
    );
  }
);

export default TextArea;
