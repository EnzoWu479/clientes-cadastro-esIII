import { forwardRef } from 'react';
import {
  ErrorMessage,
  InputLabelText,
  InputWrapper
} from '../../styles/StyledModels';
import { Input } from './styled';
import { IMask } from '../../helpers/masks';

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: IMask;
}

export const InputText = forwardRef(
  ({ label, error, mask, ...rest }: InputTextProps, ref) => {
    const handleOnInput = (event: any) => {
      if (mask) {
        event.currentTarget.value = mask(event.currentTarget.value);
      }
    };
    const value = (rest.defaultValue || rest.value) as string;
    const defaultValue = mask ? mask(value as string) : value;
    return (
      <InputWrapper>
        {label && <InputLabelText>{label}</InputLabelText>}
        <Input
          type="text"
          error={error}
          onInput={handleOnInput}
          defaultValue={defaultValue}
          {...rest}
          ref={ref}
        />
        <ErrorMessage>{error}</ErrorMessage>
      </InputWrapper>
    );
  }
);
