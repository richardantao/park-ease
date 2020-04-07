import React from "react";
import Helmet from "react-helmet";

import { Container, Row, Col, Alert } from "reactstrap";

import Nav from "../../organisms/Nav";
import Chart from "../../organisms/Chart";

import "./Dashboard.scss";

export default () => {
    return (
        <>
            <Helmet>
                <title>ParkEZ | Dashboard</title>
            </Helmet>
            <Nav isAuthenticated={true} />
            <main id="dashboard">
                <h2>Dashboard</h2>

                    <Container id="flash">
                        <h4>Sessions</h4>
                        <Row>
                            <Col>
                                No current sessions
                            </Col>
                        </Row>
                    </Container>

                    <Container id="pitch">
                        <Alert color="danger">
                            You have an unfinished Checkout. Click <a href="/app/checkout">here</a> to finish your booking.
                        </Alert>
                    </Container>
            </main>
        </>
    );
};  