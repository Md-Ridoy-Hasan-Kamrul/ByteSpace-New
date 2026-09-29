import React, { memo } from 'react';
import { CATEGORY_ICON_SIZE } from './homeAssets';
import { HOME_CATEGORIES, PATHS_BODY, PATHS_TITLE } from './homeData';

const CategoryCard = memo(({ category }) => (
  <a className="home-category-card" href="#courses">
    <span className="home-category-icon">
      <img src={category.icon} alt="" width={CATEGORY_ICON_SIZE} height={CATEGORY_ICON_SIZE} />
    </span>
    {category.label}
  </a>
));

CategoryCard.displayName = 'CategoryCard';

const CategoryPaths = memo(() => (
  <section id="categories" className="home-section home-paths">
    <div className="home-wrap">
      <div className="home-section-copy">
        <h2>{PATHS_TITLE}</h2>
        <p>{PATHS_BODY}</p>
      </div>
      <div className="home-category-grid">
        {HOME_CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  </section>
));

CategoryPaths.displayName = 'CategoryPaths';

export default CategoryPaths;
