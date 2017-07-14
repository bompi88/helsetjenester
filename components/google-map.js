import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import GoogleMapMarker from './google-map-marker';

class GoogleMapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { marker: null, hover: false };
    this.onMapClick = this.onMapClick.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMapClick({ latLng }) {
    if (!this.state.hover) {
      this.setState({
        marker: {
          position: latLng,
          defaultAnimation: 0,
          key: Date.now(),
        },
      });
    }
  }

  onMouseEnterHandler() {
    this.setState({ hover: true });
  }

  onMouseLeaveHandler() {
    this.setState({ hover: false });
  }

  render() {
    const mapOptions = {
      scrollwheel: !this.state.hover,
      zoomControlOptions: {
        style: 'SMALL',
      },
      mapTypeControlOptions: {
        position: 'BOTTOM_RIGHT',
      },
      draggable: !this.state.hover,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: false,
      panControl: false,
    };
    return (
      <GoogleMap
        ref={this.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 66.1, lng: 13.4 }}
        onClick={this.onMapClick}
        options={mapOptions}
      >
        { this.state.marker ? (
          <GoogleMapMarker
            onMouseEnterHandler={this.onMouseEnterHandler}
            onMouseLeaveHandler={this.onMouseLeaveHandler}
            {...this.state.marker}
          />
        ) : null }
      </GoogleMap>
    );
  }
}

export default withGoogleMap(GoogleMapContainer);
