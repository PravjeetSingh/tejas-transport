import { NavLink, Link } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* LOGO */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-mark">
            T
          </div>

          <div className="brand-text">
            <strong>TEJAS</strong>
            <span>TRANSPORT</span>
          </div>
        </Link>


        {/* NAVIGATION */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink
            to="/"
            className={navClass}
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={navClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/fleet"
            className={navClass}
            onClick={closeMenu}
          >
            Fleet
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>


        {/* PHONE */}
<a
  href="tel:+919725105062"
  className="nav-contact"
>
  <FiPhone />
  <span>Contact Us</span>
</a>


        {/* MOBILE MENU */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;