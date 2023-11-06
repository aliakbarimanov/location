import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <ul className="menuList">
        <li className="menuItem">
          <Link to="/">Home</Link>
        </li>
        <li className="menuItem">
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
