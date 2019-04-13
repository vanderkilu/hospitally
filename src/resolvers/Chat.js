function postedBy(parent, args, context) {
    return context.prisma.chat({id: parent.id}).postedBy()
}

module.exports = {
    postedBy
}