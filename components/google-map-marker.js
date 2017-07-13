import { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import { List, Icon } from 'semantic-ui-react';

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
    const hasContent = this.state.services.length;
    return (
      <Marker {...this.props}>
        <InfoWindow
          onCloseClick={() => {}}
          onDomReady={() => {}}
          onZIndexChanged={() => {}}
        >
          { hasContent ? (
            <List divided relaxed>
              {this.state.services.map((service) => {
                return <HealthService {...service}/>;
              })}
            </List>
          ) : <Icon loading name='notched circle'/> }
        </InfoWindow>
      </Marker>
    );
  }
}
export default GoogleMapMarker;
