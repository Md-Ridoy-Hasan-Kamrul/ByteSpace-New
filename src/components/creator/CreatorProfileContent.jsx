import React, { memo } from 'react';
import { useCreatorCatalog } from '../../hooks/useCreatorCatalog';
import { useCreatorFollow } from '../../hooks/useCreatorFollow';
import CatalogToolbar from '../catalog/CatalogToolbar';
import CourseGrid from '../home/CourseGrid';
import SitePage from '../home/SitePage';
import { EMPTY_COURSES_MESSAGE } from './creatorCopy';
import CreatorIntro from './CreatorIntro';
import './creator.css';

const CreatorProfileContent = memo(({ creator }) => {
  const catalog = useCreatorCatalog(creator.courses);
  const follow = useCreatorFollow();

  return (
    <SitePage
      name="creator"
      hero={
        <div className="home-wrap">
          <CreatorIntro
            creator={creator}
            following={follow.following}
            onFollow={follow.handleFollowToggle}
          />
        </div>
      }
    >
      <section className="creator-catalog">
        <div className="home-wrap">
          <CatalogToolbar
            variant="creator"
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <CourseGrid
            courses={catalog.visibleCourses}
            emptyMessage={EMPTY_COURSES_MESSAGE}
            className="home-figma-card"
            emptyClassName="creator-empty"
          />
        </div>
      </section>
    </SitePage>
  );
});

CreatorProfileContent.displayName = 'CreatorProfileContent';

export default CreatorProfileContent;
