import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function(props) {
  return (
    <nav>
      {props.children}
      <ul>
        <NavLink to="/" className="nav-link" exact>
          Gallery
        </NavLink>
      </ul>
    </nav>
  );
}
