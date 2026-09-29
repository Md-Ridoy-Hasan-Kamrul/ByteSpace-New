import React, { memo } from 'react';

const CreatorBio = memo(({ paragraphs }) => (
  <div className="creator-bio">
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
));

CreatorBio.displayName = 'CreatorBio';

export default CreatorBio;
