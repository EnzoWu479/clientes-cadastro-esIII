import { STATUS_COLOR } from '@/config/constants';
import { Status } from '@/types/client';
import { css, styled } from 'styled-components';

interface ColorProps {
  status: Status;
}
export const Button = styled.button.attrs({
  type: 'button'
})<ColorProps>`
  text-transform: lowercase;
  padding: 0.2rem 1rem;
  text-align: center;
  width: 5rem;
  border-radius: 0.5rem;

  border: none;

  cursor: pointer;

  /* first letter upper */
  &:first-letter {
    text-transform: uppercase;
  }

  ${({ status, theme }) => css`
    background: ${theme.colors[STATUS_COLOR[status]]}44;
    color: ${theme.colors[STATUS_COLOR[status]]};
  `}
`;
