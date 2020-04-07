import React, { Component } from "react";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "./Signin.scss";

export default class Signin extends Component {
    state = {
        email: "",
        password: ""
    };  

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, password } = this.state;  

        return (
            <Form >
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />

                    <Label for="password">Password</Label>
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button href="/app/dashboard" color="primary">Login</Button>                        
                </FormGroup>
            </Form>
        );
    };  
};