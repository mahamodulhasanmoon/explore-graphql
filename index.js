const {ApolloServer}= require('apollo-server');
const resolvers = require('./schema/resolvers');
const { typeDefs } = require('./schema/typeDef');






const server = new ApolloServer({typeDefs,resolvers});

server.listen()
.then(({url})=>{
    console.log(`your api is Running :${url}`);
})
