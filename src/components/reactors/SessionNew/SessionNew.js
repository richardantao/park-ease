import React, { Component } from "react";

import { 
    Row, Col,
    Form, FormGroup, Label, Input, Button
} from "reactstrap"; 

import "./SessionNew.scss";

export default class SessionNew extends Component {
    state = {
        price: "$34"
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    changePrice = () => {
        this.setState({ price: "$48" });
    };

    render() {
        const { price } = this.state;
        
        return (
            <Form id="checkout">
                <h3>Checkout</h3>
                <FormGroup>
                    <Row>
                        <Col>
                            <Label>Start Time</Label>
                            <Input
                                type="select"

                            >
                                <option selected>
                                    April 7, 3:30 PM
                                </option>
                            </Input>
                        </Col>
                        <Col>
                            <Label>End Time</Label>
                            <Input
                                type="select"
                                onChange={this.changePrice}
                            >
                                <option selected>
                                    April 7, 6:30 PM
                                </option>
                                <option>
                                    April 7, 7:00 PM
                                </option>
                                <option>
                                    April 7, 7:30 PM
                                </option>
                                <option>
                                    April 7, 8:00 PM
                                </option>
                                <option>
                                    April 7, 8:30 PM
                                </option>
                                <option>
                                    April 7, 9:00 PM
                                </option>
                                <option>
                                    April 7, 9:30 PM
                                </option>
                                <option>
                                    April 7, 10:00 PM
                                </option>
                                <option>
                                    April 7, 10:30 PM
                                </option>
                                <option>
                                    April 7, 11:00 PM
                                </option>
                                <option>
                                    April 7, 10:30 PM
                                </option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Label>Price</Label>
                            <Input
                                name=""
                                type="text"
                                value={price}
                                onChange={this.handleChange}
                                disabled
                                
                            />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Button type="button">Cancel</Button>
                    <Button href="/app/sessions" color="primary">Book Session</Button>
                </FormGroup>
            </Form>
        );
    };
};