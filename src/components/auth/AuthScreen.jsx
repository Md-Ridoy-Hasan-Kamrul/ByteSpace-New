import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { HOME_LOGO, LOGO_HEIGHT, LOGO_WIDTH } from '../home/homeAssets';
import { BRAND_NAME } from './registerCopy';
import RegisterShowcase from './RegisterShowcase';
import '../home/home.css';
import './register.css';

// Shared Figma auth layout for Register (47:351) and Login (49:195).
const AuthScreen = memo(({ title, body, children }) => (
  <main className="register-page">
    <div className="register-shell">
      <Link to={ROUTES.HOME} className="register-logo" aria-label={BRAND_NAME}>
        <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </Link>
      <div className="register-layout">
        <section className="register-story">
          <h2>{title}</h2>
          <p>{body}</p>
          <RegisterShowcase />
        </section>
        {children}
      </div>
    </div>
  </main>
));

AuthScreen.displayName = 'AuthScreen';

export default AuthScreen;
