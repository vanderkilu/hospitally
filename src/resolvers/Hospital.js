function location(parent,args,context) {
    return context.prisma.hospital({id: parent.id}).location()
}
function reviews(parent,args,context) {
    return context.prisma.hospital({id: parent.id}).reviews()
}
function votes(parent,args,context) {
    return context.prisma.hospital({id: parent.id}).votes()
}

module.exports = {
    location,
    reviews,
    votes
}