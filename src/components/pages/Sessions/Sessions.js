import React, { Component } from "react";
import Helmet from "react-helmet";

import { Collapse, Button, Card, CardBody, CardTitle, Row, Col, CardLink, CardSubtitle, CardImg } from "reactstrap";

import Nav from "../../organisms/Nav";

import "./Sessions.scss";
import dundas from "../../organisms/Deck/dundas.png"

export default class Sessions extends Component {
    state = {
        isOpen: false
    };  

    toggle = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };  

    render() {
        const { isOpen } = this.state;

        return (
            <>
            <Helmet>
                <title>ParkEz | Checkout</title>
            </Helmet>
            <Nav isAuthenticated={true} />
            <main id="sessions">
                <h1>
                    Sessions
                </h1>
                <small>Manage past and current Parking Sessions.</small>
    
                <div id="current">
                    <h3>Current Sessions</h3>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                        { isOpen ? "Hide Current Sessions" : "Show Current Sessions" }
                    </Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                        <CardBody>
                                <CardTitle>
                                    <h3>180 Dundas St. W</h3>
                                </CardTitle>
                                <CardSubtitle>
                                    <Row>
                                        <Col xs="9" sm="9" md="9" lg="9" xl="9">
                                            <h6>Today 3:30-6:30 PM</h6>
                                        </Col>
                                        <Col xs="3" sm="3" md="3" lg="3" xl="3">
                                            <h6>$48</h6>
                                        </Col>
                                    </Row>
                                </CardSubtitle>
                            </CardBody>
                            <CardImg src={dundas} width="100%" alt="no cap"/>
                            <CardBody>
                                <CardLink href="#">Manage Session</CardLink>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div id="past">
                    <h3>Past Sessions</h3>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                        Show Past Sessions
                    </Button>
                </div>
            </main>
            </>  
        );
    }
}