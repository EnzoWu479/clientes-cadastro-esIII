import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Container } from './styles';

interface Props extends ReactPaginateProps {}
export const Pagination = ({ ...rest }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  return (
    <Container>
      <ReactPaginate
        breakLabel={'...'}
        nextLabel={<IoIosArrowForward />}
        previousLabel={<IoIosArrowBack />}
        pageRangeDisplayed={2}
        onPageChange={e => {
          const realPage = e.selected + 1;
          if (realPage === page) return;
          setSearchParams({ page: String(realPage) });
        }}
        forcePage={page - 1}
        {...rest}
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="nav-prev"
        nextClassName="nav-next"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="break"
      />
    </Container>
  );
};
