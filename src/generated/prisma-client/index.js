"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Hospital",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Chat",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/kweku_kilu-e1b4f5/Hospitally/dev`
});
exports.prisma = new exports.Prisma();
