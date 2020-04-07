import React from "react";

import { 
    Row, Col,
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from "reactstrap";

import bay from "./bay.png";
import dundas from "./dundas.png";

import "./Deck.scss";

export default () => {
    return (
        <Row id="deck">
            <Col>
                <Row>
                    <Col>
                        <h3>Nearby Parking Lots</h3>
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
                                            <h6>$39</h6>
                                        </Col>
                                    </Row>
                                </CardSubtitle>
                            </CardBody>
                            <CardImg src={dundas} width="100%" alt="no cap"/>
                            <CardBody>
                                <CardText>
                                    <ul>
                                        <li>
                                            Height Restriction: 6'
                                        </li>
                                        <li>
                                            This facility does NOT allow in/out privileges. You CANNOT enter &amp; exit more than once.
                                        </li>
                                    </ul>
                                </CardText>
                                <CardLink href="#checkout">Book Now</CardLink>
                            </CardBody>
                        </Card>
                    </Col>  
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <CardTitle>
                                <h3>539 Bay St.</h3>
                            </CardTitle>
                            <CardSubtitle>
                                <Row>
                                    <Col xs="9" sm="9" md="9" lg="9" xl="9">
                                        <h6>Today 3:30-6:30 PM</h6>
                                    </Col>
                                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                                        <h6>$44</h6>
                                    </Col>
                                </Row>
                            </CardSubtitle>
                            </CardBody>
                            <CardImg width="100%" src={bay} alt="No cap" />
                            <CardBody>
                            <CardText>
                                <ul>
                                    <li>
                                        Height Restriction: 6' 7"
                                    </li>
                                    <li>
                                        This facility does NOT allow in/out privileges. You CANNOT enter &amp; exit more than once.
                                    </li>
                                </ul>
                            </CardText>
                            <CardLink href="#checkout">Book Now</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>     
        </Row>
    );
};