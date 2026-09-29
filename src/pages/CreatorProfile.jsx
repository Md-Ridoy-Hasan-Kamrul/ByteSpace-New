import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import CreatorProfileContent from '../components/creator/CreatorProfileContent';
import {
  MISSING_CREATOR_MESSAGE,
  SEO_CREATOR,
  SEO_MISSING_CREATOR,
  selectCreatorProfile,
} from '../components/creator/creatorCopy';
import { useSEO } from '../hooks/useSEO';

const CreatorProfile = memo(() => {
  const { creatorId } = useParams();
  const creator = selectCreatorProfile(creatorId);

  useSEO(creator ? SEO_CREATOR : SEO_MISSING_CREATOR);

  if (!creator) {
    return <p>{MISSING_CREATOR_MESSAGE}</p>;
  }

  return <CreatorProfileContent creator={creator} />;
});

CreatorProfile.displayName = 'CreatorProfile';

export default CreatorProfile;
