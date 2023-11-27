import { forwardRef } from 'react';
import { Container, InputWrap } from './styles';
import { FaCheck } from 'react-icons/fa6';

export interface InputCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export const InputCheckbox = forwardRef<HTMLInputElement>(
  ({ ...rest }: InputCheckboxProps, ref) => {
    return (
      <Container>
        <InputWrap>
          <input type="checkbox" ref={ref} {...rest} />
          <FaCheck />
        </InputWrap>
      </Container>
    );
  }
);
