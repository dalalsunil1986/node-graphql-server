const { getUserId } = require('../utils')

const User = {
    email: {
        fragment: `fragment UserId on User { id }`,
        resolve: async (parent, args, ctx, info) => {
            try {
                const userId = getUserId(ctx)

                if (parent.id === userId) {
                    return parent.email
                } else {
                    return null
                }
            } catch (e) {
                return null
            }
        },
    },
}

module.exports = { User }