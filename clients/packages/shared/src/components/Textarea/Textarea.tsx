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

export const Textarea = ({ label, error, ...rest }: TextareaProps) => {
  return (
    <InputWrapper>
      {label && <InputLabelText>{label}</InputLabelText>}
      <TextareaInput type="text" error={error} {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};
