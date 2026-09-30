import React, { memo } from 'react';
import { HomeFooter } from '../components/Footer';
import { CategoryPaths } from '../components/home/CategoryPaths';
import { CourseDiscovery, useHomeCatalog } from '../components/home/CourseDiscovery';
import { CreatorCta } from '../components/home/CreatorCta';
import { GrowthSection } from '../components/home/GrowthSection';
import { HomeHero } from '../components/home/Hero';
import { PartnerStrip } from '../components/home/PartnerStrip';
import { Testimonials } from '../components/home/Testimonials';
import { HOME_COURSES, SEO_HOME } from '../data/home';
import { useSEO } from '../hooks/useSEO';

const HomeContent = memo(() => {
  const catalog = useHomeCatalog(HOME_COURSES);

  return (
    <div className="w-full bg-white text-ink font-body">
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

const Home = memo(() => {
  useSEO(SEO_HOME);

  return <HomeContent />;
});

Home.displayName = 'Home';

export default Home;
