import React, { memo, useCallback, useState } from 'react';
import { useDismissable } from '../../hooks/useDismissable';
import { ICON_SIZE } from '../home/homeAssets';

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

export default CatalogSelect;
