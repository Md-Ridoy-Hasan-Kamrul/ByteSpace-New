import React, { memo } from 'react';
import { HOME_COURSES } from '../home/homeData';
import HomeFooter from '../home/HomeFooter';
import HomeHeader from '../home/HomeHeader';
import { useSearchCatalog } from '../../hooks/useSearchCatalog';
import SearchCourseGrid from './SearchCourseGrid';
import SearchHero from './SearchHero';
import SearchPagination from './SearchPagination';
import SearchToolbar from './SearchToolbar';
import SearchTopicList from './SearchTopicList';
import '../home/home.css';
import './search.css';

const SearchContent = memo(() => {
  const catalog = useSearchCatalog(HOME_COURSES);

  return (
    <div className="home-page search-page">
      <div className="home-hero search-hero">
        <HomeHeader />
        <SearchHero
          query={catalog.query}
          onQueryChange={catalog.handleQueryChange}
          onSubmit={catalog.handleSearchSubmit}
        />
      </div>
      <section id="courses" className="home-section">
        <div className="home-wrap">
          <SearchToolbar
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <SearchTopicList topic={catalog.topic} onSelect={catalog.handleTopicSelect} />
          <SearchCourseGrid courses={catalog.visibleCourses} />
          <SearchPagination
            page={catalog.page}
            pageCount={catalog.pageCount}
            onPageChange={catalog.handlePageChange}
          />
        </div>
      </section>
      <HomeFooter />
    </div>
  );
});

SearchContent.displayName = 'SearchContent';

export default SearchContent;
