import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="max-w-7xl mx-auto px-8 py-4 text-sm font-medium text-on-surface-variant/60 flex items-center space-x-2">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <React.Fragment key={to}>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            {last ? (
              <span className="text-primary font-bold capitalize">{value.replace(/-/g, ' ')}</span>
            ) : (
              <Link to={to} className="hover:text-primary transition-colors capitalize">
                {value.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
