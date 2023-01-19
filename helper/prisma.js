// PRISMA CLIENT NEED TO BE EXPORTED FOR CACHING FROM THIS FILE
// PLEASE DON'T CALL new PrismaClient(); FROM OTHER FILES
// REFERENCE https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
const { PrismaClient } = require('../prisma/client')
exports.prisma = new PrismaClient();