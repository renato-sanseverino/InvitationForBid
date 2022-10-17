import express from 'express'
import { typeDefs, resolvers } from './models/all.js'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
// import { nextApi, nextRouter } from 'express-next-api'


const port = 3000;
const app = express();

app.use("/", express.static('../dist'));  // necessário efetuar o build do frontend   Ex.: NPM RUN BUILD
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// setHeader('Access-Control-Allow-Origin', '*')

export const schema = makeExecutableSchema({ resolvers, typeDefs, })
app.use('/api/graphql', graphqlHTTP({ schema, }))
// app.use(nextApi({ base: '/api/routes', directory: 'routes', options: {caseSensitive: false} }))


// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));
