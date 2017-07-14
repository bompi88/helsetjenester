import { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import fetch from 'isomorphic-fetch';

import GoogleMapMarker from './google-map-marker';

class GoogleMapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { marker: null, hover: false };
    this.onMapLoad = this.onMapLoad.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMapLoad(...args) {
    console.log('Map loaded', args);
  }

  onMapClick({ latLng }) {
    if (!this.state.hover) {
      this.setState({
        marker: {
          position: latLng,
          defaultAnimation: 0,
          key: Date.now()
        }
      });
    }
  }

  onMouseEnterHandler() {
    console.log('enter')
    this.setState({ hover: true });
  }

  onMouseLeaveHandler() {
    this.setState({ hover: false });
  }

  render() {
    console.log(this.state.hover)
    return (
      <GoogleMap
        ref={this.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 66.1, lng: 13.4 }}
        onClick={this.onMapClick}
      >
        { this.state.marker ? (
          <GoogleMapMarker
            onMouseEnterHandler={this.onMouseEnterHandler}
            onMouseLeaveHandler={this.onMouseLeaveHandler}
            {...this.state.marker} />
        ) : null }
      </GoogleMap>
    );
  }
}

export default withGoogleMap(GoogleMapContainer);
