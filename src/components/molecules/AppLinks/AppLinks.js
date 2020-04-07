import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./AppLinks.scss";

export default ({ }) => {
    return (
        <Nav>
          <NavItem>
            <NavLink href="/app/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/app/checkout">Checkout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/app/sessions">Sessions</NavLink>
          </NavItem>
        </Nav>
    );
};