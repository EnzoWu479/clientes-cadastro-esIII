import ReactSelect, {
  GroupBase,
  OptionsOrGroups,
  Props as ReactSelectProps
} from 'react-select';
import {
  ErrorMessage,
  InputLabelText,
  InputWrapper
} from '../../styles/StyledModels';

export interface IOption {
  value: string;
  label: string;
}

interface Props extends ReactSelectProps {
  label?: string;
  error?: string;
  value?: string;
  options: IOption[];
}
export const Select = ({ label, error, value, ...rest }: Props) => {
  const { options } = rest;
  return (
    <InputWrapper>
      {label && <InputLabelText>{label}</InputLabelText>}
      <ReactSelect
        {...rest}
        value={
          options.find(opt => opt.value === value) ?? {
            value: '',
            label: ''
          }
        }
        styles={{
          
        }}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};
