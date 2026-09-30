import React, { memo } from 'react';
import { HomeLink } from '../components/Header';
import { SitePage } from '../components/SitePage';
import { ROUTES } from '../config';
import { useSEO } from '../hooks/useSEO';
import '../styles/not-found.css';

const NOT_FOUND_CODE = '404';
const NOT_FOUND_TITLE = 'The page you are looking for doesn\u2019t exist';
const NOT_FOUND_HINT = 'Try to use a correct url or go back to homepage to start again';
const NOT_FOUND_HOME = 'Back to Home';

const SEO_NOT_FOUND = {
  title: 'Page not found',
  description: NOT_FOUND_HINT,
  keywords: ['ByteSpace', '404'],
};

const NotFoundCode = memo(() => (
  <p className="not-found-code" aria-hidden="true">
    {NOT_FOUND_CODE}
  </p>
));

NotFoundCode.displayName = 'NotFoundCode';

const NotFoundMessage = memo(() => (
  <div className="not-found-copy">
    <h1>{NOT_FOUND_TITLE}</h1>
    <p>{NOT_FOUND_HINT}</p>
    <HomeLink className="not-found-home" to={ROUTES.HOME}>
      {NOT_FOUND_HOME}
    </HomeLink>
  </div>
));

NotFoundMessage.displayName = 'NotFoundMessage';

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

const NotFound = memo(() => {
  useSEO(SEO_NOT_FOUND);

  return <NotFoundContent />;
});

NotFound.displayName = 'NotFound';

export default NotFound;
