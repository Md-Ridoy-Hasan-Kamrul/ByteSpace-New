import React, { memo } from 'react';
import { useSearchCatalog } from '../../hooks/useSearchCatalog';
import CatalogToolbar from '../catalog/CatalogToolbar';
import CourseGrid from '../home/CourseGrid';
import SitePage from '../home/SitePage';
import SearchHero from './SearchHero';
import SearchPagination from './SearchPagination';
import { EMPTY_RESULTS_MESSAGE, SEARCH_COURSES } from './searchCopy';
import SearchTopicList from './SearchTopicList';
import './search.css';

const SearchContent = memo(() => {
  const catalog = useSearchCatalog(SEARCH_COURSES);

  return (
    <SitePage
      name="search"
      hero={
        <SearchHero
          query={catalog.query}
          onQueryChange={catalog.handleQueryChange}
          onSubmit={catalog.handleSearchSubmit}
        />
      }
    >
      <section id="courses" className="home-section">
        <div className="home-wrap">
          <CatalogToolbar
            variant="search"
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <SearchTopicList topic={catalog.topic} onSelect={catalog.handleTopicSelect} />
          <CourseGrid
            courses={catalog.visibleCourses}
            emptyMessage={EMPTY_RESULTS_MESSAGE}
            className="search-results"
          />
          <SearchPagination
            page={catalog.page}
            pageCount={catalog.pageCount}
            onPageChange={catalog.handlePageChange}
          />
        </div>
      </section>
    </SitePage>
  );
});

SearchContent.displayName = 'SearchContent';

export default SearchContent;
