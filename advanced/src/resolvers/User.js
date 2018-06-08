const { getUserId } = require('../utils')

const User = {
    email: {
        fragment: `fragment UserId on User { id }`,
        resolve: async (parent, args, ctx, info) => {
            try {
                const userId = getUserId(ctx)
                return parent.id === userId ? parent.email : null
            } catch (e) {
                return null
            }
        },
    },
}

module.exports = { User }