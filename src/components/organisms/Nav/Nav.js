import React, { Component } from "react";

import AppLinks from "../../molecules/AppLinks";
import AuthLinks from "../../molecules/AuthLinks";

import "./Nav.scss";

export default ({ isAuthenticated }) => {
    return (
        <nav id="nav" role="navigation">
            { isAuthenticated ? <AppLinks/> : <AuthLinks/> }
        </nav>
    );  
};