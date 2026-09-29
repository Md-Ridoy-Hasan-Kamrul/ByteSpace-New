import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const HomeLink = memo(({ to, href, className, children, onClick, label }) => {
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick} aria-label={label}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick} aria-label={label}>
      {children}
    </a>
  );
});

HomeLink.displayName = 'HomeLink';

export default HomeLink;
