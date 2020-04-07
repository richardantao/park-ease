import React, { Component } from "react";
import Helmet from "react-helmet";


import Nav from "../../organisms/Nav";
import Maps from "../../organisms/Maps";
import MapsWrapper from "../../organisms/GoogleMaps";
import Deck from "../../organisms/Deck";
import SessionNew from "../../reactors/SessionNew";

export default class Checkout extends Component {
    state = {
        lots: [
            {
                id: 1, 
                latitude: 43.6554098, 
                longitude: -79.3885643
            },
            {
                id: 2, 
                latitude: 43.6551433, 
                longitude: -79.385326
            }
        ]
    }
    render() {
        const { lots } = this.state;

        return (
            <>
            <Helmet>
                <title>ParkEz | Checkout</title>
            </Helmet>
                <Nav isAuthenticated={true}/>
                {/* <Maps lots={lots}/>
                 */}
                <MapsWrapper/>
                <Deck/>
                <SessionNew/>
            </>
        );
    };
};