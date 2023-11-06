import { css, styled } from 'styled-components';


interface InputProps {
  error?: string;
}
export const Input = styled.input<InputProps>`
  border: 1px solid ${({ theme }) => theme.colors.dark2};
  border-radius: 0.25rem;
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  width: 100%;
  transition: border-color ease 0.2s;

  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.dark1};
  }
  ${({ error }) =>
    error && css`border-color: ${({ theme }) => theme.colors.error};`}
`;
