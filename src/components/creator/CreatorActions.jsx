import React, { memo } from 'react';
import { FOLLOW_LABEL } from './creatorCopy';
import CreatorStat from './CreatorStat';

const CreatorActions = memo(({ stats, following, onFollow }) => (
  <div className="creator-actions">
    <div className="creator-stats">
      {stats.map((stat) => (
        <CreatorStat key={stat.id} stat={stat} />
      ))}
    </div>
    <button type="button" className="creator-follow" aria-pressed={following} onClick={onFollow}>
      {FOLLOW_LABEL}
    </button>
  </div>
));

CreatorActions.displayName = 'CreatorActions';

export default CreatorActions;
