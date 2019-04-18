require('dotenv').config();
const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const SERVER = process.env.SERVER || 'http://localhost';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use(
  '/api/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/api/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on ${SERVER}:${PORT}/`));
