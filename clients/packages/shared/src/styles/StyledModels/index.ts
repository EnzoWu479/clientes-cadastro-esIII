import styled, { css } from 'styled-components';

export const ContentContainerModel = styled.div``;
export const TitleModel = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.dark2};

  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SectionTitleModel = styled.h3`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.dark2};
`;
export const TableModel = styled.table``;
export const TableHeadModel = styled.thead``;
export const TableHeadRowModel = styled.tr``;
export const TableHeadCellModel = styled.th``;
export const TableBodyModel = styled.tbody``;
export const TableBodyRowModel = styled.tr``;
export const TableBodyCellModel = styled.td``;

export const ButtonModel = styled.button.attrs({
  type: 'button'
})`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark2};
  color: ${({ theme }) => theme.colors.white};

  height: 2.5rem;
  width: fit-content;
  padding: 0 1rem;
  border-radius: 0.25rem;

  cursor: pointer;

  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  transition: background-color ease 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark1};
  }
`;
export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};

  ${({ children }) =>
    children
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;
export const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputLabelText = styled.span``;
