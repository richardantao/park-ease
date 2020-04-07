import React, { Component } from "react";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const GoogleMapComponentWithMarker = props => {
      return ( 
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{
            lat: 43.648677, // latitude for the center of the map
            lng: -79.3885999, // longitude for the center of the map
            }}
            defaultOptions={{
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
            //   styles: styles // change default map styles
            }}
        >

            <Marker
                position={{
                lat: 43.648677, // latitude to position the marker
                lng: -79.3885999 // longitude to position the marker
                }}
            />
        </GoogleMap>
    )
};

export default withScriptjs(withGoogleMap(GoogleMapComponentWithMarker));

// import { Container, Row, Col } from "reactstrap";

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// class Maps extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         lots: [],
//         markers: []
//       }
//     }

//     componentDidMount() {
//       this.setState({
//         markers: this.props.lots.map(({ id, latitude, longitude }) => {
//           return <Marker key={id} id={id} position={{
//             lat: latitude,
//             lng: longitude
//         }}
//         onClick={() => console.log("You clicked me!")} />
//         })
//       });
//     };
    
//     render() {
//       const { markers } = this.state;
//       return (
//           <>
//           <Row id="maps">
//             <input id="pac-input" class="controls" type="text" placeholder="Search Box"></input>
//                 <Map
//                     google={this.props.google}
//                     zoom={11}
//                     style={{
//                         width: '67%',
//                         height: '100%',
//                     }}
                    
//                     initialCenter={{ lat: 43.7184038, lng: -79.518142}}
//                 >
//                     {markers}
//                 </Map> 
//           </Row>
          
//         </>
//       );
//     };
// };

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyDF--eFWTCmRhZLh96nUwBH5W6AQEreXQU"
// })(Maps);