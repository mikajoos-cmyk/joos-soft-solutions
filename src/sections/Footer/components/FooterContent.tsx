import { Link, useLocation } from 'react-router-dom';

export const FooterContent = () => {
  const location = useLocation();

  return (
    <div className="box-border caret-transparent max-w-none text-center w-full mx-auto px-6 py-8 md:max-w-screen-xl">
      <p className="text-xl font-extrabold box-border caret-transparent tracking-[-1px] leading-7">
        Joos{" "}
        <span className="text-teal-500 box-border caret-transparent">Soft</span>
        Solutions
      </p>
      <div className="box-border caret-transparent flex justify-center mt-4 flex-wrap gap-4">
        <a
          href="https://share.google/dOjPDAtyEdrjBcvM8"
          className="box-border caret-transparent block hover:text-teal-500 transition-colors"
        >
          Udemy
        </a>
        <a
          href="https://de.fiverr.com/s/R7W23bL"
          className="box-border caret-transparent block hover:text-teal-500 transition-colors"
        >
          Fiverr
        </a>
        <Link
          to="/impressum"
          className="box-border caret-transparent block hover:text-teal-500 transition-colors"
        >
          Impressum
        </Link>
      </div>
      <p className="text-gray-400 text-sm box-border caret-transparent leading-5 mt-6">
        © 2025 Joos Soft Solutions. Alle Rechte vorbehalten.
      </p>
    </div>
  );
};
