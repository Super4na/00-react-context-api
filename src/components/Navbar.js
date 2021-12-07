// src/components/Navbar.js

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
