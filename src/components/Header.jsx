import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Header;
