//  import React from 'react';
//  import {GoogleMapLoader,GoogleMap} from 'react-google-maps';
// import { GoogleMap, Marker, SearchBox } from "react-google-maps";


//   export default (props) =>{
//     return(
//         <GoogleMapLoader
//         containerElement={<div style={{height:'100%'}}/>}
//         googleMapElement={
//             <GoogleMap defaultZoom={12} defaultCenter={{lat:-87.0832,lng:37.128979}}/>
//         }

//         />
       
       
//     );
// };



//---------------------------------------
// import React, { Component } from 'react';
// import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
 
// export default function SimpleMap (props) {
//   return (
//     <section style={{height: "100%"}}>
//       <GoogleMapLoader
//         containerElement={
//           <div
//             {...props.containerElementProps}
//             style={{
//               height: "100%",
//             }}
//           />
//         }
//         googleMapElement={
//           <GoogleMap
//             ref={(map) => console.log(map)}
//             defaultZoom={3}
//             defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//             onClick={props.onMapClick}
//           >
           
//           </GoogleMap>
//         }
//       />
//     </section>
//   );
// }

//-------------------------
// import {default as React, Component} from "react";
// import {GoogleMapLoader,GoogleMap} from 'react-google-maps';
//  class SimpleMap extends Component {    
//   render () {   
//     return (  
//       <GoogleMapLoader
//         containerElement={
//           <div           
//             style={{
//               height: "100%",
//             }}
//           />
//         }
//         googleMapElement={
//           <GoogleMap
//             ref={(map) => console.log(map)}
//             defaultZoom={3}
//             defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//           >
           
//           </GoogleMap>
//         }
//       />
 
//   );
//   }
// }

// export default SimpleMap;

//----------------

// import {default as React, Component} from "react";
// import {GoogleMapLoader,GoogleMap} from 'react-google-maps';

//  var GoogleMap = React.createClass({
//     getDefaultProps: function () {
//         return {
//             initialZoom: 6,
//             mapCenterLat: 53.5333,
//             mapCenterLng: -113.4073126
//         };
//     },
//     componentDidMount: function (rootNode) {
//         var mapOptions = {
//                 center: this.mapCenterLatLng(),
//                 zoom: this.props.initialZoom
//             },
//             map = new google.maps.Map(this.getDOMNode(), mapOptions);
//         var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
//         this.setState({map: map});
//     },
//     mapCenterLatLng: function () {
//         var props = this.props;

//         return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
//     },
//     render: function () {

//         return (
//             <div className='map-gic'></div>
//             );
//     }
// });

// module.exports = GoogleMap;


//--------------------------------

/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMapExample extends Component {

  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}