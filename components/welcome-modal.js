import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class WelcomeModal extends Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = {
      open: true,
    };
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Modal basic open={this.state.open} size="small">
        <Header content="Velkommen" />
        <Modal.Content>
          <p>Denne tjenesten hjelper deg med å finne helsetjenester i nærområdet ditt. Klikk på kartet der du befinner deg, så vil du få opp en liste av de ti nærmeste helsetjenestene.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={this.close}>
            <Icon name="checkmark" /> OK
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default WelcomeModal;
