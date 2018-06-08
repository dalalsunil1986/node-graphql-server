const { extractFragmentReplacements } = require('prisma-binding')
const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { AuthPayload } = require('./AuthPayload')
const { User } = require('./User')

const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  Subscription,
  AuthPayload,
  User
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

module.exports = { resolvers, fragmentReplacements}