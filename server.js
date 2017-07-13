const express = require('express');
const next = require('next');
const fetch = require('isomorphic-fetch');
const _ = require('lodash');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/healthservices/:lat/:lng', (req, res) => {
    const { lat, lng } = req.params;

    fetch(`http://data.helsenorge.no/healthservices?$top=10&latitude=${lat}&longitude=${lng}`, {
      method: 'get',
    }).then((response) => {
      if (!response.ok) {
        res.status(response.status).end();
  		}
      return response.json();
  	}).then(function(services) {
      const data = _.map(services, ({
        DisplayName: name,
        VisitAddressStreet: street,
        VisitAddressPostNr: postNr,
        VisitAddressPostName: postName,
        Phone: phone,
        Email: email,
        Web: website
      }) => {
        return {
          name,
          street,
          postNr,
          postName,
          phone,
          email,
          website
        }
      });
      res.status(200).send(data).end();
  	}).catch((error) => {
      throw error;
    });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
