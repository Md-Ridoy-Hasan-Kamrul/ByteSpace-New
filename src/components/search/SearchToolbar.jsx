import React, { memo } from 'react';
import { ICON_SIZE } from '../home/homeAssets';
import {
  CATEGORY_LABEL,
  CATEGORY_OPTIONS,
  FILTER_LABEL,
  LEVEL_LABEL,
  LEVEL_OPTIONS,
  SEARCH_ICONS,
  SORT_OPTIONS,
} from './searchCopy';
import SearchSelect from './SearchSelect';

const SearchToolbar = memo(
  ({ level, category, sort, onReset, onLevelChange, onCategoryChange, onSortChange }) => (
    <div className="search-toolbar">
      <div className="search-toolbar-filters">
        <button type="button" className="search-filter" onClick={onReset}>
          <img src={SEARCH_ICONS.filter} alt="" width={ICON_SIZE} height={ICON_SIZE} />
          {FILTER_LABEL}
        </button>
        <SearchSelect
          label={LEVEL_LABEL}
          icon={SEARCH_ICONS.level}
          value={level}
          options={LEVEL_OPTIONS}
          onChange={onLevelChange}
        />
        <SearchSelect
          label={CATEGORY_LABEL}
          icon={SEARCH_ICONS.category}
          value={category}
          options={CATEGORY_OPTIONS}
          onChange={onCategoryChange}
        />
      </div>
      <SearchSelect
        label={sort}
        icon={SEARCH_ICONS.sort}
        value={sort}
        options={SORT_OPTIONS}
        onChange={onSortChange}
      />
    </div>
  ),
);

SearchToolbar.displayName = 'SearchToolbar';

export default SearchToolbar;
