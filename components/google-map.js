import { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import fetch from 'isomorphic-fetch';

import GoogleMapMarker from './google-map-marker';

class GoogleMapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { marker: null, services: [] };
    this.onMapLoad = this.onMapLoad.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapLoad(...args) {
    console.log('Map loaded', args);
  }

  onMapClick({ latLng }) {
    this.setState({
      marker: {
        position: latLng,
        defaultAnimation: 0,
        key: Date.now()
      }
    });
  }

  render() {

    return (
      <GoogleMap
        ref={this.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 66.1, lng: 13.4 }}
        onClick={this.onMapClick}
      >
        { this.state.marker ? <GoogleMapMarker {...this.state.marker} /> : null }
      </GoogleMap>
    );
  }
}

export default withGoogleMap(GoogleMapContainer);
