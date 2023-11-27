import { ButtonModel, TitleModel } from '@ecommerce/ui';
import { styled } from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 20rem;
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const SubmitButton = styled(ButtonModel)`
  width: 100%;
  margin-top: 1rem;
`;
export const Title = styled(TitleModel)`
  text-align: center;
  align-self: center;
`;
export const Detail = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark1};
`;
