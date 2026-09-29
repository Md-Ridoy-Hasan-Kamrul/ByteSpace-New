import React, { memo } from 'react';
import { useSEO } from '../hooks/useSEO';
import RegisterContent from '../components/register/RegisterContent';
import { SEO_REGISTER } from '../components/register/registerCopy';

const Register = memo(() => {
  useSEO(SEO_REGISTER);

  return <RegisterContent />;
});

Register.displayName = 'Register';

export default Register;
