import { memo, useCallback, useState } from 'react';
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
import { FOCUS_RING } from './Header';

const icon = (name) => `/search/icon-${name}.svg`;

const CATALOG_ICONS = {
  filter: icon('filter'),
  level: icon('level'),
  category: icon('category'),
  sort: icon('sort'),
};

const BLUE_FOCUS =
  'focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-blue focus-visible:outline-offset-[2px]';

const SEARCH_PILL =
  'inline-flex cursor-pointer items-center justify-center gap-[4px] rounded-[1.5rem] border border-solid border-line bg-white px-[12px] py-[7px] text-[0.875rem] leading-[1.2] font-medium whitespace-nowrap text-body max-sm:[&_img]:h-4.5 max-sm:[&_img]:w-4.5 sm:px-[15px] sm:py-[11px] md:text-[1rem]';
const CREATOR_PILL =
  'inline-flex cursor-pointer items-center gap-1 rounded-[1.5rem] border border-solid border-line bg-white px-[calc(1rem_-_1px)] py-[calc(0.75rem_-_1px)] text-[0.875rem] leading-[1.2] font-medium text-body md:text-[1rem]';

// Search and the creator profile share the toolbar; the search page uses tighter pills on phones.
const STYLES = {
  search: {
    toolbar: 'flex flex-wrap items-start justify-between gap-2 sm:gap-4 xl:ml-[-1px]',
    filters: 'flex flex-wrap gap-2 sm:gap-4',
    pill: `${SEARCH_PILL} ${BLUE_FOCUS}`,
    menu: 'absolute top-[calc(100%_+_0.35rem)] left-0 z-3 min-w-full rounded-[0.75rem] border border-solid border-line bg-white p-[0.35rem]',
    option: `w-full cursor-pointer border-none px-3 py-2 text-left aria-selected:bg-canvas ${BLUE_FOCUS}`,
  },
  creator: {
    toolbar: 'flex flex-wrap items-start justify-between gap-4 xl:ml-[-1px]',
    filters: 'flex flex-wrap gap-4',
    pill: `${CREATOR_PILL} ${FOCUS_RING}`,
    menu: 'absolute top-[calc(100%_+_0.5rem)] left-0 z-3 min-w-full rounded-[1.5rem] border border-solid border-line bg-white p-2',
    option: `w-full cursor-pointer border-none px-3 py-2 text-left text-ink aria-selected:bg-canvas ${FOCUS_RING}`,
  },
};

const CatalogOption = memo(({ option, isSelected, onChoose, className }) => {
  const handleChoose = useCallback(() => {
    onChoose(option);
  }, [onChoose, option]);

  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={isSelected}
        className={className}
        onClick={handleChoose}
      >
        {option}
      </button>
    </li>
  );
});

CatalogOption.displayName = 'CatalogOption';

// Pill button that opens a listbox of options.
const CatalogSelect = memo(({ variant, label, icon, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = STYLES[variant];

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
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        className={styles.pill}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {label}
      </button>
      {isOpen ? (
        <ul className={styles.menu} role="listbox" aria-label={label}>
          {options.map((option) => (
            <CatalogOption
              key={option}
              option={option}
              isSelected={option === value}
              onChoose={handleChoose}
              className={styles.option}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
});

CatalogSelect.displayName = 'CatalogSelect';

// Filter (reset), Level and Category on the left, the sort menu on the right. Shared by the search
// page and the creator profile.
export const CatalogToolbar = memo(
  ({ variant, level, category, sort, onReset, onLevelChange, onCategoryChange, onSortChange }) => (
    <div className={STYLES[variant].toolbar}>
      <div className={STYLES[variant].filters}>
        <button type="button" className={STYLES[variant].pill} onClick={onReset}>
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
