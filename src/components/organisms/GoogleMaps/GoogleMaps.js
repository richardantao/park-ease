import React, { Component } from "react";

import GoogleMapComponentWithMarker from '../Maps';

import { Container, Label, Input } from "reactstrap";

import "./GoogleMaps.scss";

class MapWrapper extends Component {
    render() {
      return (
        <Container className="wrapper">
                <Label>Search Address</Label>
                <Input
                    placeholder="195 Adelaide Street West"
                    style={{
                        marginBottom: "1rem"
                    }}
                />
            <GoogleMapComponentWithMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDF--eFWTCmRhZLh96nUwBH5W6AQEreXQU"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Container>
      )
    }
};

export default MapWrapper;