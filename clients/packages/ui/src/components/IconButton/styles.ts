import { styled } from 'styled-components';
export const Btn = styled.button.attrs({
  type: 'button', 
})`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.dark2};
  > svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;
