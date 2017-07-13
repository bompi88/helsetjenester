import Head from 'next/head'
import { Menu } from 'semantic-ui-react'

import GoogleMap from '../components/google-map';

export default () => (
  <div style={{ height: 'calc(100vh - 40px)', marginTop: '40px' }}>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

      <title>Helsetjenestekart</title>

      <script src="https://maps.googleapis.com/maps/api/js"></script>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <Menu inverted fixed='top' borderless style={{ border: 0, margin: 0 }}>
      <Menu.Item name='Helsetjenestekart' active={true} />
    </Menu>
    <GoogleMap
      containerElement={
        <div style={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0
        }} />
      }
      mapElement={
        <div style={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0
        }} />
      }
    />
  </div>
);