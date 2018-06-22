const express = require('express');

const app = express();

const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
    
}));

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('now listening for requests on port 4000');
})