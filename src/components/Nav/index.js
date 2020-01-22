import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export default function(props) {
  return (
    <Nav>
      {props.children}
      <ul>
        <NavLink to="/" className="nav-link" exact>
          Gallery
        </NavLink>
      </ul>
    </Nav>
  );
}
