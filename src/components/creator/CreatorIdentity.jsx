import React, { memo } from 'react';
import { PORTRAIT_SIZE } from './creatorAssets';

const CreatorIdentity = memo(({ creator }) => (
  <div className="creator-identity">
    <img
      className="creator-portrait"
      src={creator.portrait}
      alt=""
      width={PORTRAIT_SIZE}
      height={PORTRAIT_SIZE}
    />
    <div className="creator-identity-copy">
      <div className="creator-name-row">
        <h1>{creator.name}</h1>
        <span className="creator-badge">{creator.badge}</span>
      </div>
      <p>{creator.role}</p>
    </div>
  </div>
));

CreatorIdentity.displayName = 'CreatorIdentity';

export default CreatorIdentity;
