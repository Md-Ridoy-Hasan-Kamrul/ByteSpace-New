import React, { memo } from 'react';
import { CATEGORY_ICON_SIZE, HOME_CATEGORIES, PATHS_BODY, PATHS_TITLE } from '../../data/home';

const CategoryCard = memo(({ category }) => (
  <a className="gap-3 rounded-[1.5rem] border border-solid border-line flex min-h-42 flex-col items-center justify-center text-ink text-[1.125rem] font-medium no-underline leading-[1.2] md:text-[1.25rem] lg:min-h-0 lg:aspect-[1/1] focus-visible:outline-solid focus-visible:outline-[2px] focus-visible:outline-brand-lime focus-visible:outline-offset-[3px]" href="#courses">
    <span className="rounded-[999px] grid items-center justify-items-center w-15 h-15 bg-brand-lime">
      <img src={category.icon} alt="" width={CATEGORY_ICON_SIZE} height={CATEGORY_ICON_SIZE} />
    </span>
    {category.label}
  </a>
));

CategoryCard.displayName = 'CategoryCard';

export const CategoryPaths = memo(() => (
  <section id="categories" className="pt-16 pb-30 [-webkit-font-smoothing:antialiased]">
    <div className="mx-auto w-[min(100%_-_2rem,_75rem)] sm:w-[min(100%_-_2.5rem,_75rem)]">
      <div className="mx-auto max-w-[57.3125rem] text-center">
        <h2 className="font-display font-semibold tracking-[-0.01em] leading-[1.25] text-ink-deep text-[clamp(1.5rem,_6.5vw,_1.75rem)] md:leading-[1.2] md:text-[clamp(1.5rem,_3vw,_2.25rem)]">{PATHS_TITLE}</h2>
        <p className="mt-4 text-muted text-[1rem] leading-[1.6] font-normal md:text-[1.125rem]">{PATHS_BODY}</p>
      </div>
      <div className="gap-6 grid grid-cols-2 mt-17 lg:gap-10 lg:grid-cols-6">
        {HOME_CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  </section>
));

CategoryPaths.displayName = 'CategoryPaths';
