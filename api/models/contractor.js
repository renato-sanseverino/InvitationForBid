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
    getContractor(id: Int!): Contractor!
    allContractors: [Contractor!]!
}

extend type Mutation {
  createContractor(companyName: String, email: String, contactPerson: String, logoImage: String, imgFormat: String): Int
  deleteContractor(id: Int): Int
  # updateContractor(id: Int!): Int
}
`

const resolvers = {
  Query: {
    getContractor: (parent, args) => {
      return prisma.contractor.findUnique({ where: { id: parseInt(args.id) } })
    },
    allContractors: () => {
      return prisma.contractor.findMany()
    }
  },

  Mutation: {
    createContractor: async (parent, args) => {
      await prisma.contractor.create({data: args})
      return args.id;
    },
    deleteContractor: async (parent, args) => {
      await prisma.contractor.delete({
        where: { id: args.id },
      })
      return args.id;
    },
  }
}

export { typeDefs, resolvers }
