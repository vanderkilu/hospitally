function institution(parent, args, context) {
    context.prisma.user({id: parent.id}).institution()
}

module.exports = {
    institution
}