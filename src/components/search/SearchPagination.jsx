import React, { memo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ICON_SIZE } from '../home/homeAssets';
import { FIRST_PAGE, NEXT_PAGE_LABEL, PREVIOUS_PAGE_LABEL } from './searchCopy';

const pageNumbers = (pageCount) => Array.from({ length: pageCount }, (_, index) => index + FIRST_PAGE);

const PageButton = memo(({ page, isCurrent, onPageChange }) => {
  const handleChange = useCallback(() => {
    onPageChange(page);
  }, [onPageChange, page]);

  return (
    <button
      type="button"
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
        <ChevronLeft size={ICON_SIZE} aria-hidden="true" />
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
        <ChevronRight size={ICON_SIZE} aria-hidden="true" />
      </button>
    </nav>
  );
});

SearchPagination.displayName = 'SearchPagination';

export default SearchPagination;
