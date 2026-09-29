import React, { memo } from 'react';
import NotFoundContent from '../components/not-found/NotFoundContent';
import { SEO_NOT_FOUND } from '../components/not-found/notFoundCopy';
import { useSEO } from '../hooks/useSEO';

const NotFound = memo(() => {
  useSEO(SEO_NOT_FOUND);

  return <NotFoundContent />;
});

NotFound.displayName = 'NotFound';

export default NotFound;
