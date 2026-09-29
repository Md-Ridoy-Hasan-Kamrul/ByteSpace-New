import React, { memo } from 'react';

const CreatorStat = memo(({ stat }) => (
  <p className="creator-stat">
    <span>{stat.count}</span>
    {stat.label}
  </p>
));

CreatorStat.displayName = 'CreatorStat';

export default CreatorStat;
