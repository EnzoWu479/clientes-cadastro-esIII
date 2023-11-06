import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Button = styled(Link).attrs({
  to: '..',
  replace: true
})`
  background-color: ${({ theme }) => theme.colors.dark2};
  color: ${({ theme }) => theme.colors.white};
  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transition: all ease 0.2s;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark1};
  }
`;
