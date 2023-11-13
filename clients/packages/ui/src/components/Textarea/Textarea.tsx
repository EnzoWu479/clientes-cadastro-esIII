import { forwardRef } from 'react';
import {
  ErrorMessage,
  InputLabelText,
  InputWrapper
} from '../../styles/StyledModels';
import { TextareaInput } from './styled';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef(
  ({ label, error, ...rest }: TextareaProps, ref) => {
    return (
      <InputWrapper>
        {label && <InputLabelText>{label}</InputLabelText>}
        <TextareaInput type="text" error={error} {...rest} ref={ref} />
        <ErrorMessage>{error}</ErrorMessage>
      </InputWrapper>
    );
  }
);
