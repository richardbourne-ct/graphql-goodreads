const nodeFetch = require('node-fetch');
const util = require('util');
require('util.promisify').shim();
const parseXML = util.promisify(require('xml2js').parseString);
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const apiKey = 'fNV3EI3jVewDJoVnVlBdGg';
// nodeFetch(`https://www.goodreads.com/author/show/18541?format=xml&key=${apiKey}`) /*?.*/
//   .then(response => response.text()) /*?.*/
//   .then(parseXML) /*?.*/
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '',
    fields: () => ({
        name: { type: GraphQLString }
    })
});
module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '',
        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: { type: GraphQLInt }
                }
            }
        })
    })
});
//# sourceMappingURL=schema.js.map