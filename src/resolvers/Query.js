function hospital(parent, args, context, info) {
    return context.prisma.hospital({id: args.id})
}

function hospitals(parent, args,context, info) {
    return context.prisma.hospitals()
}

function locations(parent, args, context, info) {
    return context.prisma.locations()
}

function hospitalsByCity(parent, args, context, info) {
    return context.prisma.hospitals({
        where: {
            location: {
                city: args.city
            }
        }
    })
}
function nearestHospital(parent, args,context, info) {
    const lat = args.latitude
    const long = args.long
    return null    
}

module.exports = {
    hospital,
    hospitals,
    locations,
    hospitalsByCity
}