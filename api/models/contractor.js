import prisma from '../config/db.js'


const typeDefs = `
type Contractor {
    id: ID!
    companyName: String!
    email: String!
    contactPerson: String
}

type Query {
    allContractors: [Contractor!]!
}
`

const resolvers = {
    Query: {
      allContractors: () => {
        return prisma.contractor.findMany()
      }
    }
}

export { typeDefs, resolvers }
