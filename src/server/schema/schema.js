const graphql = require('graphql');
const db = require('./../model/db');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
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
    price: { type: GraphQLFloat },
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
          .catch(err => console.log(err.stack));
      },
    },

    combos: {
      type: new GraphQLList(ComboType),
      resolve(parent, args) {
        return db
          .query('SELECT * FROM combo;')
          .then(res => res.rows)
          .catch(err => console.log(err.stack));
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
        price: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve(parent, args) {
        return db
          .query('INSERT INTO combo(name, price) VALUES($1, $2) RETURNING *', [
            args.name,
            args.price,
          ])
          .then(data => data)
          .catch(err => console.log(err.stack));
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
              .catch(err => console.log(err.stack));
            return { ...data, rowCount };
          })
          .catch(err => console.log(err.stack));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
