import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export const usePage = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  return { page };
};
