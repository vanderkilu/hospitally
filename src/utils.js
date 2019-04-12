const jwt = require('jsonwebtoken')
const APP_SECRET = 'hospitally'

function getUserId(context) {
    const authorization = context.request.get('Authorization')
    if (authorization) {
        const token = authorization.replace('Bearer ', '')
        const {userId} = jwt.verify(token, APP_SECRET)
        return userId
    }
    throw new Error('Not Authenticated')
}

module.exports =  {
    APP_SECRET,
    getUserId
}