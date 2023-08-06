import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        vhi<span>web</span>
      </Link>
    </header>
  );
};

export default Header;
