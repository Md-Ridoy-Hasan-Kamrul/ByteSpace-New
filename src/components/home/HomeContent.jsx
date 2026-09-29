import React, { memo } from 'react';
import { useHomeCatalog } from '../../hooks/useHomeCatalog';
import { HOME_COURSES } from './homeData';
import CategoryPaths from './CategoryPaths';
import CourseDiscovery from './CourseDiscovery';
import CreatorCta from './CreatorCta';
import GrowthSection from './GrowthSection';
import HomeHero from './HomeHero';
import HomeFooter from './HomeFooter';
import PartnerStrip from './PartnerStrip';
import Testimonials from './Testimonials';
import './home.css';

const HomeContent = memo(() => {
  const catalog = useHomeCatalog(HOME_COURSES);

  return (
    <div className="home-page">
      <HomeHero />
      <PartnerStrip />
      <CourseDiscovery catalog={catalog} />
      <CategoryPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
      <HomeFooter />
    </div>
  );
});

HomeContent.displayName = 'HomeContent';

export default HomeContent;
