import { styled } from 'styled-components';
import { ButtonModel } from '../../main';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
  max-width: 90vw;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark2};
`;
export const Description = styled.p`
text-align: center;
font-size: 0.875rem;
`;
export const Button = styled(ButtonModel)``;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
