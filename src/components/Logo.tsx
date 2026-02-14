import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-blue-950 text-2xl font-extrabold box-border caret-transparent block tracking-[-1px] leading-8 hover:opacity-80 transition-opacity"
    >
      Joos{" "}
      <span className="text-teal-500 box-border caret-transparent">Soft</span>
      Solutions
    </Link>
  );
};
