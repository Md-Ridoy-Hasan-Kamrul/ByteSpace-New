import React, { memo } from 'react';
import HomeFooter from '../home/HomeFooter';
import HomeHeader from '../home/HomeHeader';
import NotFoundCode from './NotFoundCode';
import NotFoundMessage from './NotFoundMessage';
import '../home/home.css';
import './not-found.css';

const NotFoundContent = memo(() => (
  <div className="home-page not-found-page">
    <div className="not-found-hero">
      <HomeHeader />
      <div className="home-wrap not-found-stage">
        <NotFoundCode />
        <NotFoundMessage />
      </div>
    </div>
    <HomeFooter />
  </div>
));

NotFoundContent.displayName = 'NotFoundContent';

export default NotFoundContent;
