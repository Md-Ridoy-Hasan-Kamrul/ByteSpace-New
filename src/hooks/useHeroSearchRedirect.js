import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_QUERY_PARAM } from '../components/search/searchCopy';
import { ROUTES } from '../config';

const EMPTY_QUERY = '';

export const searchResultsPath = (query) => {
  const trimmed = query.trim();
  if (!trimmed) {
    return ROUTES.SEARCH;
  }

  const params = new URLSearchParams({ [SEARCH_QUERY_PARAM]: trimmed });
  return `${ROUTES.SEARCH}?${params.toString()}`;
};

export const useHeroSearchRedirect = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(EMPTY_QUERY);

  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();
      navigate(searchResultsPath(query));
    },
    [navigate, query],
  );

  return { query, handleQueryChange, handleSearchSubmit };
};
