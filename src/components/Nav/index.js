import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.nav`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
`;
const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  max-width: 90%;
  margin: 0 auto;
`;

const NavList = styled.ul`
  margin: auto 0;
`;

const StyledNavLink = styled(NavLink)`
  margin: auto 5px;
  border: 2px white solid;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: bolder;
  cursor: pointer;
`;

export default function(props) {
  return (
    <Wrapper>
      <Nav>
        {props.children}
        {/* TODO: ADD THIS BACK IN ONCE MORE OF THE FLOW IS IN THERE */}
        {/* {window.screen.width > 760 && (
          <NavList>
            <StyledNavLink to="/" className="nav-link" exact>
              Gallery
            </StyledNavLink>
            <StyledNavLink to="/" className="nav-link" exact>
              Settings
            </StyledNavLink>
            <StyledNavLink to="/" className="nav-link" exact>
              About
            </StyledNavLink>
          </NavList>
        )} */}
      </Nav>
    </Wrapper>
  );
}
