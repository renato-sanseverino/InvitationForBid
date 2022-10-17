import prisma from '../config/db.js'


const typeDefs = `
type Contractor {
    id: ID!
    companyName: String!
    email: String!
    contactPerson: String
    logoImage: String
    imgFormat: String
}

extend type Query {
    allContractors: [Contractor!]!
}

extend type Mutation {
  # createContractor(id: ID!, companyName: String!, email: String!): Contractor!
  deleteContractor(id: Int!): Int
  # updateContractor(id: Int!): Int
}
`

const resolvers = {
  Query: {
    allContractors: () => {
      return prisma.contractor.findMany()
    }
  },

  Mutation: {
    deleteContractor: async (parent, args) => {
      await prisma.contractor.delete({
        where: { id: args.id },
      })
      return args.id;
    },
  }
}

export { typeDefs, resolvers }
