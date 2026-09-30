import React, { memo } from 'react';
import { ICON_SIZE } from '../home/homeAssets';
import {
  CATEGORY_LABEL,
  CATEGORY_OPTIONS,
  FILTER_LABEL,
  LEVEL_LABEL,
  LEVEL_OPTIONS,
  SORT_OPTIONS,
} from '../search/searchCopy';
import { CATALOG_ICONS } from './catalogAssets';
import CatalogSelect from './CatalogSelect';

// Filter (reset), Level and Category on the left, the sort menu on the right. Shared by the search
// page and the creator profile; `variant` picks the page's `<variant>-toolbar` styles.
const CatalogToolbar = memo(
  ({ variant, level, category, sort, onReset, onLevelChange, onCategoryChange, onSortChange }) => (
    <div className={`${variant}-toolbar`}>
      <div className={`${variant}-toolbar-filters`}>
        <button type="button" className={`${variant}-filter`} onClick={onReset}>
          <img src={CATALOG_ICONS.filter} alt="" width={ICON_SIZE} height={ICON_SIZE} />
          {FILTER_LABEL}
        </button>
        <CatalogSelect
          variant={variant}
          label={LEVEL_LABEL}
          icon={CATALOG_ICONS.level}
          value={level}
          options={LEVEL_OPTIONS}
          onChange={onLevelChange}
        />
        <CatalogSelect
          variant={variant}
          label={CATEGORY_LABEL}
          icon={CATALOG_ICONS.category}
          value={category}
          options={CATEGORY_OPTIONS}
          onChange={onCategoryChange}
        />
      </div>
      <CatalogSelect
        variant={variant}
        label={sort}
        icon={CATALOG_ICONS.sort}
        value={sort}
        options={SORT_OPTIONS}
        onChange={onSortChange}
      />
    </div>
  ),
);

CatalogToolbar.displayName = 'CatalogToolbar';

export default CatalogToolbar;
