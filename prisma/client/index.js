
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountsScalarFieldEnum = makeEnum({
  id_account: 'id_account',
  full_name: 'full_name'
});

exports.Prisma.CalonScalarFieldEnum = makeEnum({
  id_calon: 'id_calon',
  id_account: 'id_account'
});

exports.Prisma.DukunganScalarFieldEnum = makeEnum({
  id_dukungan: 'id_dukungan',
  id_pemilih: 'id_pemilih',
  id_surveyor: 'id_surveyor',
  level_dukungan: 'level_dukungan',
  id_calon: 'id_calon',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.PemilihScalarFieldEnum = makeEnum({
  id_pemilih: 'id_pemilih',
  id_account: 'id_account'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SurveyorScalarFieldEnum = makeEnum({
  id_surveyor: 'id_surveyor',
  id_account: 'id_account'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.LevelDukungan = makeEnum({
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D'
});

exports.Prisma.ModelName = makeEnum({
  accounts: 'accounts',
  calon: 'calon',
  pemilih: 'pemilih',
  surveyor: 'surveyor',
  dukungan: 'dukungan'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"LevelDukungan\",\"values\":[{\"name\":\"A\",\"dbName\":null},{\"name\":\"B\",\"dbName\":null},{\"name\":\"C\",\"dbName\":null},{\"name\":\"D\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"accounts\",\"dbName\":null,\"fields\":[{\"name\":\"id_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"calon\",\"relationName\":\"accountsTocalon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surveyor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"surveyor\",\"relationName\":\"accountsTosurveyor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pemilih\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pemilih\",\"relationName\":\"accountsTopemilih\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"calon\",\"dbName\":null,\"fields\":[{\"name\":\"id_calon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"accounts\",\"relationName\":\"accountsTocalon\",\"relationFromFields\":[\"id_account\"],\"relationToFields\":[\"id_account\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dukungan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dukungan\",\"relationName\":\"calonTodukungan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"pemilih\",\"dbName\":null,\"fields\":[{\"name\":\"id_pemilih\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"accounts\",\"relationName\":\"accountsTopemilih\",\"relationFromFields\":[\"id_account\"],\"relationToFields\":[\"id_account\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dukungan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dukungan\",\"relationName\":\"dukunganTopemilih\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"surveyor\",\"dbName\":null,\"fields\":[{\"name\":\"id_surveyor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"accounts\",\"relationName\":\"accountsTosurveyor\",\"relationFromFields\":[\"id_account\"],\"relationToFields\":[\"id_account\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dukungan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dukungan\",\"relationName\":\"dukunganTosurveyor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"dukungan\",\"dbName\":null,\"fields\":[{\"name\":\"id_dukungan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pemilih\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pemilih\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pemilih\",\"relationName\":\"dukunganTopemilih\",\"relationFromFields\":[\"id_pemilih\"],\"relationToFields\":[\"id_pemilih\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_surveyor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surveyor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"surveyor\",\"relationName\":\"dukunganTosurveyor\",\"relationFromFields\":[\"id_surveyor\"],\"relationToFields\":[\"id_surveyor\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level_dukungan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LevelDukungan\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_calon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"calon\",\"relationName\":\"calonTodukungan\",\"relationFromFields\":[\"id_calon\"],\"relationToFields\":[\"id_calon\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_pemilih\",\"level_dukungan\",\"id_calon\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_pemilih\",\"level_dukungan\",\"id_calon\"]}],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"accounts\",\"plural\":\"accounts\",\"findUnique\":\"findUniqueaccounts\",\"findUniqueOrThrow\":\"findUniqueaccountsOrThrow\",\"findFirst\":\"findFirstaccounts\",\"findFirstOrThrow\":\"findFirstaccountsOrThrow\",\"findMany\":\"findManyaccounts\",\"create\":\"createOneaccounts\",\"createMany\":\"createManyaccounts\",\"delete\":\"deleteOneaccounts\",\"update\":\"updateOneaccounts\",\"deleteMany\":\"deleteManyaccounts\",\"updateMany\":\"updateManyaccounts\",\"upsert\":\"upsertOneaccounts\",\"aggregate\":\"aggregateaccounts\",\"groupBy\":\"groupByaccounts\"},{\"model\":\"calon\",\"plural\":\"calons\",\"findUnique\":\"findUniquecalon\",\"findUniqueOrThrow\":\"findUniquecalonOrThrow\",\"findFirst\":\"findFirstcalon\",\"findFirstOrThrow\":\"findFirstcalonOrThrow\",\"findMany\":\"findManycalon\",\"create\":\"createOnecalon\",\"createMany\":\"createManycalon\",\"delete\":\"deleteOnecalon\",\"update\":\"updateOnecalon\",\"deleteMany\":\"deleteManycalon\",\"updateMany\":\"updateManycalon\",\"upsert\":\"upsertOnecalon\",\"aggregate\":\"aggregatecalon\",\"groupBy\":\"groupBycalon\"},{\"model\":\"pemilih\",\"plural\":\"pemilihs\",\"findUnique\":\"findUniquepemilih\",\"findUniqueOrThrow\":\"findUniquepemilihOrThrow\",\"findFirst\":\"findFirstpemilih\",\"findFirstOrThrow\":\"findFirstpemilihOrThrow\",\"findMany\":\"findManypemilih\",\"create\":\"createOnepemilih\",\"createMany\":\"createManypemilih\",\"delete\":\"deleteOnepemilih\",\"update\":\"updateOnepemilih\",\"deleteMany\":\"deleteManypemilih\",\"updateMany\":\"updateManypemilih\",\"upsert\":\"upsertOnepemilih\",\"aggregate\":\"aggregatepemilih\",\"groupBy\":\"groupBypemilih\"},{\"model\":\"surveyor\",\"plural\":\"surveyors\",\"findUnique\":\"findUniquesurveyor\",\"findUniqueOrThrow\":\"findUniquesurveyorOrThrow\",\"findFirst\":\"findFirstsurveyor\",\"findFirstOrThrow\":\"findFirstsurveyorOrThrow\",\"findMany\":\"findManysurveyor\",\"create\":\"createOnesurveyor\",\"createMany\":\"createManysurveyor\",\"delete\":\"deleteOnesurveyor\",\"update\":\"updateOnesurveyor\",\"deleteMany\":\"deleteManysurveyor\",\"updateMany\":\"updateManysurveyor\",\"upsert\":\"upsertOnesurveyor\",\"aggregate\":\"aggregatesurveyor\",\"groupBy\":\"groupBysurveyor\"},{\"model\":\"dukungan\",\"plural\":\"dukungans\",\"findUnique\":\"findUniquedukungan\",\"findUniqueOrThrow\":\"findUniquedukunganOrThrow\",\"findFirst\":\"findFirstdukungan\",\"findFirstOrThrow\":\"findFirstdukunganOrThrow\",\"findMany\":\"findManydukungan\",\"create\":\"createOnedukungan\",\"createMany\":\"createManydukungan\",\"delete\":\"deleteOnedukungan\",\"update\":\"updateOnedukungan\",\"deleteMany\":\"deleteManydukungan\",\"updateMany\":\"updateManydukungan\",\"upsert\":\"upsertOnedukungan\",\"aggregate\":\"aggregatedukungan\",\"groupBy\":\"groupBydukungan\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "F:\\Kerjaan\\services\\prisma-bug-reproduce\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "filteredRelationCount"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
  },
  "relativePath": "..",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\client\\schema.prisma")
