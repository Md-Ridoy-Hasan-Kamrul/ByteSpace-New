import { useCallback, useState } from 'react';

export const useCreatorFollow = () => {
  const [following, setFollowing] = useState(false);

  const handleFollowToggle = useCallback(() => {
    setFollowing((isFollowing) => !isFollowing);
  }, []);

  return { following, handleFollowToggle };
};
