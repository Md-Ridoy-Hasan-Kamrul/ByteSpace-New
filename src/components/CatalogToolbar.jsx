import React, { memo, useCallback, useState } from 'react';
import { ICON_SIZE } from '../data/home';
import {
  CATEGORY_LABEL,
  CATEGORY_OPTIONS,
  FILTER_LABEL,
  LEVEL_LABEL,
  LEVEL_OPTIONS,
  SORT_OPTIONS,
} from '../data/search';
import { useDismissable } from '../hooks/useDismissable';

const icon = (name) => `/search/icon-${name}.svg`;

const CATALOG_ICONS = {
  filter: icon('filter'),
  level: icon('level'),
  category: icon('category'),
  sort: icon('sort'),
};

const CatalogOption = memo(({ option, isSelected, onChoose }) => {
  const handleChoose = useCallback(() => {
    onChoose(option);
  }, [onChoose, option]);

  return (
    <li>
      <button type="button" role="option" aria-selected={isSelected} onClick={handleChoose}>
        {option}
      </button>
    </li>
  );
});

CatalogOption.displayName = 'CatalogOption';

// Pill button that opens a listbox of options. `variant` ("search" / "creator") picks the page's
// `<variant>-select` styles.
const CatalogSelect = memo(({ variant, label, icon, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const selectRef = useDismissable(isOpen, handleClose);

  const handleChoose = useCallback(
    (option) => {
      onChange(option);
      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <div className={`${variant}-select`} ref={selectRef}>
      <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} onClick={handleToggle}>
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {label}
      </button>
      {isOpen ? (
        <ul className={`${variant}-select-menu`} role="listbox" aria-label={label}>
          {options.map((option) => (
            <CatalogOption
              key={option}
              option={option}
              isSelected={option === value}
              onChoose={handleChoose}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
});

CatalogSelect.displayName = 'CatalogSelect';

// Filter (reset), Level and Category on the left, the sort menu on the right. Shared by the search
// page and the creator profile; `variant` picks the page's `<variant>-toolbar` styles.
export const CatalogToolbar = memo(
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
