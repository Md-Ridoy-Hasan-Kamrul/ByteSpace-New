import React, { memo } from 'react';
import CreatorActions from './CreatorActions';
import CreatorBio from './CreatorBio';
import CreatorIdentity from './CreatorIdentity';

const CreatorIntro = memo(({ creator, following, onFollow }) => (
  <div className="creator-intro">
    <CreatorIdentity creator={creator} />
    <CreatorBio paragraphs={creator.bio} />
    <CreatorActions stats={creator.stats} following={following} onFollow={onFollow} />
  </div>
));

CreatorIntro.displayName = 'CreatorIntro';

export default CreatorIntro;
