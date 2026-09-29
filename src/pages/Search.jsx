import React, { memo } from 'react';
import { useSEO } from '../hooks/useSEO';
import SearchContent from '../components/search/SearchContent';
import { SEO_SEARCH } from '../components/search/searchCopy';

const Search = memo(() => {
  useSEO(SEO_SEARCH);

  return <SearchContent />;
});

Search.displayName = 'Search';

export default Search;
