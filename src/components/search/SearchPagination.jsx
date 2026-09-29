import React, { memo, useCallback } from 'react';
import { ICON_SIZE } from '../home/homeAssets';
import { FIRST_PAGE, NEXT_PAGE_LABEL, PREVIOUS_PAGE_LABEL, SEARCH_ICONS } from './searchCopy';

const pageNumbers = (pageCount) =>
  Array.from({ length: pageCount }, (_, index) => index + FIRST_PAGE);

const PageButton = memo(({ page, isCurrent, onPageChange }) => {
  const handleChange = useCallback(() => {
    onPageChange(page);
  }, [onPageChange, page]);

  return (
    <button
      type="button"
      className="search-page-number"
      aria-label={`Page ${page}`}
      aria-current={isCurrent ? 'page' : undefined}
      onClick={handleChange}
    >
      {page}
    </button>
  );
});

PageButton.displayName = 'PageButton';

const SearchPagination = memo(({ page, pageCount, onPageChange }) => {
  const handlePrevious = useCallback(() => {
    onPageChange(page - FIRST_PAGE);
  }, [onPageChange, page]);

  const handleNext = useCallback(() => {
    onPageChange(page + FIRST_PAGE);
  }, [onPageChange, page]);

  return (
    <nav className="search-pagination" aria-label="Pages">
      <button
        type="button"
        aria-label={PREVIOUS_PAGE_LABEL}
        onClick={handlePrevious}
        disabled={page === FIRST_PAGE}
      >
        <img src={SEARCH_ICONS.previous} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
      {pageNumbers(pageCount).map((pageNumber) => (
        <PageButton
          key={pageNumber}
          page={pageNumber}
          isCurrent={pageNumber === page}
          onPageChange={onPageChange}
        />
      ))}
      <button
        type="button"
        aria-label={NEXT_PAGE_LABEL}
        onClick={handleNext}
        disabled={page === pageCount}
      >
        <img src={SEARCH_ICONS.next} alt="" width={ICON_SIZE} height={ICON_SIZE} />
      </button>
    </nav>
  );
});

SearchPagination.displayName = 'SearchPagination';

export default SearchPagination;
