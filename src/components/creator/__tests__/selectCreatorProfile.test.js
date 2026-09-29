import { CREATOR_ID, CREATOR_PROFILE, selectCreatorProfile } from '../creatorCopy';

describe('selectCreatorProfile', () => {
  it('returns the studio profile for the designed creator', () => {
    expect(selectCreatorProfile(CREATOR_ID)).toBe(CREATOR_PROFILE);
  });

  it('returns nothing for an unknown creator', () => {
    expect(selectCreatorProfile('unknown-studio')).toBeNull();
  });
});
