import { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import fetch from 'isomorphic-fetch';

class GoogleMapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { marker: null };
    this.onMapLoad = this.onMapLoad.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.fetchHealthServices = this.fetchHealthServices.bind(this);
  }

  onMapLoad(...args) {
    console.log('map loaded', args);
  }

  fetchHealthServices(lat, lng) {
    console.log(`http://data.helsenorge.no/healthservices?$top=10&latitude=${lat}&longitude=${lng}`)
    fetch(`http://data.helsenorge.no/healthservices?$top=10&latitude=${lat}&longitude=${lng}`)
    .then(function(response) {
  		if (response.status >= 400) {
  			throw new Error('Bad response from server');
  		}
      console.log(response);
  		return response.json();
  	});
  }

  onMapClick({ latLng }) {
    this.setState({
      marker: {
        position: latLng,
        defaultAnimation: 2,
        key: Date.now()
      }
    });
    this.fetchHealthServices(latLng.lat(), latLng.lng());
  }

  render() {

    return (
      <GoogleMap
        ref={this.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 66.1, lng: 13.4 }}
        onClick={this.onMapClick}
      >
        { this.state.marker ?
          <Marker
            {...this.state.marker}
          /> : null
        }
      </GoogleMap>
    );
  }
}

export default withGoogleMap(GoogleMapContainer);
