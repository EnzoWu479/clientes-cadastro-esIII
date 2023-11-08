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
import { useTheme } from 'styled-components';

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
  const theme = useTheme();
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
          control: (provided, state) => ({
            ...provided,
            height: '40px',
            border: `1px solid ${theme.colors.dark2}`
          })
        }}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};
