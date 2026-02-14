import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white box-border caret-transparent overflow-hidden border-gray-200 border-t border-solid md:hidden"
        >
          <Link
            to="/"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Startseite
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/about') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Über mich
          </Link>
          <Link
            to="/services"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/services') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Dienstleistungen
          </Link>
          <Link
            to="/portfolio"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/portfolio') || location.pathname.startsWith('/portfolio/') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/contact') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Kontakt
          </Link>
          <Link
            to="/impressum"
            onClick={onClose}
            className={`box-border caret-transparent block px-6 py-3 hover:bg-gray-100 transition-colors ${
              isActive('/impressum') ? 'text-teal-500 font-bold' : 'text-gray-700'
            }`}
          >
            Impressum
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
