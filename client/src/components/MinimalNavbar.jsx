import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
const MinimalNavbar = () => {
  const [iconActive, _] = useState(false);
  return (
    <header>
      <nav className="nav minimal">
        <h2 className="nav-logo">
          <NavLink to={"/"}>CareCircle</NavLink>
        </h2>
      </nav>
    </header>
  );
};

export default MinimalNavbar;
