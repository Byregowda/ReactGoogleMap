 import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
// // import SearchBar from './search';

//   import SimpleMapExample from './googlemap';

// //  export default class App extends Component {
// //   render() {
    
// //     //  const lon= lon;
// //     //  const lat= lat;

// //     //const {lon,lat}= cityData.city.coord;
// //     // <GoogleMap lon={lon} lat={lat}/>
// //     //<GoogleMap lon={-87.0832} lat={37.128979}/>
    
// //     return (
// //       <div>
      
// //       <SearchBar/>
// //       <GoogleMap mlat="55.0000" mlong="-113.0000"/>
     
       
// //       </div>
// //     );
// //   }
// // }
// // ReactDOM.render(<App />, document.querySelector('.container'));

// <SimpleMapExample />

//-------------------------------------------------
// var React = require('react');

// var Search = require('./Search');
// var Map = require('./Map');
// var CurrentLocation = require('./CurrentLocation');
// var LocationList = require('./LocationList');


// var App = React.createClass({

// 	getInitialState(){

// 		// Extract the favorite locations from local storage

// 		var favorites = [];

// 		if(localStorage.favorites){
// 			favorites = JSON.parse(localStorage.favorites);
// 		}

// 		// Nobody would get mad if we center it on Paris by default

// 		return {
// 			favorites: favorites,
// 			currentAddress: 'Paris, France',
// 			mapCoordinates: {
// 				lat: 48.856614,
// 				lng: 2.3522219
// 			}
// 		};
// 	},

// 	toggleFavorite(address){

// 		if(this.isAddressInFavorites(address)){
// 			this.removeFromFavorites(address);
// 		}
// 		else{
// 			this.addToFavorites(address);
// 		}

// 	},

// 	addToFavorites(address){

// 		var favorites = this.state.favorites;

// 		favorites.push({
// 			address: address,
// 			timestamp: Date.now()
// 		});

// 		this.setState({
// 			favorites: favorites
// 		});

// 		localStorage.favorites = JSON.stringify(favorites);
// 	},

// 	removeFromFavorites(address){

// 		var favorites = this.state.favorites;
// 		var index = -1;

// 		for(var i = 0; i < favorites.length; i++){

// 			if(favorites[i].address == address){
// 				index = i;
// 				break;
// 			}

// 		}

// 		// If it was found, remove it from the favorites array

// 		if(index !== -1){
			
// 			favorites.splice(index, 1);

// 			this.setState({
// 				favorites: favorites
// 			});

// 			localStorage.favorites = JSON.stringify(favorites);
// 		}

// 	},

// 	isAddressInFavorites(address){

// 		var favorites = this.state.favorites;

// 		for(var i = 0; i < favorites.length; i++){

// 			if(favorites[i].address == address){
// 				return true;
// 			}

// 		}

// 		return false;
// 	},

// 	searchForAddress(address){
		
// 		var self = this;

// 		// We will use GMaps' geocode functionality,
// 		// which is built on top of the Google Maps API

// 		GMaps.geocode({
// 			address: address,
// 			callback: function(results, status) {

// 				if (status !== 'OK') return;

// 				var latlng = results[0].geometry.location;

// 				self.setState({
// 					currentAddress: results[0].formatted_address,
// 					mapCoordinates: {
// 						lat: latlng.lat(),
// 						lng: latlng.lng()
// 					}
// 				});

// 			}
// 		});

// 	},

// 	render(){

// 		return (

// 			<div>
// 				<h1>Your Google Maps Locations</h1>

// 				<Search onSearch={this.searchForAddress} />

// 				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />

// 				<CurrentLocation address={this.state.currentAddress} 
// 					favorite={this.isAddressInFavorites(this.state.currentAddress)} 
// 					onFavoriteToggle={this.toggleFavorite} />

// 				<LocationList locations={this.state.favorites} activeLocationAddress={this.state.currentAddress} 
// 					onClick={this.searchForAddress} />

// 			</div>

// 		);
// 	}

// });

// module.exports = App;


// ------------------

export default class  App extends React.Component {
 

  // static propTypes() {
  // 	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  // }

	render() {
    const state=state = { zoom: 10 };
    return <div className="GMap">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()
    this.infoWindow = this.createInfoWindow()
  
    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  createMap() {
    let mapOptions = {
    
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }
  
  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}

var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));




