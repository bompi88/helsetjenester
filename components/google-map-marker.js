import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/addons/InfoBox';
import { List, Icon } from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';

import HealthService from './health-service';

class GoogleMapMarker extends Component {

  constructor(props) {
    super(props);

    this.fetchHealthServices = this.fetchHealthServices.bind(this);

    const { position } = props;

    this.fetchHealthServices(position.lat(), position.lng());
    this.state = {
      services: [],
    };
  }

  fetchHealthServices(lat, lng) {
    fetch(`/healthservices/${lat}/${lng}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((services) => {
      this.setState({ services });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { onMouseEnterHandler, onMouseLeaveHandler } = this.props;
    const hasContent = this.state.services.length;

    return (
      <Marker {...this.props}>
        <InfoBox
          onCloseClick={() => {}}
          onDomReady={() => {}}
          onZIndexChanged={() => {}}
          options={{ enableEventPropagation: true }}
        >
          <div
            className="scrollable"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            { hasContent ? (
              <List divided relaxed>
                {this.state.services.map(service => (
                  <HealthService key={service.name} {...service} />
                ))}
              </List>
            ) : <Icon loading name="notched circle" /> }
          </div>
        </InfoBox>
      </Marker>
    );
  }
}
export default GoogleMapMarker;
