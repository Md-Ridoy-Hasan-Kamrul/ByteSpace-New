import React, { memo } from 'react';
import { useCreatorCatalog } from '../../hooks/useCreatorCatalog';
import { useCreatorFollow } from '../../hooks/useCreatorFollow';
import HomeFooter from '../home/HomeFooter';
import HomeHeader from '../home/HomeHeader';
import CreatorCourseGrid from './CreatorCourseGrid';
import CreatorIntro from './CreatorIntro';
import CreatorToolbar from './CreatorToolbar';
import '../home/home.css';
import './creator.css';

const CreatorProfileContent = memo(({ creator }) => {
  const catalog = useCreatorCatalog(creator.courses);
  const follow = useCreatorFollow();

  return (
    <div className="home-page creator-page">
      <div className="creator-hero">
        <HomeHeader />
        <div className="home-wrap">
          <CreatorIntro
            creator={creator}
            following={follow.following}
            onFollow={follow.handleFollowToggle}
          />
        </div>
      </div>
      <section className="creator-catalog">
        <div className="home-wrap">
          <CreatorToolbar
            level={catalog.level}
            category={catalog.category}
            sort={catalog.sort}
            onReset={catalog.handleResetFilters}
            onLevelChange={catalog.handleLevelChange}
            onCategoryChange={catalog.handleCategoryChange}
            onSortChange={catalog.handleSortChange}
          />
          <CreatorCourseGrid courses={catalog.visibleCourses} />
        </div>
      </section>
      <HomeFooter />
    </div>
  );
});

CreatorProfileContent.displayName = 'CreatorProfileContent';

export default CreatorProfileContent;
