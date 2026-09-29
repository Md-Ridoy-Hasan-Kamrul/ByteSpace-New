import React, { memo } from 'react';
import { useSEO } from '../hooks/useSEO';
import HomeContent from '../components/home/HomeContent';
import { SEO_HOME } from '../components/home/homeData';

const Home = memo(() => {
  useSEO(SEO_HOME);

  return <HomeContent />;
});

Home.displayName = 'Home';

export default Home;
