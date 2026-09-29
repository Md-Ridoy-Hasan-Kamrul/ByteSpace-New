import React, { memo } from 'react';
import { NOT_FOUND_CODE } from './notFoundCopy';

const NotFoundCode = memo(() => (
  <p className="not-found-code" aria-hidden="true">
    {NOT_FOUND_CODE}
  </p>
));

NotFoundCode.displayName = 'NotFoundCode';

export default NotFoundCode;
