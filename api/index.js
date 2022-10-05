import  express  from 'express'
import prisma from './config/db.js'
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';


const port = 3000;
const app = express();

app.use("/", express.static('../dist'));  // necessário efetuar o build do frontend   Ex.: NPM RUN BUILD
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// setHeader('Access-Control-Allow-Origin', '*')


const typeDefs = `
type Item {
    id: ID!
    name: String!
    avgPrice: Float!
    unitOfMeasurement: String!
    itemGroup: Int
}

type Query {
    allItems: [Item!]!
}`


const resolvers = {
  Query: {
    allItems: () => {
      return prisma.item.findMany();
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});


app.use('/api/graphql', graphqlHTTP({ schema, }));

// inicia a API escutando na porta 3000
app.listen(port, () => console.log('Express escutando chamadas na porta ' + port));
