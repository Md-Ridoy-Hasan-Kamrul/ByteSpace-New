import React, { memo } from 'react';
import SitePage from '../home/SitePage';
import NotFoundCode from './NotFoundCode';
import NotFoundMessage from './NotFoundMessage';
import './not-found.css';

const NotFoundContent = memo(() => (
  <SitePage
    name="not-found"
    hero={
      <div className="home-wrap not-found-stage">
        <NotFoundCode />
        <NotFoundMessage />
      </div>
    }
  />
));

NotFoundContent.displayName = 'NotFoundContent';

export default NotFoundContent;
