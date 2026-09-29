import React, { memo } from 'react';
import { SOCIAL_ICON_SIZE, SOCIAL_PROVIDERS } from './signInCopy';

const SocialButton = memo(({ provider }) => (
  <button type="button" className="sign-in-social-button" aria-label={provider.label}>
    <img src={provider.icon} alt="" width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} />
  </button>
));

SocialButton.displayName = 'SocialButton';

const SignInSocial = memo(({ divider }) => (
  <div className="sign-in-social">
    <p className="sign-in-divider">
      <span />
      {divider}
      <span />
    </p>
    <div className="sign-in-providers">
      {SOCIAL_PROVIDERS.map((provider) => (
        <SocialButton key={provider.id} provider={provider} />
      ))}
    </div>
  </div>
));

SignInSocial.displayName = 'SignInSocial';

export default SignInSocial;
