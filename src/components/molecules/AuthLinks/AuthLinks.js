import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default ({ }) => {
    return (
        <>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">capstone</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
            </Nav>
            <NavLink href="/register">Register</NavLink>      
            <NavLink href="/login">Login</NavLink>
          </Navbar>
        </>
    );
};