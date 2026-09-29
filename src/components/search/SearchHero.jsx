import React, { memo } from 'react';
import { ICON_SEARCH, ICON_SIZE } from '../home/homeAssets';
import { SEARCH_FIELD_LABEL, SEARCH_ICONS, SEARCH_SCOPE_LABEL, SEARCH_TITLE } from './searchCopy';

const SearchHero = memo(({ query, onQueryChange, onSubmit }) => (
  <div className="search-hero-copy">
    <h1>{SEARCH_TITLE}</h1>
    <form className="search-bar" role="search" onSubmit={onSubmit}>
      <label className="search-field" htmlFor="search-course-query">
        <img src={ICON_SEARCH} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        <span className="sr-only">{SEARCH_FIELD_LABEL}</span>
        <input
          id="search-course-query"
          type="search"
          placeholder={SEARCH_FIELD_LABEL}
          value={query}
          onChange={onQueryChange}
        />
      </label>
      <button type="submit">
        {SEARCH_SCOPE_LABEL}
        <img src={SEARCH_ICONS.chevronDown} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    </form>
  </div>
));

SearchHero.displayName = 'SearchHero';

export default SearchHero;
