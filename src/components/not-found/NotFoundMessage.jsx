import React, { memo } from 'react';
import { ROUTES } from '../../config';
import HomeLink from '../home/HomeLink';
import { NOT_FOUND_HINT, NOT_FOUND_HOME, NOT_FOUND_TITLE } from './notFoundCopy';

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

export default NotFoundMessage;
