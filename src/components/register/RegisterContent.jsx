import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { HOME_LOGO, LOGO_HEIGHT, LOGO_WIDTH } from '../home/homeAssets';
import { BRAND_NAME, SIGN_UP_BODY, SIGN_UP_TITLE } from './registerCopy';
import RegisterForm from './RegisterForm';
import RegisterShowcase from './RegisterShowcase';
import '../home/home.css';
import './register.css';

const RegisterContent = memo(() => (
  <main className="register-page">
    <div className="register-shell">
      <Link to={ROUTES.HOME} className="register-logo" aria-label={BRAND_NAME}>
        <img src={HOME_LOGO} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </Link>
      <div className="register-layout">
        <section className="register-story">
          <h2>{SIGN_UP_TITLE}</h2>
          <p>{SIGN_UP_BODY}</p>
          <RegisterShowcase />
        </section>
        <RegisterForm />
      </div>
    </div>
  </main>
));

RegisterContent.displayName = 'RegisterContent';

export default RegisterContent;
