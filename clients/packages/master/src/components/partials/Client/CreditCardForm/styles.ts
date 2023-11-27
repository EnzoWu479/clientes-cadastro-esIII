import { styled } from 'styled-components';

export const CreditCardItem = styled.li`
  background-color: ${({ theme }) => theme.colors.light2};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
export const TrashButton = styled.button.attrs({
  type: 'button'
})`
  display: block;
  margin-left: auto;

  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    fill: ${({ theme }) => theme.colors.error};
    width: 1.25rem;
    height: 1.25rem;
  }
`;
export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: grid;
    gap: 1rem;
  }

  > div:nth-child(1) {
    grid-template-columns: 1fr 1fr;
  }
  > div:nth-child(2) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
