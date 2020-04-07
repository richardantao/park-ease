import React, { Component } from "react";
import Helmet from "react-helmet";

import { Container } from "reactstrap";

import Nav from "../../organisms/Nav";
import Signin from "../../reactors/Signin";

export default class Login extends Component {
    render() {
        return (
            <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Login</title>
            </Helmet>
            <Nav/>
            <Container>
                <h1>Login</h1>
                <Signin/>
                <a href="#forgot-password">Forgot Password</a><br/>
                <span>Don't have an account?</span> <a href="/register">Sign up</a>
            </Container>
            </>
        );
    }
};