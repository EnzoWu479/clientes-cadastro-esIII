import { styled } from 'styled-components';

export const Container = styled.div``;
export const InputWrap = styled.label`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  border: 1px solid ${({ theme }) => theme.colors.dark1};
  border-radius: 0.25rem;

  input[type='checkbox'] {
    display: none;
  }
  &:has(input[type='checkbox']:checked) {
    background-color: ${({ theme }) => theme.colors.dark2};

    > svg {
      opacity: 1;
    }
  }

  > svg {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
  }
`;
