import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/super-heroes">Traditional super heroes</NavLink>
      <NavLink to="/rq-super-heroes">RQ super heroes</NavLink>
    </nav>
  );
}

export default Navbar;
