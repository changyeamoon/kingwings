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

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    item: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return db
          .query('SELECT * FROM item WHERE id = $1;', [args.id])
          .then(data => data)
          .catch(err => console.log(err.stack));
      },
    },

    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return db
          .query('SELECT * FROM item;')
          .then(res => res.rows)
          .catch(err => console.log(err.stack));
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addItem: {
      type: ItemType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve(parent, args) {
        return db
          .query('INSERT INTO item(name, price) VALUES($1, $2) RETURNING *', [
            args.name,
            args.price,
          ])
          .then(data => data)
          .catch(err => console.log(err.stack));
      },
    },
    deleteItem: {
      type: ItemType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return db
          .query('SELECT * FROM item WHERE id = $1;', [args.id])
          .then(data => {
            const rowCount = db
              .query('DELETE FROM item WHERE id = $1', [args.id])
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
