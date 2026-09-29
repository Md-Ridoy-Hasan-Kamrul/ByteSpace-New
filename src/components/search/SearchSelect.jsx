import React, { memo, useCallback, useState } from 'react';
import { ICON_SIZE } from '../home/homeAssets';

const SearchOption = memo(({ option, isSelected, onChoose }) => {
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

SearchOption.displayName = 'SearchOption';

const SearchSelect = memo(({ label, icon, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const handleChoose = useCallback(
    (option) => {
      onChange(option);
      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <div className="search-select">
      <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} onClick={handleToggle}>
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {label}
      </button>
      {isOpen ? (
        <ul className="search-select-menu" role="listbox" aria-label={label}>
          {options.map((option) => (
            <SearchOption
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

SearchSelect.displayName = 'SearchSelect';

export default SearchSelect;
