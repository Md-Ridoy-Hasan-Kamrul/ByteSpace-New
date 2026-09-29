import React, { memo } from 'react';
import { ArrowDownUp, LayoutGrid, Signal, SlidersHorizontal } from 'lucide-react';
import { ICON_SIZE } from '../home/homeAssets';
import {
  CATEGORY_LABEL,
  CATEGORY_OPTIONS,
  FILTER_LABEL,
  LEVEL_LABEL,
  LEVEL_OPTIONS,
  SORT_OPTIONS,
} from './searchCopy';
import SearchSelect from './SearchSelect';

const SearchToolbar = memo(({
  level,
  category,
  sort,
  onReset,
  onLevelChange,
  onCategoryChange,
  onSortChange,
}) => (
  <div className="search-toolbar">
    <div className="search-toolbar-filters">
      <button type="button" className="search-filter" onClick={onReset}>
        <SlidersHorizontal size={ICON_SIZE} aria-hidden="true" />
        {FILTER_LABEL}
      </button>
      <SearchSelect
        label={LEVEL_LABEL}
        icon={Signal}
        value={level}
        options={LEVEL_OPTIONS}
        onChange={onLevelChange}
      />
      <SearchSelect
        label={CATEGORY_LABEL}
        icon={LayoutGrid}
        value={category}
        options={CATEGORY_OPTIONS}
        onChange={onCategoryChange}
      />
    </div>
    <SearchSelect
      label={sort}
      icon={ArrowDownUp}
      value={sort}
      options={SORT_OPTIONS}
      onChange={onSortChange}
    />
  </div>
));

SearchToolbar.displayName = 'SearchToolbar';

export default SearchToolbar;
