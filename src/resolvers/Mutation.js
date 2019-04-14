const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { getUserId } = require('../utils')
const APP_SECRET = 'hospitally'

function newHospital(parent, args, context, info) {
    return context.prisma.createHospital({
        name: args.name,
        photoUrl: args.photoUrl,
        status: args.status,
        contact: args.contact,
        email: args.email,
        website: args.website,
        location: {connect: {id: args.locationId}}
    })
}

async function updateHospital(parent, args, context, info) {
    return  context.prisma.updateHospital({
        data: {
            name: args.name,
            photoUrl: args.photoUrl,
            status: args.status,
            contact: args.contact,
            email: args.email,
            website: args.website
        },
        where: {
            id: args.id
        }
    })
}

async function deleteHospital(parent, args, context, info) {
    const deletedHospital = await context.prisma.deleteHospital({
        id: args.id
    })
    return deletedHospital
}

function newLocation(parent, args, context, info) {
    return context.prisma.createLocation({
        address: args.address,
        city: args.city,
        region: args.region,
        longitude: args.longitude,
        latitude: args.latitude
    })
}

function updateLocation(parent, args, context, info) {
    return context.prisma.updateLocation({
        data: {
            address: args.address,
            city: args.city,
            region: args.region,
            longitude: args.longitude,
            latitude: args.latitude
        },
        where: {
            id: args.id
        }
    })
}

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({...args, password})
    const token = jwt.sign({userId: user.id}, APP_SECRET)
    return {
        token,
        user
    }
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({email: args.email})
    if(!user) {
        throw new Error('User not found')
    }
    const isPasswordValid = bcrypt.compare(args.password, user.password)
    if (!isPasswordValid) {
        throw new Error('Invalid Password')
    }
    const token = jwt.sign({userId: user.id}, APP_SECRET)
    return {
        token,
        user
    }
}

function newReview(parent,args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createReview({
        comment: args.comment,
        user:  {connect: {id: userId}},
        hospital: {connect: {id: args.hospital}}
    })
}

function newVote(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createVote({
        user:  {connect: {id: userId}},
        hospital:  {connect: {id: args.hospital}}
    })
}

function newChat(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createChat({
        message: args.message,
        postedBy: {connect: {id: userId}}
    })
}
module.exports = {
    newHospital,
    updateHospital,
    deleteHospital,
    newLocation,
    updateLocation,
    signup,
    login,
    newReview,
    newVote,
    newChat
}