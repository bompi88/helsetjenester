import { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';

class HealthService extends Component {

  phoneHome(phone, event) {
    window.location.href = `tel://${phone}`;
  }

  sendEmail(email) {
    window.location.href = `mailto:${email}`;
  }

  gotoSite(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  renderPhone() {
    const { phone } = this.props;
    return (
      <List.Item className='contact-button' onClick={this.phoneHome.bind(this, phone)}>
        <Icon
          size='large'
          color='olive'
          name='mobile'
        />
      </List.Item>
    );
  }

  renderEmail() {
    const { email } = this.props;
    return (
      <List.Item className='contact-button' onClick={this.sendEmail.bind(this, email)}>
        <Icon
          size='large'
          color='olive'
          name='mail'
        />
      </List.Item>
    );
  }

  renderWebsite() {
    const { website } = this.props;
    return (
      <List.Item className='contact-button' onClick={this.gotoSite.bind(this, website)}>
        <Icon
          size='large'
          color='olive'
          name='linkify'
        />
      </List.Item>
    );
  }

  render() {

    const {
      name,
      street,
      postNr,
      postName,
      phone,
      email,
      website
    } = this.props;

    return (
      <List.Item>
        <List.Content>
          <List.Header>{name}</List.Header>
          { street ? <List.Description>{street}, {postNr} {postName}</List.Description> : null }
          <List horizontal floated='left'>
            { phone ? this.renderPhone() : null }
            { email ? this.renderEmail() : null }
            { website ? this.renderWebsite() : null }
          </List>
        </List.Content>

      </List.Item>
    );
  }
}

export default HealthService;
