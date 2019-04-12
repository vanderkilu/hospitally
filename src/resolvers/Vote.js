function user(parent, args, context) {
    return context.prisma.vote({id: parent.id}).user()
}

function hospital(parent, args, context) {
    return context.prisma.vote({id: parent.id}).hospital()
}

module.exports = {
    user,
    hospital
}