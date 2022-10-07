import prisma from '../config/db.js'


const typeDefs = `
type Item {
    id: ID!
    name: String!
    description: String
    avgPrice: Float!
    image: String
    banner: String
    unitOfMeasurement: String!
    itemGroup: Int
}

type Query {
    allItems: [Item!]!
}
`

const resolvers = {
  Query: {
    allItems: () => {
      return prisma.item.findMany()
    }
  }
}

export { typeDefs, resolvers }
