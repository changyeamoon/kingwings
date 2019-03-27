const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

const SERVER = process.env.SERVER || 'http://localhost';
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => console.log(`Listening on ${SERVER}:${PORT}/`));
