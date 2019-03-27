const graphql = require('graphql');
const db = require('./../model/db');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const ComboType = new GraphQLObjectType({
  name: 'Combo',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    combo: {
      type: ComboType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return db
          .query('SELECT * FROM combo WHERE id = $1;', [args.id])
          .then(data => data)
          .catch(e => console.log(`error: ${e}`));
      },
    },

    combos: {
      type: new GraphQLList(ComboType),
      resolve(parent, args) {
        return db
          .query('SELECT * FROM combo;')
          .then(data => data)
          .catch(e => console.log(`error: ${e}`));
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCombo: {
      type: ComboType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return db
          .query('INSERT INTO combo(name, price) VALUES($1, $2) RETURNING *', [
            args.name,
            args.price,
          ])
          .then(data => data)
          .catch(e => console.log(`error: ${e}`));
      },
    },
    deleteCombo: {
      type: ComboType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return db
          .query('SELECT * FROM listing WHERE id = $1;', [args.id])
          .then(data => {
            const rowCount = db
              .query('DELETE FROM listing WHERE id = $1', [args.id])
              .then(deletedData => deletedData.rowCount)
              .catch(e => console.log(`error: ${e}`));
            return { ...data, rowCount };
          })
          .catch(e => console.log(`error: ${e}`));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
