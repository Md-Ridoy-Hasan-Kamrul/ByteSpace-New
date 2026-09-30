import React, { memo, useCallback, useState } from 'react';
import { useDismissable } from '../../hooks/useDismissable';
import { ICON_SIZE } from '../home/homeAssets';

const CreatorOption = memo(({ option, isSelected, onChoose }) => {
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

CreatorOption.displayName = 'CreatorOption';

const CreatorSelect = memo(({ label, icon, value, options, onChange }) => {
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
    <div className="creator-select" ref={selectRef}>
      <button type="button" aria-haspopup="listbox" aria-expanded={isOpen} onClick={handleToggle}>
        <img src={icon} alt="" width={ICON_SIZE} height={ICON_SIZE} />
        {label}
      </button>
      {isOpen ? (
        <ul className="creator-select-menu" role="listbox" aria-label={label}>
          {options.map((option) => (
            <CreatorOption
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

CreatorSelect.displayName = 'CreatorSelect';

export default CreatorSelect;
