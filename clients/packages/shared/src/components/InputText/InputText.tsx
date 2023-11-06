import {
  ErrorMessage,
  InputLabelText,
  InputWrapper
} from '../../styles/StyledModels';
import { Input } from './styled';

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const InputText = ({ label, error, ...rest }: InputTextProps) => {
  return (
    <InputWrapper>
      {label && <InputLabelText>{label}</InputLabelText>}
      <Input type="text" error={error} {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};


