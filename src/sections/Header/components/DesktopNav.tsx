import { Link, useLocation } from 'react-router-dom';

export const DesktopNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto] gap-8">
      <Link
        to="/"
        className={`box-border caret-transparent transition-colors ${
          isActive('/') ? 'text-teal-500 font-bold' : 'text-gray-600 hover:text-teal-500'
        }`}
      >
        Startseite
      </Link>
      <Link
        to="/about"
        className={`box-border caret-transparent transition-colors ${
          isActive('/about') ? 'text-teal-500 font-bold' : 'text-gray-600 hover:text-teal-500'
        }`}
      >
        Über mich
      </Link>
      <Link
        to="/services"
        className={`box-border caret-transparent transition-colors ${
          isActive('/services') ? 'text-teal-500 font-bold' : 'text-gray-600 hover:text-teal-500'
        }`}
      >
        Dienstleistungen
      </Link>
      <Link
        to="/portfolio"
        className={`box-border caret-transparent transition-colors ${
          isActive('/portfolio') || location.pathname.startsWith('/portfolio/') ? 'text-teal-500 font-bold' : 'text-gray-600 hover:text-teal-500'
        }`}
      >
        Portfolio
      </Link>
      <Link
        to="/contact"
        className="text-white bg-teal-500 box-border caret-transparent px-4 py-2 rounded-full hover:bg-teal-600 transition-colors"
      >
        Kontakt
      </Link>
    </nav>
  );
};
