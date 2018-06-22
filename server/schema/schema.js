const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const _ = require('lodash');

//dummy data

var books = [
    { name: 'Name of the wind', genre: 'fantasy', id: '1'},
    { name: 'Name of the wind 2', genre: 'comedy', id: '2'},
    { name: 'Name of the wind 3', genre: 'drama', id: '3'},
];

const BookType = new GraphQLObjectType ({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve (parent, args){
                //code to get data from db
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
});