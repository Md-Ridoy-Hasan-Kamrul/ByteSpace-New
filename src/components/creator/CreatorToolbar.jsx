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
import { CATEGORY_ICON, FILTER_ICON, LEVEL_ICON, SORT_ICON } from './creatorAssets';
import CreatorSelect from './CreatorSelect';

const CreatorToolbar = memo(({
  level,
  category,
  sort,
  onReset,
  onLevelChange,
  onCategoryChange,
  onSortChange,
}) => (
  <div className="creator-toolbar">
    <div className="creator-toolbar-filters">
      <button type="button" className="creator-filter" onClick={onReset}>
        <img src={FILTER_ICON} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {FILTER_LABEL}
      </button>
      <CreatorSelect
        label={LEVEL_LABEL}
        icon={LEVEL_ICON}
        value={level}
        options={LEVEL_OPTIONS}
        onChange={onLevelChange}
      />
      <CreatorSelect
        label={CATEGORY_LABEL}
        icon={CATEGORY_ICON}
        value={category}
        options={CATEGORY_OPTIONS}
        onChange={onCategoryChange}
      />
    </div>
    <CreatorSelect
      label={sort}
      icon={SORT_ICON}
      value={sort}
      options={SORT_OPTIONS}
      onChange={onSortChange}
    />
  </div>
));

CreatorToolbar.displayName = 'CreatorToolbar';

export default CreatorToolbar;
