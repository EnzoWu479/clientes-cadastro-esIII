import { styled } from 'styled-components';
export const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: end;

  .pagination {
    display: flex;
    align-items: center;
    /* gap: 0.5rem; */
  }
  .pagination,
  .nav-next,
  .nav-prev {
    cursor: pointer;
    user-select: none;
  }
  .page-item {
    width: 2rem;
    height: 2rem;

    font-size: 0.875rem;

    transition: all ease 0.2s;

    color: ${({ theme }) => theme.colors.dark1};

    border-radius: 50%;

    &::marker {
      content: none;
    }
  }
  .page-link {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    color: inherit;
  }
  .active {
    /* background: #286bf0; */
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark2};
  }
  .disabled {
    opacity: 0.5;
    cursor: default;
  }
  .nav-prev,
  .nav-next {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .break {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &::marker {
      content: '';
    }
  }
`;
